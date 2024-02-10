import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AWVREProvider } from '../AWVREProvider';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'AWVRE-UI/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['Spinner', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = (args) => (
  <AWVREProvider>
    <Spinner data-testId="Spinner-id" {...args} />
  </AWVREProvider>
);

Primary.storyName = 'Spinner (Default)';
Primary.args = {
  size: '2rem',
};
