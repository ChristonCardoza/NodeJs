import React from 'react'
import { Button } from '@chakra-ui/react'
import { action, actions } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

export default {
    title: 'Chackra/Button',
    component: Button
}

// Adding Addon along with args story
export const Success = () => (
    <Button 
        onClick={action('Click handler')} 
        variantColor='green'
    >
        Success
    </Button>
)

export const Danger = () => (
    <Button 
        {...actions('onClick', 'onMouseOver')} 
        variantColor='red'
    >
        Danger
    </Button>
)

export const Log = () => (
    <Button 
        onClick={() => console.log('Button Clicked',process.env.STORYBOOK_THEME)} // Reading env variable from package.json
        variantColor='blue'
    >
        Log
    </Button>
)

export const Knobs = () => (
    <Button 
        disabled={boolean('Disabled',false)}
        variantColor='purple'
    >
        {text('Label', 'Button Label')}
    </Button>
)