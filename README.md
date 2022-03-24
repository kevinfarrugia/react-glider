# react-glider

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://hipstersmoothie.github.io/react-glider) [![CircleCI](https://circleci.com/gh/hipstersmoothie/react-glider.svg?style=svg)](https://circleci.com/gh/hipstersmoothie/react-glider) [![Auto Release](https://img.shields.io/badge/release-auto.svg?colorA=888888&colorB=9B065A&label=auto&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=)](https://github.com/intuit/auto-release)

A [React](https://reactjs.org/) wrapper for [Glider.js](https://github.com/NickPiscitelli/Glider.js/).

### [Demo](https://codesandbox.io/s/react-glider-demo-y5klj) | [Storybook](https://hipstersmoothie.github.io/react-glider/)

## Quick Start

### Installation:

```sh
npm -i -s react-glider
```

### Usage

```
import * as React from 'react';

import Glider from 'react-glider';
import 'glider-js/glider.min.css';
```

```
<Glider
  draggable
  hasArrows
  hasDots
  slidesToShow={2}
  slidesToScroll={1}
>
  <Pane>1</Pane>
  <Pane>2</Pane>
  <Pane>3</Pane>
  <Pane>4</Pane>
  <Pane>5</Pane>
</Glider>
```

### CSS

To use the CSS for Glider.js in your app either include the CSS file in your head:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/glider-js@1.6.0/glider.min.css"
/>
```

or import it into your project from the `npm` module.

```js
import 'glider-js/glider.min.css';
```

#### Demo Defaults

This package also exposes the CSS used to render the demo which may also be imported as follows:

```js
import Glider from 'react-glider/glider.defaults.css';
```

### Options

| Option           | Description                                                                                                                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hasArrows        | Show/hide arrows. (default = false)                                                                                                                                                                                                                       |
| hasDots          | Show/hide dots. (default = false)                                                                                                                                                                                                                         |
| iconLeft         | ReactNode for the left arrow. (default = '«')                                                                                                                                                                                                             |
| iconRight        | ReactNode for the right arrow. (default = '»')                                                                                                                                                                                                            |
| scrollToSlide    | Starting slide (default = 0)                                                                                                                                                                                                                              |
| scrollToPage     | Starting page (default = 0)                                                                                                                                                                                                                               |
| slidesToShow     | The number of slides to show in container. If this value is set to auto, it will be automatically calculated based upon the number of items able to fit within the container viewport. This requires setting the itemWidth option.                        |
| slidesToScroll   | The number of slides to scroll when arrow navigation is used. If this value is set to auto, it will match the value of slidesToScroll.                                                                                                                    |
| itemWidth        | This value is ignored unless slidesToShow is set to auto, in which it is then required.                                                                                                                                                                   |
| exactWidth       | This prevents resizing items to fit when slidesToShow is set to auto.                                                                                                                                                                                     |
| resizeLock       | If true, Glider.js will lock to the nearest slide on resizing of the window                                                                                                                                                                               |
| rewind           | If true, Glider.js will scroll to the beginning/end when its respective endpoint is reached                                                                                                                                                               |
| duration         | An aggravator used to control animation speed. Higher is slower. (default = 0.5)                                                                                                                                                                          |
| dots             | A string containing the dot container selector                                                                                                                                                                                                            |
| arrows           | An object containing the prev/next arrows selectors                                                                                                                                                                                                       |
| draggable        | If true, the list can be scrolled by click and dragging with the mouse. (default = false)                                                                                                                                                                 |
| dragVelocity     | How much to aggravate the velocity of the mouse dragging. (default = 3.3)                                                                                                                                                                                 |
| scrollPropagate  | Whether or not to release the scroll events from the container. (default = true)                                                                                                                                                                          |
| propagateEvent   | Whether or not Glider.js events should bubble (useful for binding events to all carousels). (default = false)                                                                                                                                             |
| scrollLock       | If true, Glider.js will scroll to the nearest slide after any scroll interactions. (default = false)                                                                                                                                                      |
| skipTrack        | Whether or not Glider.js should skip wrapping its children with a 'glider-track' <div>. NOTE: If true, Glider.js will assume that the 'glider-track' element has been added manually. All slides must be children of the track element. (default = false) |
| scrollLockDelay  | How long (ms) to wait after scroll event before locking, if too low, it might interrupt normal scrolling. (default = 250)                                                                                                                                 |
| responsive       | An object containing custom settings per provided breakpoint. Glider.js breakpoints are mobile-first be conscious of your ordering.                                                                                                                       |
| containerElement | Replace container HTML element.                                                                                                                                                                                                                           |
| easing           | Use any custom easing function, compatible with most easing plugins.                                                                                                                                                                                      |

### Arrows

If the Glider component should display arrows, you are are able to configure these using the `arrows` prop.

#### Selectors

The `arrows` prop supports an object containing `left` and `right` CSS selectors.

```jsx
arrows={{
  prev: '#buttonPrev',
  next: '#buttonNext',
}}
```

_Note that if you have multiple Glider elements on the same page, you need to assign a different CSS selector to each Glider._

#### Elements

The `arrows` prop supports an object containing `left` and `right` references to an HTML element.

When using native HTML elements:

```jsx
arrows={{
  prev: document.getElementById("prev"),
  next: document.getElementById("next")
}}
```

When using `React.useRef`:

```jsx
arrows={{
  prev: leftArrowEl.current,
  next: rightArrowEl.current,
}}
```

_Note that `React.useRef` will assign a value to `current` after the component has rendered. This means that on the first render, `current` is null._

### Events

| Event          | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| onLoad         | Called after Glider component is initialized.                                 |
| onAnimated     | Called whenever a Glider.js paging animation is complete                      |
| onRemove       | Called whenever a Glider.js animation is complete                             |
| onSlideVisible | Called whenever a slide a shown. Passed an object containing the slide index  |
| onRefresh      | Called whenever Glider.js refreshes it's elements or settings                 |
| onAdd          | Called whenever an item is added to Glider.js                                 |
| onDestroy      | Called whenever a Glider.js is destroyed                                      |
| onSlideHidden  | Called whenever a slide a hidden. Passed an object containing the slide index |

### Glider Methods

To get access to the current glider instance this react component exposes a ref.

```ts
import React from 'react';
import Glider, { GliderMethods } from 'react-glider';

const PaneExample: React.FC<PaneProps> = ({ children, style, className }) => (
  <div className={`glider-slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);

const example = () => {
  const gliderRef = React.useRef<GliderMethods>(null);

  return (
    <>
      <button onClick={() => gliderRef.current?.destroy()}>Destroy!</button>

      <Glider ref={gliderRef}>
        <PaneExample>1</PaneExample>
        <PaneExample>2</PaneExample>
        <PaneExample>3</PaneExample>
        <PaneExample>4</PaneExample>
      </Glider>
    </>
  );
};
```

### Perspective View

The CSS for the [perspective view](https://hipstersmoothie.github.io/react-glider/?path=/story/glider--perspective-view) is not included in `Glider.js` or this package. You can find it in [`.storybook/preview-head.html`](https://github.com/hipstersmoothie/react-glider/blob/master/.storybook/preview-head.html) in the `style` tag. Please do not file bugs for it as I do not want to support it.

## FAQs

### Can I replace `react-slick` for `react-glider`?

If you are interested in migrating from [`react-slick`](https://www.npmjs.com/package/react-slick), please note that `react-glider` only includes a subset of the features available in `react-slick`. Most notably, `react-glider` doesn't include autoplay, infinite looping, variable width or custom transitions. If you are using `react-slick` as a carousel to list elements, `react-slick` probably includes more features than you need. In such cases, replacing it with `react-glider` would reduce your footprint while providing your users with a jank-free experience.

### How can I remove the eslint warning `import/no-extraneous-dependencies`?

[`import/no-extraneous-dependencies`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md) requires that all dependencies are included in the project's `package.json` file. Since the CSS file is generated by `glider-js`, it will not be listed in your `package.json` file. The preferred option would be to create a local CSS file containing the [`glider.css`](https://github.com/NickPiscitelli/Glider.js/blob/master/glider.css) file's contents. Alternatively, you may disable the eslint warning for that line. We do not recommend installing `glider-js` as a dependency in your package as you would then be responsible for maintainining the `glider-js` and `react-glider` dependencies in your project.

### Can I customize the appearance of the dots/pagination elements?

You may customize the dots using CSS and the `.glider-dots` and `glider-dot` CSS selectors. Alternatively, you may link an external DOM element as the pagination element using the `dots` property.

### Can I lazyload images on inactive slides?

The recommend approach for lazy loading images is to use the browser's `loading="lazy"` implementation.

### Which browsers are supported?

As `react-glider` is a wrapper for `Glider.js`, it should run on all modern browsers. Support for older browsers can be achieved by polyfilling document.classList, window.requestAnimationFrame, Object.assign and CustomEvent.

## Developing

```sh
yarn
yarn storybook
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://hipstersmoothie.com/"><img src="https://avatars3.githubusercontent.com/u/1192452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Lisowski</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=hipstersmoothie" title="Code">💻</a> <a href="#design-hipstersmoothie" title="Design">🎨</a> <a href="https://github.com/hipstersmoothie/react-glider/commits?author=hipstersmoothie" title="Documentation">📖</a> <a href="#infra-hipstersmoothie" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-hipstersmoothie" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://bitnoi.se/"><img src="https://avatars1.githubusercontent.com/u/156628?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Misiorny</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=adam187" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/zeelMT"><img src="https://avatars1.githubusercontent.com/u/35482746?v=4?s=100" width="100px;" alt=""/><br /><sub><b>zeelMT</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=zeelMT" title="Code">💻</a> <a href="https://github.com/hipstersmoothie/react-glider/commits?author=zeelMT" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/vinkodlak"><img src="https://avatars2.githubusercontent.com/u/24816470?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vinkodlak</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=vinkodlak" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/stanislavvasilyev-sravni"><img src="https://avatars2.githubusercontent.com/u/60090959?v=4?s=100" width="100px;" alt=""/><br /><sub><b>stanislavvasilyev-sravni</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=stanislavvasilyev-sravni" title="Code">💻</a></td>
    <td align="center"><a href="https://imkev.dev/"><img src="https://avatars1.githubusercontent.com/u/8075326?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Farrugia</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=kevinfarrugia" title="Code">💻</a> <a href="https://github.com/hipstersmoothie/react-glider/commits?author=kevinfarrugia" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/hotscotch92"><img src="https://avatars1.githubusercontent.com/u/47922069?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hotscotch92</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=hotscotch92" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://mshaaban.com/"><img src="https://avatars.githubusercontent.com/u/6163988?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Moe Shaaban</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=mshaaban0" title="Documentation">📖</a> <a href="https://github.com/hipstersmoothie/react-glider/commits?author=mshaaban0" title="Code">💻</a></td>
    <td align="center"><a href="https://www.drivenow.com.au/"><img src="https://avatars.githubusercontent.com/u/672405?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cameron Braid</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=cameronbraid" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License and Copyright

This software is released under the terms of the [MIT license](https://github.com/hipstersmoothie/react-glider/blob/master/LICENSE).
