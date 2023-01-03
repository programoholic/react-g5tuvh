import React from "react";

const Event = ({ event }) => {
  console.log("event : ", event);
  return (
    <div class={event.category}>
      <h4> {event?.eventDetails?.title} </h4>
    </div>
  );
};

export default Event;
