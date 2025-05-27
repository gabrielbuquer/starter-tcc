import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ClassRoomType } from '@monetix/shared/config';

import { useClassRoom, useClassRoomStudents } from '../services';
import { ClassRoomStudentsDataResponse } from '../services/classRoom/types';

type StudentViewerState = {
  open: boolean;
  studentId?: string;
};

type StudentManagementContextProps = {
  classRooms: ClassRoomType[];
  classRoomStudents: ClassRoomStudentsDataResponse;
  selectedClassRoom: string | null;
  isLoading: boolean;
  studentView: StudentViewerState;
  setStudentView: (user: StudentViewerState) => void;
  setSelectedClassRoom: (classRoomId: string | null) => void;
};

export type StudentManagementContextPropsProviderProps = {
  children: ReactNode;
};

export const StudentManagementContext = createContext(
  {} as StudentManagementContextProps,
);

const StudentManagementContextProvider = ({
  children,
}: StudentManagementContextPropsProviderProps) => {
  const { data: classRooms } = useClassRoom();
  console.log(classRooms);
  const [selectedClassRoom, setSelectedClassRoom] = useState<string | null>(
    classRooms?.[0].id,
  );
  const {
    data: classRoomStudents,
    trigger: classRoomStudentsTrigger,
    isMutating: loadingClassRoomStudents,
  } = useClassRoomStudents();
  const [studentView, setStudentView] = useState<StudentViewerState>({
    open: false,
  });

  useEffect(() => {
    if (selectedClassRoom) {
      classRoomStudentsTrigger({
        classRoomId: selectedClassRoom,
      });
    }
  }, [selectedClassRoom, classRoomStudentsTrigger]);

  return (
    <StudentManagementContext.Provider
      value={{
        classRooms,
        classRoomStudents,
        selectedClassRoom,
        isLoading: !classRoomStudents && loadingClassRoomStudents,
        studentView,
        setStudentView,
        setSelectedClassRoom,
      }}
    >
      {children}
    </StudentManagementContext.Provider>
  );
};

const useStudentManagement = () => {
  return useContext(StudentManagementContext);
};

export { StudentManagementContextProvider, useStudentManagement };
