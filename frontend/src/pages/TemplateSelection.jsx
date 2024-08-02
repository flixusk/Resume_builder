import React from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateSelectionPage = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    navigate(`/editor/${template}`);
  };

  return (
    <div className="bg-stone-900 text-white p-8 min-h-screen w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => handleTemplateSelect('template1')}
          className="cursor-pointer border border-cyan-600 bg-stone-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold mb-2">Template 1</h3>
          <p className="text-sm text-gray-300">A modern and clean design.</p>
        </div>
        <div
          onClick={() => handleTemplateSelect('template2')}
          className="cursor-pointer border border-cyan-600 bg-stone-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold mb-2">Template 2</h3>
          <p className="text-sm text-gray-300">A classic and professional look.</p>
        </div>
        <div
          onClick={() => handleTemplateSelect('template3')}
          className="cursor-pointer border border-cyan-600 bg-stone-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold mb-2">Template 3</h3>
          <p className="text-sm text-gray-300">A versatile and dynamic option.</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelectionPage;
