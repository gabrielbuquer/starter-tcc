import { Box } from '@monetix/shared/ui';
import { MainGrid } from '../../containers/MainGrid';
import { Container } from './TransactionScreen.styled';
import { Grid2 as Grid} from '@mui/material';
import { PieChart } from '@monetix/shared/ui';

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

export const TransactionScreen = () => {

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
        <Box title="Últimas Transações">
          teste
        </Box>
      </Grid>
    </Container>
  )
}
