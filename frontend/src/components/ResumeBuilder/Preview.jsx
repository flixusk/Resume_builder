// Preview.jsx
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Preview = ({ formData }) => {
  const previewRef = useRef();

  const downloadPDF = () => {
    const element = previewRef.current;

    // Define PDF options
    const options = {
      margin: [10, 10, 10, 10], // Margin in mm
      filename: 'resume_preview.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Increase scale for higher resolution
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generate PDF
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="text-center mt-4">
      <div
        ref={previewRef}
        className="p-8 bg-white rounded-lg shadow-lg max-w-[210mm] mx-auto"
        style={{ backgroundColor: 'white' }} // Ensure the background color is white
      >
        {/* Header Section */}
        <header className="mb-6 text-center">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-cyan-600 font-extrabold mb-2">
              {formData.name}
            </h1>
          </div>
        </header>

        {/* Contact Information Section */}
        <section className="mb-8 text-left">
          <p className="text-sm text-gray-700">{formData.location}</p>
          <p className="text-sm text-gray-700">{formData.phone}</p>
          <p className="text-sm text-gray-700">{formData.email}</p>
          <p className="text-sm text-gray-700">{formData.summary}</p>
          <hr className="my-4 border-gray-300" />
        </section>

        {/* Work Experience Section */}
        <section className="mb-8 text-left">
          <h2 className="text-2xl text-cyan-600 font-bold mb-4 text-center relative before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:bg-cyan-600 before:-mt-2 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-cyan-600 after:-mb-2">
            Work Experience
          </h2>
          {formData.experience.length === 0 ? (
            <p className="text-sm text-gray-500 text-center">No work experience added.</p>
          ) : (
            formData.experience.map((exp, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm text-left">
                <p>{exp.title}</p>
                <p>{exp.company}</p>
                <p>{exp.location}</p>
                <p>{exp.description}</p>
              </div>
            ))
          )}
          <hr className="my-4 border-cyan-600" />
        </section>

        {/* Skills Section */}
        <section className="mb-8 text-left">
          <h2 className="text-2xl text-cyan-600 font-bold mb-4 text-center relative before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:bg-cyan-600 before:-mt-2 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-cyan-600 after:-mb-2">
            Skills
          </h2>
          {formData.skills.length === 0 ? (
            <p className="text-gray-500 text-center">No skills added.</p>
          ) : (
            formData.skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg shadow-sm text-left">
                <p>{skill.name}</p>
                <p>{skill.years} years</p>
              </div>
            ))
          )}
          <hr className="my-4 border-cyan-600" />
        </section>

        {/* Education Section */}
        <section className="mb-8 text-left">
          <h2 className="text-2xl text-cyan-600 font-bold mb-4 text-center relative before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:bg-cyan-600 before:-mt-2 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-cyan-600 after:-mb-2">
            Education
          </h2>
          {formData.education.length === 0 ? (
            <p className="text-gray-500 text-center">No education added.</p>
          ) : (
            formData.education.map((edu, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm text-left">
                <p>{edu.school}</p>
                <p>{edu.degree}</p>
                <p>{edu.field}</p>
                <p>{edu.location}</p>
              </div>
            ))
          )}
          <hr className="my-4 border-cyan-600" />
        </section>
      </div>

      <button
        onClick={downloadPDF}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 text-sm mt-4"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Preview;
