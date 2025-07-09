import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

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
  return (
    <>
      <NextSeo title="Login" />
      <LoginScreen />
    </>
  );
};

export default LoginPage;
