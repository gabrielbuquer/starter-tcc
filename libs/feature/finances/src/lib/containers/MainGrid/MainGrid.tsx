import { TransactionResumeType } from '@monetix/shared/config';

import { Summary } from '../../components';

import { Container, Grid } from './MainGrid.styled';
import { content } from './utils';

export type MainGridProps = TransactionResumeType;

export const MainGrid = (props: MainGridProps) => {
  return (
    <Container>
      <Grid>
        {content(props).map(({ title, content, icon }) => (
          <Summary key={title} title={title} content={content} icon={icon} />
        ))}
      </Grid>
    </Container>
  );
};
