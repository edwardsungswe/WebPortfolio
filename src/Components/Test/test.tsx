import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './test.css';

const VerticalTabs = () => {
  const workExperienceData = [
    {
      title: 'Job Title 1',
      description: 'Description for Job Title 1...',
      // Add more properties as needed
    },
    {
      title: 'Job Title 2',
      description: 'Description for Job Title 2...',
      // Add more properties as needed
    },
    // Add more work experience items
  ];

  return (
    <Tabs>
      <div className="vertical-tabs">
        <TabList>
          {workExperienceData.map((experience, index) => (
            <Tab key={index}>{experience.title}</Tab>
          ))}
        </TabList>
        {workExperienceData.map((experience, index) => (
          <TabPanel key={index}>
            {/* Display the content for each tab here */}
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
            {/* Add any other information you want to display */}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default VerticalTabs;
