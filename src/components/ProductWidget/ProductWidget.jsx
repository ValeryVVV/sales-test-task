import * as React from 'react';
import { data } from '../../data/tableInfoData';
import { Link, Typography } from '@mui/material';

let sum = 0;
data.forEach(x => {
    sum += x.unitSold
})
console.log(sum);

function preventDefault(event) {
  event.preventDefault();
}

export default function ProductWidget() {
  return (
      <>
        {/* Recent Deposits */}
        <Typography>Recent Deposits</Typography>
        <Typography component="p" variant="h4">${sum}</Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>on 12 December, 2023</Typography>
        <div>
            <Link color="primary" href="#" onClick={preventDefault}>
                View balance
            </Link>
        </div>
      </>
  );
};
