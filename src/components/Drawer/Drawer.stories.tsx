import React from 'react'
import { Meta } from '@storybook/react'
import { Drawer } from './Drawer'
import { AWVREProvider } from '../AWVREProvider'

const meta: Meta<typeof Drawer> = {
    title: 'AWVRE-UI/Drawer',
    component: Drawer,
    argTypes: {},
    tags: ['Drawer', 'AWVRE-UI', 'autodocs'],
}

export default meta

const TestContainer = (props) => {
    return (
        <div style={{height: 400}}>
            {props.children}
        </div>
    )
}

const ArrangedApp = (args) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

    return (
        <AWVREProvider>
            <button onClick={() => setIsDrawerOpen(true)}>{isDrawerOpen ? 'Close' : 'Open'}</button>
            <TestContainer>
                <Drawer {...args} onClose={() => setIsDrawerOpen(false)} open={isDrawerOpen}/>
                </TestContainer>
            </AWVREProvider>
    )
}

export const Primary = (args) => (
    <ArrangedApp {...args} />
)

Primary.storyName = 'Drawer (Default)';
Primary.args = {
    children: 'Test Drawer',
}

export const Left = (args) => (
    <ArrangedApp {...args} />
)

Left.storyName = 'Drawer (Left)';
Left.args = {
    children: 'Test Drawer',
    anchor: 'left'
}

export const Top = (args) => (
    <ArrangedApp {...args} />
)

Top.storyName = 'Drawer (Top)';
Top.args = {
    children: 'Test Drawer',
    anchor: 'top'
}

export const Bottom = (args) => (
    <ArrangedApp {...args} />
)

Bottom.storyName = 'Drawer (Bottom)';
Bottom.args = {
    children: 'Test Drawer',
    anchor: 'bottom'
}

