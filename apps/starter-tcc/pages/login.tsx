import { GetServerSideProps } from 'next';

import { LoginScreen } from '@monetix/feature/login';

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query,
  params,
}) => {
  try {
    return {
      props: {
        bgColor: 'primary.main',
        centeredContent: true,
        simpleHeader: true,
        hasContainer: true,
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
  return <LoginScreen />;
};

export default LoginPage;
