import { LoginScreen } from '@monetix/feature/login';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query,
  params,
}) => {
  try {
    return {
      props: {
        simpleHeader: true,
        hasContainer: false,
        hasMargin: false,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const LoginPage = () => {
  return (
    <LoginScreen />
  )
}

export default LoginPage;
