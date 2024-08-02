import React, { useState } from 'react';

const ResumeForm = ({ onFormDataChange, profile }) => {
  const [profileDetails, setProfileDetails] = useState(profile.profileDetails || '');
  const [personalStatement, setPersonalStatement] = useState(profile.personalStatement || '');
  const [skills, setSkills] = useState(profile.skills || []);
  const [jobHistory, setJobHistory] = useState(profile.jobs || []);
  const [education, setEducation] = useState(profile.education || []);
  const [references, setReferences] = useState(profile.references || '');
  const [name, setName] = useState(profile.name || '');
  const [email, setEmail] = useState(profile.email || '');
  const [phone, setPhone] = useState(profile.phone || '');

  const handleChange = (setter, key) => (e) => {
    const value = e.target.value;
    setter(value);
    onFormDataChange({
      profileDetails,
      personalStatement,
      skills,
      jobHistory,
      education,
      references,
      name,
      email,
      phone,
      [key]: value // Ensure that the correct field is updated
    });
  };

  const handleJobChange = (index, field, value) => {
    const updatedJobs = [...jobHistory];
    updatedJobs[index] = { ...updatedJobs[index], [field]: value };
    setJobHistory(updatedJobs);
    onFormDataChange({ jobs: updatedJobs });
  };

  const addJob = () => {
    setJobHistory([...jobHistory, { title: '', employer: '', date: '', bullets: [''] }]);
  };

  const addBulletToJob = (jobIndex) => {
    const updatedJobs = [...jobHistory];
    updatedJobs[jobIndex].bullets.push('');
    setJobHistory(updatedJobs);
    onFormDataChange({ jobs: updatedJobs });
  };

  const handleBulletChange = (jobIndex, bulletIndex, value) => {
    const updatedJobs = [...jobHistory];
    updatedJobs[jobIndex].bullets[bulletIndex] = value;
    setJobHistory(updatedJobs);
    onFormDataChange({ jobs: updatedJobs });
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value.split('\n');
    setSkills(value);
    onFormDataChange({ skills: value });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducation(updatedEducation);
    onFormDataChange({ education: updatedEducation });
  };

  const addEducation = () => {
    setEducation([...education, { date: '', location: '', institution: '', address: '' }]);
  };

  return (
    <div className="bg-stone-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Profile Details</h2>
      <div className="grid gap-6 mb-8">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange(setName, 'name')}
          placeholder="Name"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange(setEmail, 'email')}
          placeholder="Email"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange(setPhone, 'phone')}
          placeholder="Phone"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <input
          type="text"
          name="profileDetails"
          value={profileDetails}
          onChange={handleChange(setProfileDetails, 'profileDetails')}
          placeholder="Profile Details"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Personal Statement</h2>
      <textarea
        name="personalStatement"
        value={personalStatement}
        onChange={(e) => {
          setPersonalStatement(e.target.value);
          onFormDataChange({
            profileDetails,
            personalStatement: e.target.value,
            skills,
            jobHistory,
            education,
            references,
            name,
            email,
            phone
          });
        }}
        placeholder="Personal Statement"
        className="border border-gray-300 rounded-md p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600"
      />
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <textarea
        value={skills.join('\n')}
        onChange={handleSkillsChange}
        placeholder="Skills (one per line)"
        className="border border-gray-300 rounded-md p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600"
      />
      <h2 className="text-xl font-bold mb-4">Work History</h2>
      {jobHistory.map((job, jobIndex) => (
        <div key={jobIndex} className="border border-gray-300 p-4 mb-6 rounded-md shadow-sm">
          <input
            type="text"
            value={job.title}
            onChange={(e) => handleJobChange(jobIndex, 'title', e.target.value)}
            placeholder="Job Title"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="text"
            value={job.employer}
            onChange={(e) => handleJobChange(jobIndex, 'employer', e.target.value)}
            placeholder="Employer"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="text"
            value={job.date}
            onChange={(e) => handleJobChange(jobIndex, 'date', e.target.value)}
            placeholder="Date"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          {job.bullets.map((bullet, bulletIndex) => (
            <input
              key={bulletIndex}
              type="text"
              value={bullet}
              onChange={(e) => handleBulletChange(jobIndex, bulletIndex, e.target.value)}
              placeholder={`Bullet ${bulletIndex + 1}`}
              className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          ))}
          <button
            type="button"
            onClick={() => addBulletToJob(jobIndex)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-1 px-4 rounded mt-2"
          >
            Add Bullet
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addJob}
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Add Job
      </button>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      {education.map((edu, eduIndex) => (
        <div key={eduIndex} className="border border-gray-300 p-4 mb-6 rounded-md shadow-sm">
          <input
            type="text"
            value={edu.date}
            onChange={(e) => handleEducationChange(eduIndex, 'date', e.target.value)}
            placeholder="Date"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="text"
            value={edu.location}
            onChange={(e) => handleEducationChange(eduIndex, 'location', e.target.value)}
            placeholder="Location"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="text"
            value={edu.institution}
            onChange={(e) => handleEducationChange(eduIndex, 'institution', e.target.value)}
            placeholder="Institution Name"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="text"
            value={edu.address}
            onChange={(e) => handleEducationChange(eduIndex, 'address', e.target.value)}
            placeholder="Address"
            className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Add Education
      </button>
      <h2 className="text-xl font-bold mb-4">References</h2>
      <textarea
        name="references"
        value={references}
        onChange={handleChange(setReferences, 'references')}
        placeholder="References"
        className="border border-gray-300 rounded-md p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600"
      />
    </div>
  );
};

export default ResumeForm;
