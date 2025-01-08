import { Meta, StoryFn } from '@storybook/react';

import { PageLayout } from './PageLayout';

export default {
  title: 'Components / PageLayout / PageLayout',
} as Meta<typeof PageLayout>;

const Template: StoryFn<typeof PageLayout> = (args) => <PageLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};
