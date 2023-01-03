import React, { useState, useEffect } from "react";
// import Box from '../Box';
// import { useGroupEventHrs } from '../../utils/hooks';
// const Days = ({ events }) => {
//   console.log('days : ', events);
//   // const {} = useGroupEventHrs(events);
//   const rows = 24;
//   const cols = [];
//   for (let i = 0; i < rows; i++) {
//     cols.push(<Box key={i} index={i} events={events} />);
//   }
//   return <div>{cols}</div>;
// };

// export default Days;

export const useGroupBy = (eventList = []) => {
  const [grpedObj, setgrpdObj] = useState({});
  useEffect(() => {
    let obj = {};

    eventList.forEach((item) => {
      const index = DAYS.findIndex(
        (day) => day.toLowerCase() === item.timings.day.toLowerCase()
      );
      if (obj[index] === undefined) {
        obj[index] = [item];
      } else {
        obj[index].push(item);
      }
    });
    setgrpdObj(obj);
  }, [eventList]);
  return { grpedObj };
};

export function groupByHrs(eventList) {
  if (!eventList) return {};
  let obj = {};
  eventList.forEach((item) => {
    const index = Math.floor(Number(item.timings.startTime));
    if (obj[index] === undefined) {
      obj[index] = [item];
    } else {
      obj[index].push(item);
    }
  });
  return obj;
}

// export const useGroupEventHrs = (eventList = []) => {
//   const [grpedObj, setgrpdObj] = useState({});
//   useEffect(() => {
//     let obj = {};
//     eventList.forEach((item) => {
//       const index = item.timings.start;
//       if (obj[index] === undefined) {
//         obj[index] = [item];
//       } else {
//         obj[index].push(item);
//       }
//     });
//     setgrpdObj(obj);
//   }, [eventList]);
//   return { grpedObj };
// };

export const DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
