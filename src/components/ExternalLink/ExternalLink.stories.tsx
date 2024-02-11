import React from 'react';
import { Meta } from '@storybook/react';
import { ExternalLink } from './ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'AWVRE-UI/ExternalLink',
  component: ExternalLink,
  argTypes: {},
  tags: ['ExternalLink', 'AWVRE-UI', 'autodocs'],
};

export default meta;

export const Primary = (args) => <ExternalLink {...args} />;

Primary.storyName = 'ExternalLink (Default)';
Primary.args = {
  children: 'Test Link',
  href: 'https://quick.awvremusic.com',
};
