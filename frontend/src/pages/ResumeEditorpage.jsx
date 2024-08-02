import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Template1 from '../components/ResumeBuilder/Template1';
import Template2 from '../components/ResumeBuilder/Template2';
import Template3 from '../components/ResumeBuilder/Template3';
import ResumeForm from '../components/ResumeBuilder/form';

const templates = {
  template1: Template1,
  template2: Template2,
  template3: Template3,
};

const ResumeEditorPage = () => {
  const { template } = useParams();
  const SelectedTemplate = templates[template];
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    jobs: []  // Ensure jobs are included in state
  });

  const handleFormDataChange = (newFormData) => {
    setProfile((prevProfile) => ({ ...prevProfile, ...newFormData }));
  };

  const handleDownloadPDF = () => {
    const resumeElement = document.querySelector("#resume-preview");

    html2canvas(resumeElement, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('resume.pdf');
    });
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h3 className="text-xl mb-4">Edit Your Resume</h3>
        <ResumeForm onFormDataChange={handleFormDataChange} profile={profile} />
      </div>
      <div className="w-1/2 p-4">
        <h3 className="text-xl mb-4">Preview</h3>
        <div id="resume-preview">
          <SelectedTemplate profile={profile} />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleDownloadPDF}
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default ResumeEditorPage;
