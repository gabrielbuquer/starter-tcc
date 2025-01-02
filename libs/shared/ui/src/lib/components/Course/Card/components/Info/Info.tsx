import { Typography } from "@mui/material";
import { Box, Content } from "./Info.styled";

type InfoProps = {
  title: string;
  content: string;
  icon: JSX.Element;
}

export const Info = ({ title, content, icon}: InfoProps) => {
  return (
    <Box>
      {icon}
      <Content>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Content>
    </Box>
  )
};
