import React from 'react';

const Template3 = ({ profile }) => {
  const {
    jobs = [],
    skills = [],
    education = [],
    references = '',
    personalStatement = '',
    name = 'Your Name',
    email = 'Email',
    phone = 'Phone Number'
  } = profile;

  return (
    <div className="p-8 border border-blue-200">
      <h1 className="text-5xl text-center font-bold mb-4">{name}</h1>
      <div className="mb-4">
        <p className="text-xs text-center">{email} | {phone}</p>
      </div>
      <div>
        <hr className="border-t-1 border-zinc-900"></hr>
      </div>
      <div className="mt-8">
        <h2 className="text-base font-semibold mb-2">PROFILE STATEMENT</h2>
        <div className="p-2">
          <p className="text-xs break-words">{personalStatement || 'Your professional summary goes here.'}</p>
        </div>
      </div>
      <div className="flex mt-8">
        {/* Left side - Work Experience */}
        <div className="w-3/5 pr-4">
          <h2 className="text-base font-semibold mb-2">WORK EXPERIENCE</h2>
          {jobs.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-sm font-semibold">{job.title}</h3>
              <p className="text-xs">{job.employer} | {job.date}</p>
              <ul className="list-disc pl-4 text-xs">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Vertical border */}
        <div className="border-r border-gray-300 mx-4"></div>
        {/* Right side - Skills, Education, References */}
        <div className="w-2/5 pl-2 pr-2">
          <div className="mb-8">
            <h2 className="text-base font-semibold mb-2">Skill Set</h2>
            <div className="p-2">
              <ul className="list-disc pl-4 text-xs">
                {skills.length > 0 ? (
                  skills.map((skill, i) => (
                    <li key={i} className="mb-1">{skill}</li>
                  ))
                ) : (
                  <li>Your skills go here.</li>
                )}
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-base font-semibold mb-2">EDUCATIONAL BACKGROUND</h2>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="text-xs font-semibold">{edu.date}</p>
                  <p className="text-xs">{edu.location}</p>
                  <p className="text-xs font-semibold">{edu.institution}</p>
                  <p className="text-xs italic text-gray-500">{edu.address}</p>
                </div>
              ))
            ) : (
              <p className="text-xs">Your education details go here.</p>
            )}
          </div>
          <div className="mb-8">
            <h2 className="text-base font-semibold mb-2">REFERENCES</h2>
            <div className="p-2">
              <p className="text-xs break-words">{references || 'Your references go here.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
