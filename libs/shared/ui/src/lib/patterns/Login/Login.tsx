import { Box } from '../../components/Box'
import { SignIn } from './components/SignIn'
import { Container } from './Login.styled';

export const Login = () => {
  return (
    <Box>
      <Container>
        <SignIn />
      </Container>
    </Box>
  )
};
