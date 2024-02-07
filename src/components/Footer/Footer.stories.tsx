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
  text: 'Made with ❤️ by AWVRE',
  animationDuration: 750,
  backgroundColor: AWVRE_GREEN,
};

export const Custom: Story = (args) => (
  <Footer data-testId="Footer-id" {...args} />
);
Custom.storyName = 'Footer (Custom)';
Custom.args = {
  text: 'Made custom',
  animationDuration: 250,
  backgroundColor: 'coral',
  imageUrl: 'https://media.graphassets.com/NkCteXMwSPWGpAXK3oRI',
};
