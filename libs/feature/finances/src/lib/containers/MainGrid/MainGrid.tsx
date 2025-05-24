import { Summary } from '../../components';

import { Container, Grid } from './MainGrid.styled';
import { content } from './utils';

export const MainGrid = () => {
  return (
    <Container>
      <Grid>
        {content.map(({ title, content, icon }) => (
          <Summary key={title} title={title} content={content} icon={icon} />
        ))}
      </Grid>
    </Container>
  );
};
