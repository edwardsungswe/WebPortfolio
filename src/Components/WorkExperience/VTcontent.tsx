import React from "react";
import "./VTcontent.css";

interface VTContentProps {
  data: {
    position: string;
    period: string;
    details: string[];
  };
  index: number;
  activeTabId: number;
}

function VTcontent(props: VTContentProps) {
  const { data, index, activeTabId } = props;

  return (
    <div
      key={index}
      className="section__Jobs-styledContent"
      style={
        activeTabId === index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data.position}</h4>
      <h5>{data.period}</h5>
      {data.details.map((detail, idx) => (
        <p key={idx} className="section__Jobs-detail">
          {detail}
        </p>
      ))}
    </div>
  );
}

export default VTcontent;
