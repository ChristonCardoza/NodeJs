import React from 'react'
import { addDecorator, addParameters  } from '@storybook/react'
import Center from '../src/components/Center/Center'

import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/react'

import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

// Global Decorator below v6

// addDecorator(story => <Center>{story()}</Center>)

// addParameters({
// viewport: {
//   viewports: INITIAL_VIEWPORTS,
// }
// })

// addDecorator(story => (
//   <ThemeProvider theme ={theme}>
//     <CSSReset />
//     <Box m='4'>{story()}</Box>
//   </ThemeProvider>
// ))

export const decorators = [
  (story) => (
      <ThemeProvider theme ={theme}>
        <CSSReset />
        <Box m='4'><Center>{story()}</Center></Box>
      </ThemeProvider>
  ),
  // Adding console addOn
  (storyFn, context) => withConsole()(storyFn)(context)
]
addDecorator(withKnobs)
addDecorator(withA11y)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Ordering the stories
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true })
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
}