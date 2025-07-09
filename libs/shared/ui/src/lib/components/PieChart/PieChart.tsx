import {
  PieChart as MUIPieChart,
  pieArcLabelClasses,
} from '@mui/x-charts/PieChart';

import { COLORS } from './constants';

type PieChartProps = {
  data: {
    label: string;
    value: number;
  }[];
  type: 'income' | 'expense';
};

export const PieChart = ({ data, type }: PieChartProps) => {
  return (
    <MUIPieChart
      series={[
        {
          arcLabel: (item) => `R$ ${item.value}`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          valueFormatter: (item) => `R$ ${item.value}`,
          data,
        },
      ]}
      viewBox={{
        x: 60,
        y: 0,
        width: 500,
        height: 250,
      }}
      width={500}
      height={250}
      colors={COLORS[type]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: '#FFF',
        },
      }}
      margin={{ top: 16, bottom: 16 }}
    />
  );
};
