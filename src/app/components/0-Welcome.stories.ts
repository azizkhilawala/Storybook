import { Welcome } from '@storybook/angular/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.story = {
  name: 'to Storybook',
  parameters: { 
    notes: {
      'For Desginers': 'I hope you enjoyed the welcome message',
      'For Developers': 'Developer related notes'
    },
    },
};
