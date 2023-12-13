import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';
import { lineChartLabels, monthlyRevenueCoat, monthlyRevenueDress, monthlyRevenueSkirt } from 'config/config';

export default function BarProductChart() {
    return (
        <>
            <Typography typography='h5' align='center'>Revenue for the month</Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: lineChartLabels }]}
                series={[{ data: monthlyRevenueDress }, { data: monthlyRevenueCoat }, { data: monthlyRevenueSkirt }]}
                height={300}
            />
        </>
  );
};
