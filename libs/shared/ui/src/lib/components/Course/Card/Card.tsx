import { Button, Typography } from '@mui/material';
import { Avatar } from '../../Avatar';
import { Info } from './components/Info';
import { Actions, Box, CourseBox, CourseInfo, TeacherBox, TeacherName } from './Card.styled';
import { COURSE_ACTION, COURSE_DURATION, COURSE_LESSONS } from './constants';

export const Card = () => {
  return (
    <Box>
      <TeacherBox>
        <Avatar acronym='OP' />
        <TeacherName>
          <Typography variant='caption'>Professor</Typography>
          <Typography variant='h4'>Teste Teste</Typography>
        </TeacherName>
      </TeacherBox>
      <CourseBox>
        <Typography variant='h3'>Teoria da Informação</Typography>
      </CourseBox>
      <CourseInfo>
        <Info title={COURSE_DURATION.title} content="20 minutos" icon={COURSE_DURATION.icon} />
        <Info title={COURSE_LESSONS.title} content="0 / 5" icon={COURSE_LESSONS.icon} />
      </CourseInfo>
      <Actions>
        <Button variant='contained' disabled>{COURSE_ACTION}</Button>
      </Actions>
    </Box>
  );
}
