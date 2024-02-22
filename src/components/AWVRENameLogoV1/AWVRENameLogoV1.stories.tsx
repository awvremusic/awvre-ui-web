import React from 'react';
import { AWVRENameLogoV1 } from './AWVRENameLogoV1';
import { StoryObj } from '@storybook/react';
import { AWVREProvider } from '../AWVREProvider';

export default {
  title: 'AWVRE-UI/AWVRENameLogoV1',
  component: AWVRENameLogoV1,
  args: {},
  tags: ['AWVRENameLogoV1', 'AWVRE-UI', 'autodocs'],
};

type Story = StoryObj<typeof AWVRENameLogoV1>;

export const Primary: Story = (args) => (
  <AWVREProvider>
    <AWVRENameLogoV1 {...args} />
  </AWVREProvider>
);
Primary.storyName = 'AWVRENameLogoV1 (Default)';
Primary.args = {
  style: { margin: '10px' },
};
