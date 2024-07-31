import React, { useState } from 'react';
import { AdBanner } from '../types/banner';
import BannerImageComp from '@/components/imbanner';
import EditBannerTemplateBs from '@/components/editbanner';
import adBanners from '../data/adBanners.json';

const Home: React.FC = () => {
  const [banners, setBanners] = useState<AdBanner[]>(adBanners);
  const [editingBanner, setEditingBanner] = useState<AdBanner | null>(null);

  const handleEdit = (banner: AdBanner) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: AdBanner) => {
    setBanners(banners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b)));
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className="p-4">
      {banners.map((banner) => (
        <BannerImageComp key={banner.id} banner={banner} onEdit={handleEdit} />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs banner={editingBanner} onSave={handleSave} onClose={handleClose} />
      )}
    </div>
  );
};

export default Home;
