import { ReactNode, createContext, useContext, useState } from 'react';

type StudentViewerState = {
  open: boolean;
  studentId?: string;
};

type StudentManagementContextProps = {
  studentView: StudentViewerState;
  setStudentView: (user: StudentViewerState) => void;
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
  const [studentView, setStudentView] = useState<StudentViewerState>({
    open: false,
  });

  return (
    <StudentManagementContext.Provider
      value={{
        studentView,
        setStudentView,
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
