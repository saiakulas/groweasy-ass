import React, { useState } from 'react';
import { AdBanner } from '@/app/types/banner';
interface EditBannerTemplateBsProps {
  banner: AdBanner;
  onSave: (updatedBanner: AdBanner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, onSave, onClose }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);

  const handleSave = () => {
    const updatedBanner = { ...banner, title, description, cta, image, background };
    onSave(updatedBanner);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 mb-2 w-full"
      />
      <input
        value={cta}
        onChange={(e) => setCta(e.target.value)}
        placeholder="CTA"
        className="border p-2 mb-2 w-full"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="border p-2 mb-2 w-full"
      />
      <input
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        placeholder="Background Color"
        className="border p-2 mb-2 w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleSave}>Save</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
    </div>
  );
};

export default EditBannerTemplateBs;
