// src/components/ResumeBuilder/Template5.jsx
import React from 'react';

const Template5 = ({ formData }) => {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg border border-gray-600">
      <h1 className="text-4xl font-bold mb-2">{formData.name}</h1>
      <p className="text-xl mb-4">{formData.title}</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>LinkedIn: {formData.linkedin}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        {formData.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p>{job.company} | {job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template5;
