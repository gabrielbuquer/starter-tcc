import { Meta, StoryFn } from '@storybook/react';

import { StudentManagementScreen } from './StudentManagementScreen';

export default {
  title: 'Screens / StudentManagementScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof StudentManagementScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <StudentManagementScreen {...props} />
    </div>
  );
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};

export const Desktop: StoryFn = (props) => {
  return (
    <div style={{ width: '400px' }}>
      <StudentManagementScreen {...props} />
    </div>
  );
};
