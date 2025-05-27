import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { Avatar } from '@monetix/shared/ui';
import { CourseType } from '@monetix/shared/config';

import { Info } from './components/Info';
import {
  Actions,
  Box,
  CourseBox,
  CourseInfo,
  TeacherBox,
  TeacherName,
} from './Card.styled';
import {
  COURSE_ACTION,
  COURSE_DURATION,
  COURSE_LESSONS,
  COURSE_UNAVAILABLE,
} from './constants';

export const Card = ({ id, name, enabled }: CourseType) => {
  const { push } = useRouter();
  return (
    <Box>
      <TeacherBox>
        <Avatar acronym="OP" />
        <TeacherName>
          <Typography variant="caption">Professor</Typography>
          <Typography variant="h4">Nome professor</Typography>
        </TeacherName>
      </TeacherBox>
      <CourseBox>
        <Typography variant="h3">{name}</Typography>
      </CourseBox>
      <CourseInfo>
        <Info
          title={COURSE_DURATION.title}
          content="20 minutos"
          icon={COURSE_DURATION.icon}
        />
        <Info
          title={COURSE_LESSONS.title}
          content="0 / 5"
          icon={COURSE_LESSONS.icon}
        />
      </CourseInfo>
      <Actions>
        <Button
          variant="contained"
          disabled={!enabled}
          onClick={() => push(`/courses/${id}`)}
        >
          {enabled ? COURSE_ACTION : COURSE_UNAVAILABLE}
        </Button>
      </Actions>
    </Box>
  );
};
