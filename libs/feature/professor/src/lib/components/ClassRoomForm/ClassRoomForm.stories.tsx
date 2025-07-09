import { Meta, StoryFn } from '@storybook/react';

import { ClassRoomForm, ClassRoomFormProps } from './ClassRoomForm';

export default {
  title: 'Components / ClassRoomForm',
  args: {
    open: true,
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof ClassRoomForm>;

export const Default: StoryFn<ClassRoomFormProps> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <ClassRoomForm {...props} />
    </div>
  );
};
