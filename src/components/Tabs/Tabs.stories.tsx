import React from 'react';
import { Tabs } from './TabsContext';
import { Tab } from './Tab';
import { Meta } from '@storybook/react';
import { AWVREProvider } from '../AWVREProvider';
import styled from 'styled-components';

const meta: Meta<typeof Tabs> = {
  title: 'AWVRE-UI/Tabs',
  component: Tabs,
  argTypes: {},
  tags: ['Tabs', 'AWVRE-UI', 'autodocs'],
};

export default meta;

export const Primary = (args) => (
  <AWVREProvider>
    <Tabs {...args} />
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

export const CustomTab = (args) => (
  <AWVREProvider>
    <Tabs {...args} />
  </AWVREProvider>
);

const CustomStyledTab = styled.span`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #f0f0f0;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TestTab = <CustomStyledTab>Test</CustomStyledTab>;

CustomTab.storyName = 'Tabs (Custom Tab)';
CustomTab.args = {
  children: [
    <Tab value="1" label="Home" component={TestTab} />,
    <Tab value="1" label="Home" />,
    <Tab value="2" label="About" />,
    <Tab value="3" label="Contact" />,
  ],
  initialTab: '1',
};
