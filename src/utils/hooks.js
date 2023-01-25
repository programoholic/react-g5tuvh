import React, { useState, useEffect } from 'react';

export const useGroupBy = (eventList = []) => {
  const [grpedObj, setgrpdObj] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let obj = {};
    const set = new Set();
    eventList.forEach((item) => {
      set.add(item.category);
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
    setCategories([...set]);
  }, [eventList]);
  return { grpedObj, categories };
};

export function groupByHrs(eventList) {
  if (!eventList || eventList?.length == 0) return {};
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

export const DAYS = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];
