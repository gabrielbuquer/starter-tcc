import { Container, Navigation, Header, Main } from "./Content.styled";
import { Box, Video } from "@monetix/shared/ui";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useCourseContext } from "../../contexts/CourseContext";
import { LessonType } from "@monetix/shared/config";

const contentElement = (lesson: LessonType) => {
  const elements = {
    video: <Video
      title={lesson.name}
      src={lesson.url}
    />,
    pdf: <iframe
      src={`${lesson.url}`}
      width="100%"
      height="600px"
      title={lesson.name}
      style={{ border: 'none' }}
    />,
    form: <iframe
      src={`${lesson.url}`}
      width="100%"
      height="600px"
      title={lesson.name}
      style={{ border: 'none' }}
    />,
  };

  return elements[lesson.type] || <Typography>Tipo de conteúdo não suportado</Typography>;
};

export const Content = () => {
  const { lessons, currentStep, selectedLesson, setSelectedLesson } = useCourseContext();

  return (
    <Box>
      <Container>
        <Header>
          <Typography variant="h4" component="h1">
            {currentStep + 1} - {selectedLesson.name}
          </Typography>
          <Navigation>
            <IconButton
              onClick={(() => setSelectedLesson(currentStep - 1))}
              disabled={currentStep <= 0}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={(() => setSelectedLesson(currentStep + 1))}
              disabled={currentStep === lessons.length - 1}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Navigation>
        </Header>
        <Main>
          {contentElement(selectedLesson)}
        </Main>

      </Container>
    </Box>
  )
}
