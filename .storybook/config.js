import { addDecorator, configure } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

addDecorator(withNotes);

function loadStories() {
  require('../stories/index');
  // You can require as many stories as you need.
  // REQUIRE YOUR STORIES HERE
}

configure(loadStories, module);
