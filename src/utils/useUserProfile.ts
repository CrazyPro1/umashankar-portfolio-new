import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';

const STORAGE_PHOTO_KEY = 'umashankar_profile_picture';
const STORAGE_LOCATION_KEY = 'umashankar_current_location';

export function useUserProfile() {
  const [profilePicture, setProfilePicture] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PHOTO_KEY);
      return saved && saved.trim() ? saved : PERSONAL_INFO.defaultPhotoUrl;
    } catch {
      return PERSONAL_INFO.defaultPhotoUrl;
    }
  });

  const [currentLocation, setCurrentLocation] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LOCATION_KEY);
      return saved && saved.trim() ? saved : PERSONAL_INFO.location;
    } catch {
      return PERSONAL_INFO.location;
    }
  });

  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(false);
  const [locationStatusMessage, setLocationStatusMessage] = useState<string | null>(null);

  const updateProfilePicture = (newUrl: string) => {
    setProfilePicture(newUrl);
    try {
      localStorage.setItem(STORAGE_PHOTO_KEY, newUrl);
    } catch (e) {
      console.warn('Could not save photo to localStorage', e);
    }
  };

  const resetProfilePicture = () => {
    setProfilePicture(PERSONAL_INFO.defaultPhotoUrl);
    try {
      localStorage.removeItem(STORAGE_PHOTO_KEY);
    } catch (e) {
      console.warn('Could not reset photo in localStorage', e);
    }
  };

  const updateLocation = (newLoc: string) => {
    const trimmed = newLoc.trim();
    if (!trimmed) return;
    setCurrentLocation(trimmed);
    try {
      localStorage.setItem(STORAGE_LOCATION_KEY, trimmed);
    } catch (e) {
      console.warn('Could not save location to localStorage', e);
    }
  };

  const resetLocation = () => {
    setCurrentLocation(PERSONAL_INFO.location);
    try {
      localStorage.removeItem(STORAGE_LOCATION_KEY);
    } catch (e) {
      console.warn('Could not reset location in localStorage', e);
    }
  };

  const fetchLiveLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatusMessage('Geolocation is not supported by your browser.');
      setTimeout(() => setLocationStatusMessage(null), 4000);
      return;
    }

    setIsFetchingLocation(true);
    setLocationStatusMessage('Acquiring GPS coordinates...');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          setLocationStatusMessage('Resolving city and state from coordinates...');
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          if (res.ok) {
            const data = await res.json();
            const city = data.address?.city || data.address?.town || data.address?.suburb || data.address?.county || 'Current City';
            const state = data.address?.state || '';
            const country = data.address?.country || 'India';
            const resolvedLocation = `${city}${state ? `, ${state}` : ''}, ${country}`;
            updateLocation(resolvedLocation);
            setLocationStatusMessage(`Location updated to: ${resolvedLocation}`);
          } else {
            const fallback = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
            updateLocation(fallback);
            setLocationStatusMessage(`Location updated to coordinates: ${fallback}`);
          }
        } catch {
          const fallback = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
          updateLocation(fallback);
          setLocationStatusMessage(`Location updated to GPS coordinates: ${fallback}`);
        } finally {
          setIsFetchingLocation(false);
          setTimeout(() => setLocationStatusMessage(null), 4000);
        }
      },
      (error) => {
        setIsFetchingLocation(false);
        setLocationStatusMessage(`Unable to retrieve location (${error.message}). You can enter it manually below.`);
        setTimeout(() => setLocationStatusMessage(null), 5000);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return {
    profilePicture,
    updateProfilePicture,
    resetProfilePicture,
    currentLocation,
    updateLocation,
    resetLocation,
    fetchLiveLocation,
    isFetchingLocation,
    locationStatusMessage,
  };
}
