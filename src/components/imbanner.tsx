import React from 'react';
import { AdBanner } from '@/app/types/banner';

interface BannerImageCompProps {
  banner: AdBanner;
  onEdit: (banner: AdBanner) => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, onEdit }) => {
  return (
    <div style={{ backgroundColor: banner.background, padding: '20px', margin: '10px' }}>
      <h2>{banner.title}</h2>
      <p>{banner.description}</p>
      <img src={banner.image} alt={banner.title} style={{ maxWidth: '100%' }} />
      <button>{banner.cta}</button>
      <button onClick={() => onEdit(banner)}>Edit</button>
    </div>
  );
};

export default BannerImageComp;
