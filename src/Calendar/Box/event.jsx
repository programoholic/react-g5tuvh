import React from 'react';

const Event = ({ event }) => {
  const height = (event?.timings?.endTime - event?.timings?.startTime) * 100;
  return (
    <div
      className={[event.category, 'event'].join(' ')}
      style={{ height: `${height}%` }}
    >
      <p> {event?.eventDetails?.title} </p>
      <p> {`${event?.timings?.startTime} - ${event?.timings?.endTime}`} </p>
    </div>
  );
};

export default Event;
