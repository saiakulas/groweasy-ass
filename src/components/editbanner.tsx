import React, { useState, useRef } from 'react';
import { AdBanner } from '@/app/types/banner';
import { FaUpload, FaDownload } from 'react-icons/fa';
import { SlClose } from "react-icons/sl";

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const updatedBanner = { ...banner, title, description, cta, image, background };
    onSave(updatedBanner);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'banner_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Banner</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <SlClose />
          </button>
        </div>
        <div className="mb-4">
          {/* Display current image */}
          {image && (
            <div className="mb-4">
              <img
                src={image}
                alt="Banner Preview"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '150px' }}
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => fileInputRef.current?.click()}
          >
            <FaUpload className="mr-2" /> Upload from Device
          </button>
        </div>
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
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          placeholder="Background Color"
          className="border p-2 mb-2 w-full"
        />
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded flex items-center"
            onClick={handleDownload}
            disabled={!image}
          >
            <FaDownload className="mr-2" /> Download
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
