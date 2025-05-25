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
  selectedClassRoom: string | null;
  isLoading: boolean;
  setModalCourseOpen: (state: ModalCourseState) => void;
  setSelectedClassRoom: (classRoomId: string | null) => void;
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
  const { data: classRooms } = useClassRoom();
  const [selectedClassRoom, setSelectedClassRoom] = useState<string | null>(
    classRooms?.[0].id,
  );
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
      });
    }
  }, [selectedClassRoom, classRoomCoursesTrigger]);

  return (
    <ClassManagementContext.Provider
      value={{
        classRooms,
        classRoomCourses,
        selectedClassRoom,
        isLoading: !classRoomCourses || loadingClassRoomCourses,
        setModalCourseOpen,
        setSelectedClassRoom,
      }}
    >
      {children}
      <CourseForm
        open={modalCourseOpen.open}
        isEditing={!!modalCourseOpen.course}
        defaultValues={modalCourseOpen.course}
        onClose={() => setModalCourseOpen({ open: false })}
      />
    </ClassManagementContext.Provider>
  );
};

const useClassManagement = () => {
  return useContext(ClassManagementContext);
};

export { ClassManagementContextProvider, useClassManagement };
