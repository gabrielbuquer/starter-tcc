import { Button, LinearProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { Avatar } from '@monetix/shared/ui';
import { CourseType, generateAcronym } from '@monetix/shared/config';

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
  COURSE_PROGRESS,
  COURSE_UNAVAILABLE,
} from './constants';

export const Card = ({
  id,
  name,
  description,
  progress,
  teacher,
  enabled,
}: CourseType) => {
  const { push } = useRouter();

  return (
    <Box>
      <TeacherBox>
        <Avatar acronym={generateAcronym(teacher.name)} />
        <TeacherName>
          <Typography variant="caption">Professor</Typography>
          {teacher?.name && (
            <Typography variant="caption">{teacher.name}</Typography>
          )}
        </TeacherName>
      </TeacherBox>
      <CourseBox>
        <Typography variant="h3">{name}</Typography>
      </CourseBox>
      <CourseBox>
        <Typography variant="body1">{description}</Typography>
      </CourseBox>
      <CourseInfo>
        <Info
          title={`${COURSE_PROGRESS.title} (${progress ?? 0}%)`}
          content={
            <LinearProgress variant="determinate" value={progress || 0} />
          }
          icon={COURSE_PROGRESS.icon}
        />
      </CourseInfo>
      <Actions>
        <Button
          variant="contained"
          disabled={!enabled}
          onClick={() => push(`/cursos/${id}`)}
        >
          {enabled ? COURSE_ACTION : COURSE_UNAVAILABLE}
        </Button>
      </Actions>
    </Box>
  );
};
