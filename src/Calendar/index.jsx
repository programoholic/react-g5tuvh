import React, { useState, useEffect } from 'react';
import Box from './Box';
import Days from './Days';
import { useGroupBy, DAYS } from '../utils/hooks';

const Calendar = ({ events }) => {
  const views = 7;
  const rows = [];
  const { grpedObj, categories } = useGroupBy(events);
  console.log('groud :L ', grpedObj, categories);

  for (let i = 0; i < views; i++) {
    rows.push(<Days key={i} events={grpedObj[i]} />);
  }
  return (
    <div>
      <div className="days">
        <DaysView />
      </div>
      <div style={{ display: 'flex' }}>
        <div className="clock">
          <HrsView />
        </div>
        <div className="row">{rows}</div>
      </div>
    </div>
  );
};

export default Calendar;

const DaysView = () => {
  return DAYS.map((item) => (
    <p className="day" key={item}>
      {' '}
      {item}{' '}
    </p>
  ));
};

const HrsView = () => {
  let time = 24;
  let hrs = [];
  for (let i = 0; i < time; i++) {
    hrs.push(<p key={i}> {i} </p>);
  }
  return <>{hrs}</>;
};
