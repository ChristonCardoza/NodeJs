import React from 'react'
import Input from './Input'

export default {
    title: 'Form/Input', // Grouping under Form
    component: Input
}

export const Small = () => <Input size='small' placeholder='Small Size' />
export const Medium = () => <Input size='medium' placeholder='Medium Size' />
export const Large = () => <Input size='large' placeholder='Large Size' />

// Re-Naming the StoryName
Small.storyName = 'Small Input'