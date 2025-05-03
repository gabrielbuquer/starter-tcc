import { Meta, StoryFn } from '@storybook/react';
import { StepList } from './StepList';

import { MOCK_LESSONS } from './StepList.mock';

export default {
  title: 'Components / Course / StepList',
  args: {
    lessons: MOCK_LESSONS,
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof StepList>;

export const Default: StoryFn = (props) => {
  return (
    <div style={{ width: '400px' }}>
      <StepList {...props} />
    </div>
  );
};
