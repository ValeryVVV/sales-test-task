import * as React from 'react';
import { data } from '../../data/tableInfoData';
import { Typography } from '@mui/material';

let sum = 0;
data.forEach(x => {
    sum += x.unitSold;
})
console.log(sum);

export default function ProductWidget() {
  return (
      <>
        {/* Recent Deposits */}
        <Typography>Number of units sold</Typography>
        <Typography component="p" variant="h4">{sum}/units</Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>on 12 December, 2023</Typography>
      </>
  );
};
