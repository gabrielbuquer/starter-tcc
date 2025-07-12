export const MetaTags = () => {
  const FAVICON_PATH = `/monetix/favicon.ico`;
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <link rel="shortcut icon" href={FAVICON_PATH} />
    </>
  );
};

export default MetaTags;
