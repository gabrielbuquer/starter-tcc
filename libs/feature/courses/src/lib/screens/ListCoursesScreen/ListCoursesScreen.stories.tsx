import { Meta, StoryFn } from '@storybook/react';

import { ListCoursesScreen } from './ListCoursesScreen';


export default {
  title: 'Screens / ListCoursesScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof ListCoursesScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <ListCoursesScreen {...props} />
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
      <ListCoursesScreen {...props} />
    </div>
  );
};
