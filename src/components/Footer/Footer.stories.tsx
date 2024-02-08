import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { AWVRE_GREEN } from '../../Constants';

const meta: Meta<typeof Footer> = {
  title: 'AWVRE-UI/Footer',
  component: Footer,
  argTypes: {},
  tags: ['Footer', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = (args) => (
  <Footer data-testId="Footer-id" {...args} />
);
Primary.storyName = 'Footer (Default)';
Primary.args = {
  children: <p style={{color: "white", fontWeight: "bold", margin: "auto"}}>Made with ❤️ by AWVRE</p>,
  animationDuration: 750,
  backgroundColor: AWVRE_GREEN,
};

export const Custom: Story = (args) => (
  <Footer data-testId="Footer-id" {...args} />
);
Custom.storyName = 'Footer (Custom)';
Custom.args = {
  children: 'Made custom',
  animationDuration: 250,
  backgroundColor: 'coral',
  imageUrl: 'https://lonelysword.com/images/lonelysword_text.svg',
};
