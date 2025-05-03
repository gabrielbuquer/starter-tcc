import { Box } from '@monetix/shared/ui';
import { TotalizerContainer, TotalizerLine } from "./MonthTotalizers.styled";
import { Typography } from "@mui/material";

export interface MonthTotalizersProps {
  title: string;
  totalizers: Totalizer[]
}

interface Totalizer {
  label: string;
  value: number;
}

export const MonthTotalizers = ({ title, totalizers }: MonthTotalizersProps) => {
  return (
    <Box title={title}>
      <TotalizerContainer>
        {totalizers.map((totalizer) => (
          <TotalizerLine>
            <Typography variant="h5" component="h3">
              {totalizer?.label}
            </Typography>
            <Typography variant="h6" component="span" color={totalizer?.value > 0 ? 'success' : 'error'}>
              {totalizer?.value?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Typography>
          </TotalizerLine>
        ))}
      </TotalizerContainer>
    </Box>
  )
};
