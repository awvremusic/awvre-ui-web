import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Container } from './Container';
import { AWVREProvider } from '../AWVREProvider';

const meta: Meta = {
  title: 'AWVRE-UI/Container',
  component: Container,
  argTypes: {},
  tags: ['Container', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = (args) => (
  <AWVREProvider>
    <Container {...args} />
  </AWVREProvider>
);

Default.storyName = 'Container (Default)';
Default.args = {
  children: 'Test Container',
};
