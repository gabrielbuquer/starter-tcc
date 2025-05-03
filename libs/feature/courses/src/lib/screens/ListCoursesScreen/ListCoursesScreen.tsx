import { Container } from './ListCoursesScreen.styled';

export const ListCoursesScreen = () => {

  return (
    <Container>
      <h1>List Courses</h1>
      <p>List of courses will be displayed here.</p>
      <p>Click on a course to view details.</p>
      <p>Click on the button below to add a new course.</p>
      <button>Add Course</button>
    </Container>
  )
}
