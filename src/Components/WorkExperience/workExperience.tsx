import React, { useState, useEffect } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tabs, Tab } from "@blueprintjs/core";

import './workExperience.css';
const WorkExperience = () => {

    

  return (
    <div className='workExperience-container'>
      <Tabs
                animate={true}
                key={"vertical"}
                vertical={true}
                className="tab"
            >
                <Tab id="tab1" title="Tab1" panel={
                    <p>Sample Content 1</p>
                } />
                
                <Tab id="tab2" title="Tab2" panel={
                    <p>Sample Content 2</p>
                } />
                <Tabs.Expander /> 
            </Tabs>
    </div>
  );
};

export default WorkExperience;
