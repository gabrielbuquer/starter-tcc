import { Box } from '@monetix/shared/ui';
import { Container } from './LoginScreen.styled';
import { SignIn } from '../../components/SignIn';

export const LoginScreen = () => {
  return (
    <Box>
      <Container>
        <SignIn />
      </Container>
    </Box>
  )
}
