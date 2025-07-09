import {
  BarChart as MUIBarChart,
  BarChartProps as MUIBarChartProps,
} from '@mui/x-charts';
import { useTheme } from '@mui/material/styles';

type BarChartProps = {
  type?: 'balance' | 'default';
  dates: Date[];
} & Pick<MUIBarChartProps, 'series'>;

export const BarChart = ({
  series,
  dates,
  type = 'default',
}: BarChartProps) => {
  const theme = useTheme();
  return (
    <MUIBarChart
      series={series}
      colors={[theme.palette.primary.light, theme.palette.error.light]}
      height={290}
      xAxis={[
        {
          scaleType: 'band',
          data: dates,
          valueFormatter: (value) =>
            `${value.getMonth() + 1}/${value.getFullYear()}`,
        },
      ]}
      yAxis={[
        {
          scaleType: 'linear',
          valueFormatter: (item) => `R$ ${item}`,
          disableTicks: true,
          ...(type === 'balance'
            ? {
                colorMap: {
                  type: 'piecewise',
                  thresholds: [0],
                  colors: [
                    theme.palette.error.light,
                    theme.palette.primary.light,
                  ],
                },
              }
            : {}),
        },
      ]}
      margin={{ top: 20, bottom: 30, left: 80, right: 20 }}
      borderRadius={4}
    />
  );
};
