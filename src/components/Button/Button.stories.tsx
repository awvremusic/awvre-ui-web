import { Meta } from '@storybook/react';
import React from 'react';
import { AWVREProvider } from '../AWVREProvider';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'AWVRE-UI/Button',
  component: Button,
  argTypes: {},
  tags: ['Button', 'AWVRE-UI', 'autodocs'],
};

export default meta;

const testOnClick = () => console.log('Button Clicked');

export const Primary = (args) => (
  <AWVREProvider>
    <Button {...args} />
  </AWVREProvider>
);

Primary.storyName = 'Button (Default)';
Primary.args = {
  children: 'Test Button',
  leftComponent: <div>Left Component ☀️</div>,
  rightComponent: <div>Right Component 🌑</div>,
  onClick: testOnClick,
};

export const Disabled = (args) => (
  <AWVREProvider>
    <Button {...args} />
  </AWVREProvider>
);

Disabled.storyName = 'Button (Disabled)';
Disabled.args = {
  children: 'Test Button',
  leftComponent: <div>Left Component ☀️</div>,
  rightComponent: <div>Right Component 🌑</div>,
  onClick: testOnClick,
  disabled: true,
};
