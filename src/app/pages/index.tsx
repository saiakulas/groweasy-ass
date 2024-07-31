import React, { useState } from 'react';
import { AdBanner } from '../types/banner';
import EditBannerTemplateBs from '@/components/editbanner';
import adBanners from '../data/adBanners.json';
import { FaEdit } from 'react-icons/fa';

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
    <div
      className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      style={{
        backgroundImage: `url(https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {banners.map((banner) => (
        <div key={banner.id} className="bg-white shadow-md rounded-lg overflow-hidden relative w-80 h-96">
          <img src={banner.image} alt={banner.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{banner.title}</h2>
            <p className="text-gray-700 mb-4">{banner.description}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleEdit(banner)}
            >
              {banner.cta}
            </button>
          </div>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => handleEdit(banner)}
          >
            <FaEdit />
          </button>
        </div>
      ))}
      {editingBanner && (
        <EditBannerTemplateBs banner={editingBanner} onSave={handleSave} onClose={handleClose} />
      )}
    </div>
  );
};

export default Home;
