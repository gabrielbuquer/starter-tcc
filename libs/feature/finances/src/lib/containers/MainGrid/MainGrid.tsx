import { Insights } from '@mui/icons-material';
import { useRouter } from 'next/router';

import { TransactionResumeType } from '@monetix/shared/config';

import { Summary } from '../../components';

import { Container, Grid } from './MainGrid.styled';
import { content } from './utils';
import { MainGridProps } from './types';

export const MainGrid = ({ resume, reportOption = true }: MainGridProps) => {
  const { push } = useRouter();

  return (
    <Container>
      <Grid>
        {resume &&
          content(resume).map(({ title, content, icon }) => (
            <Summary key={title} title={title} content={content} icon={icon} />
          ))}
        {reportOption ? (
          <Summary
            title="Ver relatórios"
            icon={<Insights />}
            onClick={() => push('/financas')}
          />
        ) : null}
      </Grid>
    </Container>
  );
};
