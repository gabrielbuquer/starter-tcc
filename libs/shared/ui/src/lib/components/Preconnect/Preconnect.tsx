import { Fragment } from 'react';

const PRE_CONNECT_URL_MAX = 10;
const ERROR_MESSAGE = `The web application should use maximum ${PRE_CONNECT_URL_MAX} pre-connect URLs for best performance. Please verify https://www.splunk.com/en_us/blog/learn/preconnect-resource-hints.html`;

interface IPreconnectUrlsProps {
  urlsList: string[];
}

export const Preconnect = ({ urlsList }: IPreconnectUrlsProps) => {
  const hasExceededMaximumAmountUrl = urlsList.length > PRE_CONNECT_URL_MAX;

  if (hasExceededMaximumAmountUrl) {
    console.warn(ERROR_MESSAGE);
  }

  return (
    <>
      <meta httpEquiv="x-dns-prefetch-control" content="on"></meta>
      {urlsList.map((url) => (
        <Fragment key={url}>
          <link rel="preconnect" href={url} />
          <link rel="dns-prefetch" href={url} />
        </Fragment>
      ))}
    </>
  );
};

export default Preconnect;
