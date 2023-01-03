import React, { useState, useEffect } from "react";
import Box from "./Box";
import Days from "./Days";
import { useGroupBy, DAYS } from "../utils/hooks";

const Calendar = ({ events }) => {
  const views = 7;
  const rows = [];
  const { grpedObj } = useGroupBy(events);
  console.log("groud :L ", grpedObj);

  for (let i = 0; i < views; i++) {
    rows.push(<Days key={i} events={grpedObj[i]} />);
  }
  return (
    <div>
      <div className="days">
        <DaysView />
      </div>
      <div>
        <div>
          <HrsView />
          <div className="row">{rows}</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

const DaysView = () => {
  return DAYS.map((item) => <p key={item}> {item} </p>);
};

const HrsView = () => {
  let time = 24;
  let hrs = [];
  for (let i = 0; i < time; i++) {
    hrs.push((item) => <p key={item}> {i} </p>);
  }
  return hrs;
};
