import { Typography } from '@mui/material';
import { isValidElement } from 'react';

import { Box, Content } from './Info.styled';

type InfoProps = {
  title: string;
  content: string | JSX.Element;
  icon: JSX.Element;
};

export const Info = ({ title, content, icon }: InfoProps) => {
  const isJSXElement = isValidElement(content);

  return (
    <Box>
      {icon}
      <Content>
        <Typography variant="caption">{title}</Typography>

        {isJSXElement ? (
          content
        ) : (
          <Typography variant="body1">{content}</Typography>
        )}
      </Content>
    </Box>
  );
};
