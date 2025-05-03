import { Box } from '@monetix/shared/ui';
import { MainGrid } from '../../containers/MainGrid';
import { Container } from './SummaryScreen.styled';
import { Grid2 as Grid} from '@mui/material';
import { PieChart, BarChart } from '@monetix/shared/ui';

export const desktopOS = [
  {
    label: 'Salário',
    value: 1500.00,
  },
  {
    label: 'Prémios',
    value: 200.00,
  },
  {
    label: 'Empréstimos',
    value: 1000.00,
  },
];

export const SummaryScreen = () => {
  return (
    <Container>
      <MainGrid />
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box title="Receitas">
            <PieChart
              data={desktopOS}
            />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box title="Despesas">
            <PieChart
              data={desktopOS}
            />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box title="Balanço mensal">
            <BarChart
              type='balance'
              series={[
                {
                  data: [230.02, 120.99, 24, -34, 100, -50],
                  valueFormatter: (item) => `R$ ${item?.toFixed(2)}`,
                },
              ]}
            />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box title="Receitas x Despesas">
            <BarChart
              series={[
                {
                  data: [1230.00, 1250.00, 1330.00, 1800.00, 200, 2000],
                  valueFormatter: (item) => `R$ ${item?.toFixed(2)}`,
                },
                {
                  data: [1000, 800.99, 1200, 2500, 700, 1000],
                  valueFormatter: (item) => `R$ ${item?.toFixed(2)}`,
                }
              ]}
            />
          </Box>
        </Grid>
        <Box title="Últimas Transações">
          teste
        </Box>
      </Grid>
    </Container>
  )
}
