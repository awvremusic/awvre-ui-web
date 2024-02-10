import { Meta } from "@storybook/react";
import React from "react";
import { AWVREProvider } from "../AWVREProvider";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: 'AWVRE-UI/GridButton',
    component: Button,
    argTypes: {},
    tags: ['GridButton', 'AWVRE-UI', 'autodocs'],
};

export default meta;

const testOnClick = () => console.log('Button Clicked');

export const Primary = (args) => (
    <AWVREProvider>
        <Button data-testId="GridButton-id" {...args} />
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
        <Button data-testId="GridButton-id" {...args} />
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