import { Container, Footer, Header, Main } from "./Content.styled";
import { Box, Video } from "@monetix/shared/ui";
import { Typography } from "@mui/material";

import { useCourseContext } from "../../contexts/CourseContext";
import { LessonType } from "@monetix/shared/config";

const contentElement = (lesson: LessonType) => {
  const elements = {
    video: <Video
      title={lesson.name}
      src={lesson.url}
    />
  };

  return elements[lesson.type] || <Typography>Tipo de conteúdo não suportado</Typography>;
};

export const Content = () => {
  const { selectedLesson } = useCourseContext();
  console.log('selectedLesson', selectedLesson);

  return (
    <Box>
      <Container>
        <Header>
          <Typography variant="h4" component="h1">
            {selectedLesson.name}
          </Typography>
        </Header>
        <Main>
          {contentElement(selectedLesson)}
        </Main>
        <Footer>
          botao pra passar
        </Footer>
      </Container>
    </Box>
  )
}
