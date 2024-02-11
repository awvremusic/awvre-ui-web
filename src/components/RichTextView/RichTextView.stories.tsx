import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RichTextView } from './RichTextView';
import { AWVREProvider } from '../AWVREProvider';

const meta: Meta<typeof RichTextView> = {
  title: 'AWVRE-UI/RichTextView',
  component: RichTextView,
  argTypes: {},
  tags: ['RichTextView', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof RichTextView>;

export const Primary: Story = (args) => (
  <AWVREProvider>
    <RichTextView {...args} />
  </AWVREProvider>
);
Primary.storyName = 'RichTextView (Default)';
Primary.args = {
  innerHtml: `
  <div>
        <h1>Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. <a href="https://quick.awvremusic.com">Test Link</a>
        </p>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
  `,
};
