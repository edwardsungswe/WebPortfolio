import React from "react";

import "./VTlist.css";

interface VTListProps {
  onClick: (index: number) => void;
  index: number;
  activeTabId: number;
  data: {
    expData: {
      company: string;
    };
  };
}

function VTlist(props: VTListProps) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#64ffda" }
            : { color: "#8892b0" }
        }
      >
        {props.data.expData.company}
      </button>
    </li>
  );
}

export default VTlist;
