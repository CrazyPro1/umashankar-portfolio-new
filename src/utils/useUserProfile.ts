import { PERSONAL_INFO } from '../data/resumeData';

// Shared identity, never overridden by visitors' localStorage or GPS.
export function useUserProfile() {
  return { profilePicture: `${import.meta.env.BASE_URL}profile.jpg`, currentLocation: PERSONAL_INFO.location };
}
