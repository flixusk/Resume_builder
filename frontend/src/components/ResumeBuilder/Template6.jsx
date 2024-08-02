import React, { useState, useRef } from 'react';

const Template1 = ({ formData, onInputChange, onExperienceChange, onAddExperience, onSkillChange, onAddSkill, onEducationChange, onAddEducation }) => {
  const [editing, setEditing] = useState({ section: null, index: null });
  const inputRefs = useRef({});

  const handleEditClick = (section, index) => {
    setEditing({ section, index });
  };

  const handleBlur = () => {
    setEditing({ section: null, index: null });
  };

  const handleFocus = (section, index) => {
    setEditing({ section, index });
  };

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;
    if (section === 'experience') {
      onExperienceChange(index, e);
    } else if (section === 'skills') {
      onSkillChange(index, e);
    } else if (section === 'education') {
      onEducationChange(index, e);
    } else {
      onInputChange(e);
    }
  };

  const handleKeyDown = (e, section, index) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Header Section */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold mb-2">
          {editing.section === 'header' ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e, 'header')}
              onBlur={handleBlur}
              onFocus={() => handleFocus('header')}
              onKeyDown={(e) => handleKeyDown(e, 'header')}
              className="w-full p-2 border border-gray-300 rounded-lg"
              autoFocus
              ref={(el) => (inputRefs.current['name'] = el)}
            />
          ) : (
            <span onClick={() => handleEditClick('header', null)}>{formData.name || 'Your Name'}</span>
          )}
        </h1>
        <p className="text-xl text-gray-700">
          {editing.section === 'header' ? (
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, 'header')}
              onBlur={handleBlur}
              onFocus={() => handleFocus('header')}
              onKeyDown={(e) => handleKeyDown(e, 'header')}
              className="w-full p-2 border border-gray-300 rounded-lg"
              ref={(el) => (inputRefs.current['email'] = el)}
            />
          ) : (
            <span onClick={() => handleEditClick('header', null)}>{formData.email || 'Email Address'}</span>
          )}
        </p>
        <p className="text-lg text-gray-500">
          {editing.section === 'header' ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e, 'header')}
              onBlur={handleBlur}
              onFocus={() => handleFocus('header')}
              onKeyDown={(e) => handleKeyDown(e, 'header')}
              className="w-full p-2 border border-gray-300 rounded-lg"
              ref={(el) => (inputRefs.current['phone'] = el)}
            />
          ) : (
            <span onClick={() => handleEditClick('header', null)}>{formData.phone || 'Phone Number'}</span>
          )}
        </p>
        <p className="text-md text-gray-400">
          {editing.section === 'header' ? (
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={(e) => handleChange(e, 'header')}
              onBlur={handleBlur}
              onFocus={() => handleFocus('header')}
              onKeyDown={(e) => handleKeyDown(e, 'header')}
              className="w-full p-2 border border-gray-300 rounded-lg"
              ref={(el) => (inputRefs.current['location'] = el)}
            />
          ) : (
            <span onClick={() => handleEditClick('header', null)}>{formData.location || 'Location'}</span>
          )}
        </p>
        <hr className="my-4 border-gray-300" />
      </header>

      {/* Summary Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        {editing.section === 'summary' ? (
          <textarea
            name="summary"
            value={formData.summary}
            onChange={(e) => handleChange(e, 'summary')}
            onBlur={handleBlur}
            onFocus={() => handleFocus('summary')}
            onKeyDown={(e) => handleKeyDown(e, 'summary')}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            ref={(el) => (inputRefs.current['summary'] = el)}
          />
        ) : (
          <p className="text-lg text-gray-700" onClick={() => handleEditClick('summary', null)}>
            {formData.summary || 'A brief summary about yourself.'}
          </p>
        )}
        <hr className="my-4 border-gray-300" />
      </section>

      {/* Work Experience Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {formData.experience.length === 0 ? (
          <p className="text-gray-500">No work experience added.</p>
        ) : (
          formData.experience.map((exp, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm">
              {editing.section === 'experience' && editing.index === index ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={exp.title}
                    onChange={(e) => handleChange(e, 'experience', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('experience', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'experience', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Position"
                    autoFocus
                    ref={(el) => (inputRefs.current[`experience-${index}-title`] = el)}
                  />
                  <input
                    type="text"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(e, 'experience', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('experience', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'experience', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    placeholder="Company Name"
                    ref={(el) => (inputRefs.current[`experience-${index}-company`] = el)}
                  />
                  <input
                    type="text"
                    name="location"
                    value={exp.location}
                    onChange={(e) => handleChange(e, 'experience', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('experience', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'experience', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    placeholder="Location"
                    ref={(el) => (inputRefs.current[`experience-${index}-location`] = el)}
                  />
                  <textarea
                    name="description"
                    value={exp.description}
                    onChange={(e) => handleChange(e, 'experience', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('experience', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'experience', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    placeholder="Description"
                    rows="4"
                    ref={(el) => (inputRefs.current[`experience-${index}-description`] = el)}
                  />
                </>
              ) : (
                <>
                  <p className="text-md text-gray-700 mb-1" onClick={() => handleEditClick('experience', index)}>{exp.title || 'Position'}</p>
                  <p className="text-md text-gray-700 mb-1" onClick={() => handleEditClick('experience', index)}>{exp.company || 'Company Name'}</p>
                  <p className="text-sm text-gray-600" onClick={() => handleEditClick('experience', index)}>{exp.location || 'Location'}</p>
                  <p className="text-sm text-gray-600" onClick={() => handleEditClick('experience', index)}>{exp.description || 'Description'}</p>
                </>
              )}
            </div>
          ))
        )}
        <button
          onClick={onAddExperience}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
        >
          Add Experience
        </button>
      </section>

      {/* Skills Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {formData.skills.length === 0 ? (
          <p className="text-gray-500">No skills added.</p>
        ) : (
          formData.skills.map((skill, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
              {editing.section === 'skills' && editing.index === index ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={(e) => handleChange(e, 'skills', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('skills', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'skills', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Skill Name"
                    autoFocus
                    ref={(el) => (inputRefs.current[`skills-${index}-name`] = el)}
                  />
                  <input
                    type="text"
                    name="years"
                    value={skill.years}
                    onChange={(e) => handleChange(e, 'skills', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('skills', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'skills', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    placeholder="Years of Experience"
                    ref={(el) => (inputRefs.current[`skills-${index}-years`] = el)}
                  />
                </>
              ) : (
                <>
                  <p className="text-md text-gray-700 mb-1" onClick={() => handleEditClick('skills', index)}>{skill.name || 'Skill Name'}</p>
                  <p className="text-sm text-gray-600" onClick={() => handleEditClick('skills', index)}>{skill.years || 'Years of Experience'}</p>
                </>
              )}
            </div>
          ))
        )}
        <button
          onClick={onAddSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
        >
          Add Skill
        </button>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {formData.education.length === 0 ? (
          <p className="text-gray-500">No education details added.</p>
        ) : (
          formData.education.map((edu, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm">
              {editing.section === 'education' && editing.index === index ? (
                <>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, 'education', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('education', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'education', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Degree"
                    autoFocus
                    ref={(el) => (inputRefs.current[`education-${index}-degree`] = el)}
                  />
                  <input
                    type="text"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleChange(e, 'education', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('education', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'education', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    placeholder="Institution"
                    ref={(el) => (inputRefs.current[`education-${index}-institution`] = el)}
                  />
                  <input
                    type="text"
                    name="year"
                    value={edu.year}
                    onChange={(e) => handleChange(e, 'education', index)}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus('education', index)}
                    onKeyDown={(e) => handleKeyDown(e, 'education', index)}
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    placeholder="Year of Graduation"
                    ref={(el) => (inputRefs.current[`education-${index}-year`] = el)}
                  />
                </>
              ) : (
                <>
                  <p className="text-md text-gray-700 mb-1" onClick={() => handleEditClick('education', index)}>{edu.degree || 'Degree'}</p>
                  <p className="text-md text-gray-700 mb-1" onClick={() => handleEditClick('education', index)}>{edu.institution || 'Institution'}</p>
                  <p className="text-md text-gray-700 mb-1" onClick={() => handleEditClick('education', index)}>{edu.year || 'Year of Graduation'}</p>
                </>
              )}
            </div>
          ))
        )}
        <button
          onClick={onAddEducation}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
        >
          Add Education
        </button>
      </section>
    </div>
  );
};

export default Template1;
