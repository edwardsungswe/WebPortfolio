import React, { useState, useEffect } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tabs, Tab } from "@blueprintjs/core";

import './workExperience.css';
const WorkExperience = () => {

    

  return (
    //<Tilty glare scale={0.1} maxGlare={1.1} perspective={3000}>
    <div className='workExperience-container'>
      <Tabs
                animate={true}
                key={"vertical"}
                vertical={true}
            >
                <Tab id="rx" title="Tab1" panel={
                    <p>Sample Content 1</p>
                } />
                <Tab id="ng" title="Tab2" panel={
                    <p>Sample Content 2</p>
                } />
            </Tabs>
    </div>
  );
};

export default WorkExperience;
