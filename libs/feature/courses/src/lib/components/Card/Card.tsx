import { Button, Typography } from '@mui/material';
import { Avatar } from '@monetix/shared/ui';
import { Info } from './components/Info';
import { Actions, Box, CourseBox, CourseInfo, TeacherBox, TeacherName } from './Card.styled';
import { COURSE_ACTION, COURSE_DURATION, COURSE_LESSONS, COURSE_UNAVAILABLE } from './constants';
import { CourseType } from '@monetix/shared/config';

export const Card = ({ id, name, enabled }: CourseType) => {
  return (
    <Box>
      <TeacherBox>
        <Avatar acronym='OP' />
        <TeacherName>
          <Typography variant='caption'>Professor</Typography>
          <Typography variant='h4'>Nome professor</Typography>
        </TeacherName>
      </TeacherBox>
      <CourseBox>
        <Typography variant='h3'>{name}</Typography>
      </CourseBox>
      <CourseInfo>
        <Info title={COURSE_DURATION.title} content="20 minutos" icon={COURSE_DURATION.icon} />
        <Info title={COURSE_LESSONS.title} content="0 / 5" icon={COURSE_LESSONS.icon} />
      </CourseInfo>
      <Actions>
        <Button variant='contained' disabled={!enabled}>
          {enabled ? COURSE_ACTION : COURSE_UNAVAILABLE}
        </Button>
      </Actions>
    </Box>
  );
}
