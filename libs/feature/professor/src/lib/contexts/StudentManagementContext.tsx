import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ClassRoomType, StudentType } from '@monetix/shared/config';

import { useClassRoom, useClassRoomStudents } from '../services';
import { ClassRoomStudentsDataResponse } from '../services/classRoom/types';

type StudentViewerState = {
  open: boolean;
  student?: StudentType;
};

type StudentManagementContextProps = {
  classRooms: ClassRoomType[];
  classRoomStudents: ClassRoomStudentsDataResponse;
  classRoomStudentsPage: number;
  selectedClassRoom: string | null;
  isLoadingClasses: boolean;
  isLoadingStudents: boolean;
  studentView: StudentViewerState;
  setStudentView: (user: StudentViewerState) => void;
  setSelectedClassRoom: (classRoomId: string | null) => void;
  setClassRoomStudentsPage: (page: number) => void;
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
  const { data: classRooms, isLoading: loadingClassRooms } = useClassRoom();
  const [selectedClassRoom, setSelectedClassRoom] = useState<string | null>(
    classRooms?.[0].id,
  );
  const [classRoomStudentsPage, setClassRoomStudentsPage] = useState(0);
  const { data: classRoomStudents, isLoading: loadingClassRoomStudents } =
    useClassRoomStudents({
      classRoomId: selectedClassRoom,
      page: classRoomStudentsPage + 1,
      limit: 10,
    });
  const [studentView, setStudentView] = useState<StudentViewerState>({
    open: false,
  });

  return (
    <StudentManagementContext.Provider
      value={{
        classRooms,
        classRoomStudents,
        classRoomStudentsPage,
        selectedClassRoom,
        isLoadingClasses: !classRooms && loadingClassRooms,
        isLoadingStudents: !classRoomStudents && loadingClassRoomStudents,
        studentView,
        setStudentView,
        setSelectedClassRoom,
        setClassRoomStudentsPage,
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
