import React from "react";
import Event from "./event";
const Box = ({ index, events }) => {
  if (events) {
    console.log("in box event : ", events);
  }
  return (
    <div>
      <div className="box">
        {events?.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default Box;
