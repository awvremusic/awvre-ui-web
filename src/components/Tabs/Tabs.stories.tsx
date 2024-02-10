import React from 'react';
import { Tabs } from './TabsContext';
import { Tab } from './Tab';
import { Meta } from '@storybook/react';
import { AWVREProvider } from '../AWVREProvider';

const meta: Meta<typeof Tabs> = {
  title: 'AWVRE-UI/Tabs',
  component: Tabs,
  argTypes: {},
  tags: ['Tabs', 'AWVRE-UI', 'autodocs'],
};

export default meta;

export const Primary = (args) => (
  <AWVREProvider>
    <Tabs data-testId="Tabs-id" {...args} />
  </AWVREProvider>
);

Primary.storyName = 'Tabs (Default)';
Primary.args = {
  children: [
    <Tab value="1" label="Home" />,
    <Tab value="2" label="About" />,
    <Tab value="3" label="Contact" />,
  ],
  initialTab: '1',
};
