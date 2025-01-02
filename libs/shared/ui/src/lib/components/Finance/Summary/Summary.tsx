import { Typography } from '@mui/material';
import { Container, TextWrapper } from './Summary.styled';

export type SummaryProps = {
  title: string;
  content: string;
  icon: JSX.Element;
}

export const Summary = ({title, content, icon}: SummaryProps) => {
  return (
    <Container>
      <TextWrapper>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="h3">{content}</Typography>
      </TextWrapper>
      {icon}
    </Container>
  )
}
