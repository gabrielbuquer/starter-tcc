import { Typography } from '@mui/material';

import { Box } from '@monetix/shared/ui';
import { currencyFormatter } from '@monetix/core-utils';

import { TotalizerContainer, TotalizerLine } from './MonthTotalizers.styled';

export interface MonthTotalizersProps {
  title: string;
  totalizers: Totalizer[];
}

interface Totalizer {
  label: string;
  value: number;
}

export const MonthTotalizers = ({
  title,
  totalizers,
}: MonthTotalizersProps) => {
  return (
    <Box title={title}>
      <TotalizerContainer>
        {totalizers.map((totalizer) => (
          <TotalizerLine>
            <Typography variant="h5" component="h3">
              {totalizer?.label}
            </Typography>
            <Typography
              variant="h6"
              component="span"
              color={totalizer?.value > 0 ? 'success' : 'error'}
            >
              {currencyFormatter(totalizer?.value ?? 0)}
            </Typography>
          </TotalizerLine>
        ))}
      </TotalizerContainer>
    </Box>
  );
};
