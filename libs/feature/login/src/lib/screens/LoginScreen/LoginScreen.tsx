import { Box } from '@monetix/shared/ui';
import { Container, Wrapper } from './LoginScreen.styled';
import { SignIn } from '../../components/SignIn';

export const LoginScreen = () => {
  return (
    <Container>
      <Box>
        <Wrapper>
          <SignIn />
        </Wrapper>
      </Box>
    </Container>
  )
}
