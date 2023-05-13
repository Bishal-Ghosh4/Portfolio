import React from "react";
import data from "../assets/data.json";

const Experience = () => {
  return (
    <div id="experience">
      <div className="timelineBox">
        {data.education.map((item, index) => (
          <TimelineItem
            heading={item.edu}
            place={item.name}
            text={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, place, text, index }) => (
  <div className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline" }`}>
    <div>
      <h1>{heading}</h1>
      <h4>{place}</h4>
      <p>{text}</p>
    </div>
  </div>
);

export default Experience;