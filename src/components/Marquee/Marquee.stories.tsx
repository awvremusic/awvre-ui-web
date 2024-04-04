import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './Marquee';

const meta: Meta<typeof Marquee> = {
  title: 'AWVRE-UI/ScrollingTextBanner',
  component: Marquee,
  argTypes: {},
  tags: ['ScrollingTextBanner', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Primary: Story = (args) => <Marquee {...args} />;
Primary.storyName = 'ScrollingTextBanner (Default)';
Primary.args = {
  text: 'AWVRE has made some new clothes for you to wear! Check them out now! 🎉',
  textColor: 'white',
  fontFamily: 'Arial',
  fontSize: '12pt',
  fontWeight: 'bold',
  height: '10vh',
  animationDuration: 10,
  backgroundColor: 'black',
};
