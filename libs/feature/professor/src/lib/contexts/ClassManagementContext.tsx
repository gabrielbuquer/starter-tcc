import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ClassRoomType, CourseType } from '@monetix/shared/config';

import { useClassRoom, useClassRoomCourses } from '../services';
import { CourseForm } from '../components/CourseForm';
import { ClassRoomCoursesDataResponse } from '../services/classRoom/types';

type ClassManagementContextProps = {
  classRooms: ClassRoomType[];
  classRoomCourses: ClassRoomCoursesDataResponse;
  classRoomCoursesPage: number;
  selectedClassRoom: string | null;
  isLoadingClasses: boolean;
  isLoadingCourses: boolean;
  setModalCourseOpen: (state: ModalCourseState) => void;
  setSelectedClassRoom: (classRoomId: string | null) => void;
  setClassRoomCoursesPage: (page: number) => void;
};

type ModalCourseState = {
  open: boolean;
  course?: Partial<CourseType>;
};

export type ClassManagementContextPropsProviderProps = {
  children: ReactNode;
};

export const ClassManagementContext = createContext(
  {} as ClassManagementContextProps,
);

const ClassManagementContextProvider = ({
  children,
}: ClassManagementContextPropsProviderProps) => {
  const { data: classRooms, isLoading: loadingClassRooms } = useClassRoom();
  const [selectedClassRoom, setSelectedClassRoom] = useState<string | null>(
    classRooms?.[0].id,
  );
  const [classRoomCoursesPage, setClassRoomCoursesPage] = useState(0);
  const {
    data: classRoomCourses,
    trigger: classRoomCoursesTrigger,
    isMutating: loadingClassRoomCourses,
  } = useClassRoomCourses();

  console.log('classRoomCourses', classRoomCourses);

  const [modalCourseOpen, setModalCourseOpen] = useState<ModalCourseState>({
    open: false,
  });

  useEffect(() => {
    if (classRooms?.[0]?.id) {
      setSelectedClassRoom(classRooms[0].id);
    }
  }, [classRooms]);

  useEffect(() => {
    if (selectedClassRoom) {
      classRoomCoursesTrigger({
        classRoomId: selectedClassRoom,
        page: classRoomCoursesPage + 1,
        limit: 2,
      });
    }
  }, [selectedClassRoom, classRoomCoursesPage, classRoomCoursesTrigger]);

  return (
    <ClassManagementContext.Provider
      value={{
        classRooms,
        classRoomCourses,
        selectedClassRoom,
        isLoadingClasses: !classRooms || loadingClassRooms,
        isLoadingCourses: !classRoomCourses || loadingClassRoomCourses,
        setModalCourseOpen,
        setSelectedClassRoom,
        setClassRoomCoursesPage,
        classRoomCoursesPage,
      }}
    >
      {children}
      <CourseForm
        open={modalCourseOpen.open}
        isEditing={!!modalCourseOpen.course}
        defaultValues={modalCourseOpen.course}
        onClose={() => setModalCourseOpen({ open: false })}
        onSubmit={() =>
          classRoomCoursesTrigger({
            classRoomId: selectedClassRoom,
          })
        }
      />
    </ClassManagementContext.Provider>
  );
};

const useClassManagement = () => {
  return useContext(ClassManagementContext);
};

export { ClassManagementContextProvider, useClassManagement };
