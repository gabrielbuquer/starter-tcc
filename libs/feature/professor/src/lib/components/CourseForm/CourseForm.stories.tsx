import { Meta, StoryFn } from '@storybook/react';
import { CourseForm, CourseFormProps } from './CourseForm';

export default {
  title: 'Components / CourseForm',
  args: {
    open: true,
    formType: 'expense',
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof CourseForm>;

export const Default: StoryFn<CourseFormProps> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <CourseForm {...props} />
    </div>
  );
};
