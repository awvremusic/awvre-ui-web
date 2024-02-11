import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { AWVREProvider } from '../AWVREProvider';

const meta: Meta<typeof Text> = {
  title: 'AWVRE-UI/Text',
  component: Text,
  argTypes: {},
  tags: ['Text', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);
Primary.storyName = 'Text - Default';
Primary.args = {
  children: 'Hello World',
};

export const Heading1: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Heading1.storyName = 'Text - Heading 1';
Heading1.args = {
  children: 'Hello World',
  variant: 'h1',
};

export const Heading2: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Heading2.storyName = 'Text - Heading 2';
Heading2.args = {
  children: 'Hello World',
  variant: 'h2',
};

export const Heading3: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Heading3.storyName = 'Text - Heading 3';
Heading3.args = {
  children: 'Hello World',
  variant: 'h3',
};

export const Heading4: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Heading4.storyName = 'Text - Heading 4';
Heading4.args = {
  children: 'Hello World',
  variant: 'h4',
};

export const Heading5: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Heading5.storyName = 'Text - Heading 5';
Heading5.args = {
  children: 'Hello World',
  variant: 'h5',
};

export const Heading6: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Heading6.storyName = 'Text - Heading 6';
Heading6.args = {
  children: 'Hello World',
  variant: 'h6',
};

export const Subtitle1: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Subtitle1.storyName = 'Text - Subtitle 1';
Subtitle1.args = {
  children: 'Hello World',
  variant: 'subtitle1',
};

export const Subtitle2: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Subtitle2.storyName = 'Text - Subtitle 2';
Subtitle2.args = {
  children: 'Hello World',
  variant: 'subtitle2',
};

export const Body1: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Body1.storyName = 'Text - Body 1';
Body1.args = {
  children: 'Hello World',
  variant: 'body1',
};

export const Body2: Story = (args) => (
  <AWVREProvider>
    <Text {...args} />
  </AWVREProvider>
);

Body2.storyName = 'Text - Body 2';
Body2.args = {
  children: 'Hello World',
  variant: 'body2',
};
