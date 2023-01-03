import React from "react";
import Box from "../Box";
import { groupByHrs } from "../../utils/hooks";
const Days = ({ events }) => {
  console.log("days : ", events);
  const grpedObj = groupByHrs(events);
  console.log("qwegwrq : ", grpedObj);
  const rows = 24;
  const cols = [];
  for (let i = 0; i < rows; i++) {
    cols.push(<Box key={i} index={i} events={grpedObj[i]} />);
  }
  return <div>{cols}</div>;
};

export default Days;
