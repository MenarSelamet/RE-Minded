import React from 'react';
import JobCard from './JobCard';

const jobs = [
  {
    job: 'Senior Software Developer | Backend | Remote in the USA',
    description:
      'Moz is looking for a Senior Software Developer to join our Application Development team.',
    department: 'Application Development',
  },
  {
    job: 'Senior Software Developer | Rapid Prototyping | Remote in',
    description:
      'Moz is looking for a Senior Software Developer to join our Rapid Prototyping Team (RPT). This team is responsible for working closely with product managers to take ideas for new features and quickly validate their technical and business feasibility.',
    department: 'Rapid Prototyping',
  },
  {
    job: 'Senior Product Analyst | Remote in Canada',
    description:
      'Moz is looking for a Product Analyst to define our suite of product metrics.',
    department: 'Business Intelligence',
  },
  {
    job: 'Business Intelligence Manager | Remote in Canada',
    description:
      'Moz is hiring a Manager of Business Intelligence to lead our analytics and data warehousing efforts in a new phase of development.',
    department: 'Business Intelligence',
  },
  {
    job: 'Engineering Manager | Remote in Canada',
    description:
      'Moz is seeking an Engineering Manager within our Application Development team.',
    department: '',
  },
  {
    job: 'Sr. Data Engineer | Remote in Canada',
    description:
      'Moz is looking for a talented Senior Software Developer to join our Data Collection team.',
    department: 'Data Collection',
  },
  {
    job: 'Sr. Data Engineer | Remote in Canada',
    description:
      'Moz is looking for a talented Senior Software Developer to join our Data Collection team.',
    department: 'Data Collection',
  },
];

function ContentC() {
  return (
    <div>
      <div className="text-5xl leading-6 mt-12 pt-12 ml-28 text-gray-700">
        <h1>CURRENT OPEN POSITIONS</h1>
      </div>
      <div className="text-xl leading-6 mt-4 ml-28 text-gray-400">
        <h3>
          Please send us an email with the application title as the subject with
          an attached CV in PDF format!
        </h3>
      </div>
      <div>
        <div className='overflow-y-scroll overflow-y-auto mb-12 pl-24 mt-6 mr-20 h-[30em] '>
            {jobs.map((job) => {
                return <JobCard job={job.job} description={job.description} department={job.department}/>
            } )}
        </div>
      </div>
    </div>
  );
}

export default ContentC;
