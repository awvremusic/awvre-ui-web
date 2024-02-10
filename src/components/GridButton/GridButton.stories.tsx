import { Meta } from "@storybook/react";
import React from "react";
import { AWVREProvider } from "../AWVREProvider";
import { GridButton } from "./GridButton";

const meta: Meta<typeof GridButton> = {
    title: 'AWVRE-UI/GridButton',
    component: GridButton,
    argTypes: {},
    tags: ['GridButton', 'AWVRE-UI', 'autodocs'],
};

export default meta;

const testOnClick = () => console.log('Button Clicked');

export const Primary = (args) => (
    <AWVREProvider>
        <GridButton data-testId="GridButton-id" {...args} />
    </AWVREProvider>
);

Primary.storyName = 'GridButton (Default)';
Primary.args = {
    children: 'Test Button',
    leftComponent: <div>Left Component ☀️</div>,
    rightComponent: <div>Right Component 🌑</div>,
    onClick: testOnClick,
};

export const Disabled = (args) => (
    <AWVREProvider>
        <GridButton data-testId="GridButton-id" {...args} />
    </AWVREProvider>
);

Disabled.storyName = 'GridButton (Disabled)';
Disabled.args = {
    children: 'Test Button',
    leftComponent: <div>Left Component ☀️</div>,
    rightComponent: <div>Right Component 🌑</div>,
    onClick: testOnClick,
    disabled: true,
};