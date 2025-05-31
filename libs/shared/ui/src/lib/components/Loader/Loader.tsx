import { Typography } from '@mui/material';

import {
  BoxLoader,
  ComponentLoaderContainer,
  LoadingIcon,
  PageLoaderContainer,
} from './Loader.styled';
import { CustomLoaderProps, LoaderProps } from './Loader.types';

export const CustomLoader = ({
  titleAlly = 'carregando o conteúdo',
  text = 'Carregando',
  direction,
}: CustomLoaderProps) => {
  return (
    <BoxLoader direction={direction}>
      <LoadingIcon aria-label={titleAlly} />
      <Typography variant="h3" aria-live="polite" aria-atomic="true">
        {text}
      </Typography>
    </BoxLoader>
  );
};

const Loader = ({ isFullScreen = true, isFullHeight = true }: LoaderProps) => {
  const ComponentLoader = () => (
    <ComponentLoaderContainer isFullHeight={isFullHeight}>
      <CustomLoader />
    </ComponentLoaderContainer>
  );

  const PageLoader = () => (
    <PageLoaderContainer>
      <CustomLoader />
    </PageLoaderContainer>
  );

  const Container = isFullScreen ? PageLoader : ComponentLoader;

  return <Container />;
};

export default Loader;
