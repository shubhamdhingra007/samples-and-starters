import { decoratorSample } from './decorator-sample';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered'   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
}

export const decorators = [
  decoratorSample
];