import React from 'react';

const Template4 = ({ profile }) => {
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
    <div className="bg-white text-black p-8 rounded-lg shadow-lg">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-sm mb-4">{email} | {phone}</p>
        <hr className="border-t-1 border-cyan-600 mx-auto w-1/2" />
      </header>
      
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2 border-b border-cyan-600 pb-1">Personal Statement</h2>
        <p className="text-sm break-words">{personalStatement || 'Your professional summary goes here.'}</p>
      </section>

      <div className="flex flex-col md:flex-row">
        {/* Left side - Work Experience */}
        <div className="md:w-3/5 mb-8 md:mb-0 md:pr-4">
          <h2 className="text-lg font-semibold mb-2 border-b border-cyan-600 pb-1">Work Experience</h2>
          {jobs.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-md font-semibold">{job.title}</h3>
              <p className="text-sm mb-2">{job.employer} | {job.date}</p>
              <ul className="list-disc pl-4 text-sm">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="mb-1">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vertical border */}
        <div className="border-r border-cyan-600 md:mx-4 mb-8 md:mb-0"></div>

        {/* Right side - Skills, Education, References */}
        <div className="md:w-2/5">
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2 border-b border-cyan-600 pb-1">Skills</h2>
            <ul className="list-disc pl-4 text-sm">
              {skills.length > 0 ? (
                skills.map((skill, i) => (
                  <li key={i} className="mb-1">{skill}</li>
                ))
              ) : (
                <li>Your skills go here.</li>
              )}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2 border-b border-cyan-600 pb-1">Education</h2>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="text-sm font-semibold">{edu.date}</p>
                  <p className="text-sm">{edu.location}</p>
                  <p className="text-sm font-semibold">{edu.institution}</p>
                  <p className="text-sm italic text-gray-400">{edu.address}</p>
                </div>
              ))
            ) : (
              <p className="text-sm">Your education details go here.</p>
            )}
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 border-b border-cyan-600 pb-1">References</h2>
            <p className="text-sm break-words">{references || 'Your references go here.'}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template4;
