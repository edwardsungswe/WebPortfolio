import React, { useState } from "react";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";

import "./workExperience.css";

interface ExpData {
  company: string;
}

interface JobData {
  position: string;
  period: string;
  details: string[];
  expData: ExpData;
}

interface VerticalTabProps {
  data: JobData[];
}

function VerticalTab(props: VerticalTabProps) {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  function btnClick(id: number) {
    setActiveTabId(id);
  }

  return (
    <div className="section__Jobs">
      <div className="section__Jobs-styledTab">
        <ul className="section__Jobs-styledTabList">
          {props.data.map((job, index) => (
            <VTlist
              key={index}
              onClick={() => btnClick(index)} // Pass the index as the ID
              data={job}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
      </div>
      <div className="section__Jobs-content">
        {props.data.map((job, index) => (
          <VTcontent
            data={job}
            key={index}
            index={index}
            activeTabId={activeTabId}
          />
        ))}
      </div>
    </div>
  );
}

export default VerticalTab;
