import React, { useState, useRef } from 'react';
import { X, Upload, MapPin, Navigation, Image as ImageIcon, RotateCcw, Check, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface PhotoLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  profilePicture: string;
  onUpdatePicture: (url: string) => void;
  onResetPicture: () => void;
  currentLocation: string;
  onUpdateLocation: (loc: string) => void;
  onFetchLiveLocation: () => void;
  isFetchingLocation: boolean;
  locationStatusMessage: string | null;
}

export const PhotoLocationModal: React.FC<PhotoLocationModalProps> = ({
  isOpen,
  onClose,
  profilePicture,
  onUpdatePicture,
  onResetPicture,
  currentLocation,
  onUpdateLocation,
  onFetchLiveLocation,
  isFetchingLocation,
  locationStatusMessage,
}) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'location'>('photo');
  const [customUrl, setCustomUrl] = useState<string>('');
  const [locationInput, setLocationInput] = useState<string>(currentLocation);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const showSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB. Please choose a smaller photo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Url = event.target?.result as string;
      if (base64Url) {
        onUpdatePicture(base64Url);
        showSuccess('Profile picture updated successfully!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    onUpdatePicture(customUrl.trim());
    setCustomUrl('');
    showSuccess('Profile picture updated from URL!');
  };

  const handleSaveLocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationInput.trim()) return;
    onUpdateLocation(locationInput.trim());
    showSuccess('Location updated successfully!');
  };

  const commonLocations = [
    'Ayodhya, Uttar Pradesh, India',
    'Lucknow, Uttar Pradesh, India',
    'Noida, Uttar Pradesh, India',
    'Gurugram, Haryana, India',
    'Bengaluru, Karnataka, India',
    'Hyderabad, Telangana, India',
    'Pune, Maharashtra, India',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#1b222c] border border-[rgba(232,236,239,0.18)] rounded-[4px] w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-loc-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(232,236,239,0.12)] bg-[#171e27]">
          <div>
            <h2 id="photo-loc-title" className="text-[1.1rem] font-semibold text-[#e8ecef] flex items-center gap-2">
              <span>Profile Settings</span>
              <span className="text-xs font-mono text-[#e3a857] bg-[rgba(227,168,87,0.1)] px-2 py-0.5 rounded-[2px] border border-[#b98a46]/30">
                Photo &amp; Location
              </span>
            </h2>
            <p className="text-xs text-[#9ba7b4] mt-0.5">
              Customize your profile photo and update your visible location
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9ba7b4] hover:text-[#e8ecef] hover:bg-[rgba(232,236,239,0.08)] rounded-[2px] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[rgba(232,236,239,0.12)] bg-[#141a22] px-6">
          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'photo'
                ? 'border-[#e3a857] text-[#e3a857]'
                : 'border-transparent text-[#9ba7b4] hover:text-[#e8ecef]'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Upload Photo</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('location');
              setLocationInput(currentLocation);
            }}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'location'
                ? 'border-[#e3a857] text-[#e3a857]'
                : 'border-transparent text-[#9ba7b4] hover:text-[#e8ecef]'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Current Location</span>
          </button>
        </div>

        {/* Status / Success Alert */}
        {(successMessage || locationStatusMessage) && (
          <div className="mx-6 mt-4 p-3 bg-[rgba(227,168,87,0.12)] border border-[#b98a46] rounded-[2px] text-xs font-mono text-[#e3a857] flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-[#e3a857]" />
            <span>{successMessage || locationStatusMessage}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'photo' ? (
            <div className="space-y-6">
              {/* Picture Preview */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-[#12171f] rounded border border-[rgba(232,236,239,0.1)]">
                <div className="w-28 h-28 rounded-[4px] overflow-hidden border-2 border-[#b98a46] shadow-md bg-[#1b222c] shrink-0">
                  <img
                    src={profilePicture}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-sm font-semibold text-[#e8ecef]">Current Profile Photo</h3>
                  <p className="text-xs text-[#9ba7b4] mt-1">
                    Upload your headshot or high-resolution picture. It will be displayed in the portfolio header, hero card, and interactive previews.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-xs font-semibold rounded-[2px] transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#181205]" />
                      <span>Choose File from Device</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onResetPicture();
                        showSuccess('Reset to default photo');
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-transparent hover:bg-[rgba(232,236,239,0.06)] border border-[rgba(232,236,239,0.15)] text-[#9ba7b4] hover:text-[#e8ecef] text-xs rounded-[2px] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Default</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/png, image/jpeg, image/jpg, image/webp"
                className="hidden"
              />

              {/* Drag and Drop Zone */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[rgba(232,236,239,0.2)] hover:border-[#e3a857] bg-[#141a22] hover:bg-[rgba(227,168,87,0.03)] p-6 rounded text-center cursor-pointer transition-colors"
              >
                <Upload className="w-8 h-8 text-[#e3a857] mx-auto mb-2 opacity-80" />
                <p className="text-xs font-semibold text-[#e8ecef]">
                  Click to browse or drop an image here
                </p>
                <p className="text-[11px] text-[#6b7683] mt-1">
                  Supports PNG, JPG, JPEG, WEBP (up to 5MB). Encoded locally and saved in your browser.
                </p>
              </div>

              {/* Alternative: Image URL */}
              <form onSubmit={handleApplyUrl} className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9ba7b4]">
                  Or Enter Image Web URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://example.com/my-photo.jpg"
                    className="flex-1 bg-[#12171f] border border-[rgba(232,236,239,0.15)] rounded-[2px] px-3 py-2 text-xs text-[#e8ecef] focus:outline-hidden focus:border-[#e3a857]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1b222c] hover:bg-[#252f3d] border border-[rgba(232,236,239,0.2)] text-[#e8ecef] text-xs font-medium rounded-[2px] transition-colors cursor-pointer"
                  >
                    Apply URL
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Current Active Location Display */}
              <div className="p-4 bg-[#12171f] rounded border border-[rgba(232,236,239,0.1)] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e3a857] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#6b7683]">
                    Currently Displayed Location
                  </div>
                  <div className="text-base font-semibold text-[#e8ecef] mt-0.5">
                    {currentLocation}
                  </div>
                  <p className="text-xs text-[#9ba7b4] mt-1">
                    This location appears across your portfolio header, hero section, resume viewer, contact card, and PDF resume.
                  </p>
                </div>
              </div>

              {/* GPS Live Detection */}
              <div className="p-4 bg-[rgba(227,168,87,0.06)] border border-[#b98a46]/40 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold text-[#e3a857] uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Auto-Detect Current GPS Location</span>
                  </h4>
                  <p className="text-xs text-[#9ba7b4] mt-0.5">
                    Uses your browser's secure GPS to detect your real-time city and state.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onFetchLiveLocation}
                  disabled={isFetchingLocation}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-xs font-semibold rounded-[2px] transition-colors disabled:opacity-50 cursor-pointer shrink-0"
                >
                  <Navigation className={`w-3.5 h-3.5 ${isFetchingLocation ? 'animate-spin' : ''}`} />
                  <span>{isFetchingLocation ? 'Locating...' : 'Detect via GPS'}</span>
                </button>
              </div>

              {/* Manual Location Input Form */}
              <form onSubmit={handleSaveLocation} className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9ba7b4]">
                  Or Enter Location Manually
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    placeholder="e.g., Ayodhya, Uttar Pradesh, India"
                    className="flex-1 bg-[#12171f] border border-[rgba(232,236,239,0.15)] rounded-[2px] px-3 py-2 text-xs text-[#e8ecef] focus:outline-hidden focus:border-[#e3a857]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-xs font-semibold rounded-[2px] transition-colors cursor-pointer"
                  >
                    Save
                  </button>
                </div>
              </form>

              {/* Quick Preset Buttons */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6b7683] mb-2">
                  Quick Select Common Hubs:
                </label>
                <div className="flex flex-wrap gap-2">
                  {commonLocations.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setLocationInput(loc);
                        onUpdateLocation(loc);
                        showSuccess(`Location set to ${loc}`);
                      }}
                      className={`text-xs px-2.5 py-1 rounded-[2px] border transition-colors cursor-pointer ${
                        currentLocation === loc
                          ? 'bg-[#e3a857] text-[#181205] border-[#e3a857] font-semibold'
                          : 'bg-[#141a22] text-[#9ba7b4] hover:text-[#e8ecef] border-[rgba(232,236,239,0.15)] hover:border-[#b98a46]'
                      }`}
                    >
                      {loc.split(',')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[rgba(232,236,239,0.12)] bg-[#171e27] text-xs text-[#6b7683]">
          <span>Changes are saved automatically to your device</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#12171f] hover:bg-[#1a212b] border border-[rgba(232,236,239,0.15)] text-[#e8ecef] rounded-[2px] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
