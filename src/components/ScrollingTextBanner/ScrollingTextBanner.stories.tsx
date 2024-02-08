import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {ScrollingTextBanner} from './ScrollingTextBanner';

const meta: Meta<typeof ScrollingTextBanner> = {
  title: 'AWVRE-UI/ScrollingTextBanner',
  component: ScrollingTextBanner,
  argTypes: {},
  tags: ['ScrollingTextBanner', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollingTextBanner>;

export const Primary: Story = (args) => (
  <ScrollingTextBanner data-testId="ScrollingTextBanner-id" {...args} />
);
Primary.storyName = 'ScrollingTextBanner (Default)';
Primary.args = {
  text: "AWVRE has made some new clothes for you to wear! Check them out now! 🎉",
  textColor: "white",
  fontFamily: "Arial",
  fontSize: "12pt",
  fontWeight: "bold",
  height: "10vh",
  animationDuration: 50,
  backgroundColor: "black",
};
