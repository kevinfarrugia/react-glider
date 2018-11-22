# react-glider

[![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](http://hipstersmoothie.com/react-glider) [![CircleCI](https://circleci.com/gh/hipstersmoothie/react-glider.svg?style=svg)](https://circleci.com/gh/hipstersmoothie/react-glider)

A react wrapper for [glider.js](https://github.com/NickPiscitelli/Glider.js/)

## Developing

```sh
yarn
yarn storybook
```

## CSS

To use the CSS for glider.js in your app either include the css in your head.

```html
<link rel="stylesheet" href="https://unpkg.com/glider-js@1.6.0/glider.css" />
```

or just include it in your project if it is set up for that.

```js
import Glider from 'glider-js';
```

### Demo Defaults

This package also exposes the CSS used to render the demo.

```js
import Glider from 'react-glider/glider.min.css';
```

### Perspective View

The CSS for the perspective view is not included in `glider.js` or this package. You can find it in `.storybook/preview-head.html` in the `style` tag. Please do not file bugs for it as I do not want to support it.
