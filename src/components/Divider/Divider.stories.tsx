import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
    title: 'AWVRE-UI/Divider',
    component: Divider,
    argTypes: {},
    tags: ['Divider', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Primary: Story = (args) => (
    <Divider data-testId="Divider-id" {...args} />
);

Primary.storyName = 'Divider (Default)';
Primary.args = {};