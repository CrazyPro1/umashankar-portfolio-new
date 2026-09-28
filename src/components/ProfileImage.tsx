import { ImgHTMLAttributes, useState } from 'react';

export function ProfileImage({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  return <img {...props} src={failed ? `${import.meta.env.BASE_URL}profile-fallback.svg` : src} alt={alt}
    onError={() => setFailed(true)} />;
}
