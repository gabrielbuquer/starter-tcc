import { useState } from 'react';

import { ClassRoomFormData } from '../components/ClassRoomForm';

export const useClassRoomForm = () => {
  const [classRoomForm, setClassRoomForm] = useState({
    open: false,
    defaultValues: null,
  });

  const openClassRoomForm = (defaultValues?: ClassRoomFormData) => {
    setClassRoomForm({
      open: true,
      defaultValues,
    });
  };

  const closeClassRoomForm = () => {
    setClassRoomForm({
      open: false,
      defaultValues: null,
    });
  };

  return {
    classRoomForm,
    openClassRoomForm,
    closeClassRoomForm,
  };
};
