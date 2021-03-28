import React from 'react'
import Center from '../Center/Center'
import Button from './Button'

// gives the metadata about story and component
export default {
    title: 'Form/Button', // text comes in left-side panel in storybook and should be unique
    component: Button,
    args: {
        children: 'Received from  metadata'
    },
    argTypes: {
        onClick: {action: 'clicked'}
    }
    // decorators: [story => <Center>{story()}</Center>]
    // Center is a decorator ie its a component which will used for wrap the components
    // The global  decorator is defined at /react_storybook/.storybook/preview.js
}

// Story
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

// args story

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: ' LongPrimary Args'
}

export const MetaPrimaryA = Template.bind({})
MetaPrimaryA.args = {
    variant: 'primary'
    // it takes children directly from metadata
}



