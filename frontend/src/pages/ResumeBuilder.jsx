import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PreviewComponent from '../components/ResumeBuilder/Preview';
import Template1 from '../components/ResumeBuilder/Template1';
import Template2 from '../components/ResumeBuilder/Template2';
import Template3 from '../components/ResumeBuilder/Template3';
import Template4 from '../components/ResumeBuilder/Template4';
import Template5 from '../components/ResumeBuilder/Template5';
import Template6 from '../components/ResumeBuilder/Template6';

// Mapping template IDs to components
const templates = {
  1: Template1,
  2: Template2,
  3: Template3,
  4: Template4,
  5: Template5,
  6: Template6,
};

const ResumeBuilder = () => {
  const location = useLocation();
  const templateId = location.state?.templateId;
  const TemplateComponent = templates[templateId] || null;

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    summary: '',
    experience: [{ title: '', company: '', location: '', description: '' }],
    skills: [{ name: '', years: '' }],
    education: [{ school: '', degree: '', field: '', location: '' }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData(prevState => ({
      ...prevState,
      experience: newExperience,
    }));
  };

  const handleAddExperience = () => {
    setFormData(prevState => ({
      ...prevState,
      experience: [...prevState.experience, { title: '', company: '', location: '', description: '' }],
    }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...formData.skills];
    newSkills[index] = { ...newSkills[index], [name]: value };
    setFormData(prevState => ({
      ...prevState,
      skills: newSkills,
    }));
  };

  const handleAddSkill = () => {
    setFormData(prevState => ({
      ...prevState,
      skills: [...prevState.skills, { name: '', years: '' }],
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData(prevState => ({
      ...prevState,
      education: newEducation,
    }));
  };

  const handleAddEducation = () => {
    setFormData(prevState => ({
      ...prevState,
      education: [...prevState.education, { school: '', degree: '', field: '', location: '' }],
    }));
  };

  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  const handleDownload = () => {
    const input = document.getElementById('preview');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
      {TemplateComponent ? (
        <TemplateComponent
          formData={formData}
          onInputChange={handleInputChange}
          onExperienceChange={handleExperienceChange}
          onAddExperience={handleAddExperience}
          onSkillChange={handleSkillChange}
          onAddSkill={handleAddSkill}
          onEducationChange={handleEducationChange}
          onAddEducation={handleAddEducation}
        />
      ) : (
        <p className="text-red-500">No template selected.</p>
      )}
      <div id="preview" className="hidden">
        <PreviewComponent ref={previewRef} formData={formData} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
