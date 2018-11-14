import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index');
  // You can require as many stories as you need.
  // REQUIRE YOUR STORIES HERE
}

configure(loadStories, module);
