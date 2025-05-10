import { Meta, StoryFn } from '@storybook/react';

import { ClassManagementScreen } from './ClassManagementScreen';


export default {
  title: 'Screens / ClassManagementScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof ClassManagementScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <ClassManagementScreen {...props} />
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
      <ClassManagementScreen {...props} />
    </div>
  );
};
