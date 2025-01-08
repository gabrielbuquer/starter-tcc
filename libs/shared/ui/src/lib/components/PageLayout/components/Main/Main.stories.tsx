import { Meta, StoryFn } from '@storybook/react';

import { Main } from './Main';

export default {
  title: 'Components / PageLayout / Main',
} as Meta<typeof Main>;

const Template: StoryFn<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {};
