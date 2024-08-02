import React from 'react';

const TemplateCV = ({ formData, onInputChange, onExperienceChange, onAddExperience, onSkillChange, onAddSkill, onEducationChange, onAddEducation }) => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{formData.name}</h1>
        <p className="text-lg">{formData.location}</p>
        <p className="text-lg">{formData.phone}</p>
        <p className="text-lg">{formData.email}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <input 
              type="text" 
              name="title" 
              value={exp.title} 
              onChange={(e) => onExperienceChange(index, e)} 
              placeholder="Job Title" 
              className="w-full mb-2 p-2 border rounded"
            />
            <input 
              type="text" 
              name="company" 
              value={exp.company} 
              onChange={(e) => onExperienceChange(index, e)} 
              placeholder="Company Name" 
              className="w-full mb-2 p-2 border rounded"
            />
            <input 
              type="text" 
              name="location" 
              value={exp.location} 
              onChange={(e) => onExperienceChange(index, e)} 
              placeholder="Location" 
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea 
              name="description" 
              value={exp.description} 
              onChange={(e) => onExperienceChange(index, e)} 
              placeholder="Description" 
              className="w-full mb-2 p-2 border rounded"
            ></textarea>
          </div>
        ))}
        <button 
          onClick={onAddExperience} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Experience
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="mb-4 flex gap-4">
            <input 
              type="text" 
              name="name" 
              value={skill.name} 
              onChange={(e) => onSkillChange(index, e)} 
              placeholder="Skill" 
              className="w-1/2 p-2 border rounded"
            />
            <input 
              type="text" 
              name="years" 
              value={skill.years} 
              onChange={(e) => onSkillChange(index, e)} 
              placeholder="Years of Experience" 
              className="w-1/2 p-2 border rounded"
            />
          </div>
        ))}
        <button 
          onClick={onAddSkill} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Skill
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <input 
              type="text" 
              name="school" 
              value={edu.school} 
              onChange={(e) => onEducationChange(index, e)} 
              placeholder="School" 
              className="w-full mb-2 p-2 border rounded"
            />
            <input 
              type="text" 
              name="degree" 
              value={edu.degree} 
              onChange={(e) => onEducationChange(index, e)} 
              placeholder="Degree" 
              className="w-full mb-2 p-2 border rounded"
            />
            <input 
              type="text" 
              name="field" 
              value={edu.field} 
              onChange={(e) => onEducationChange(index, e)} 
              placeholder="Field of Study" 
              className="w-full mb-2 p-2 border rounded"
            />
            <input 
              type="text" 
              name="location" 
              value={edu.location} 
              onChange={(e) => onEducationChange(index, e)} 
              placeholder="Location" 
              className="w-full mb-2 p-2 border rounded"
            />
          </div>
        ))}
        <button 
          onClick={onAddEducation} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Education
        </button>
      </div>
    </div>
  );
};

export default TemplateCV;
