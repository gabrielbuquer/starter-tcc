import { PieChart as MUIPieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

type PieChartProps = {
  data: {
    label: string,
    value: number,
  }[]
}

export const PieChart = ({ data }: PieChartProps) => {
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
      width={500}
      height={200}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: '#FFF',
        },
      }}
      margin={{ top: 16,  bottom: 16 }}
    />
  )
};
