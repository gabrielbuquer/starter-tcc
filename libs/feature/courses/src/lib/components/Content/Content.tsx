import { LessonType } from "@monetix/shared/config"
import { Container, Footer, Header, Main } from "./Content.styled";
import { Box } from "@monetix/shared/ui";
import { Typography } from "@mui/material";

import { useCourseContext } from "../../contexts/CourseContext";

export const Content = () => {
  const { selectedLesson } = useCourseContext();

  return (
    <Box>
      <Container>
        <Header>
          <Typography variant="h4" component="h1">
            {selectedLesson.name}
          </Typography>
        </Header>
        <Main>

        </Main>
        <Footer>
          botao pra passar
        </Footer>
      </Container>
    </Box>
  )
}
