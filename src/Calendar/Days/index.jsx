import React from 'react';
import Box from '../Box';
import { useGroupEventHrs } from '../../utils/hooks';
const Days = ({ events }) => {
  console.log('days : ', events);
  const {} = useGroupEventHrs(events);
  const rows = 24;
  const cols = [];
  for (let i = 0; i < rows; i++) {
    cols.push(<Box key={i} index={i} events={events} />);
  }
  return <div>{cols}</div>;
};

export default Days;
