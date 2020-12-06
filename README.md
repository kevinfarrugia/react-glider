# react-glider

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://hipstersmoothie.github.io/react-glider) [![CircleCI](https://circleci.com/gh/hipstersmoothie/react-glider.svg?style=svg)](https://circleci.com/gh/hipstersmoothie/react-glider) [![Auto Release](https://img.shields.io/badge/release-auto.svg?colorA=888888&colorB=9B065A&label=auto&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=)](https://github.com/intuit/auto-release)

A react wrapper for [glider.js](https://github.com/NickPiscitelli/Glider.js/)

## Developing

```sh
yarn
yarn storybook
```

## CSS

To use the CSS for glider.js in your app either include the css in your head.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/glider-js@1.6.0/glider.min.css"
/>
```

or just include it in your project if it is set up for that.

```js
import 'glider-js/glider.min.css';
```

### Demo Defaults

This package also exposes the CSS used to render the demo.

```js
import Glider from 'react-glider/glider.defaults.css';
```

### Perspective View

The CSS for the perspective view is not included in `glider.js` or this package. You can find it in `.storybook/preview-head.html` in the `style` tag. Please do not file bugs for it as I do not want to support it.

## Usage

### Glider Methods

To get access to the current glider instance this react component exposes a ref.

```js
import React from 'react';
import Glider, { GliderMethods } from 'react-glider';

const PaneExample: React.FC<PaneProps> = ({ children, style, className }) => (
  <div className={`glider-slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);

const example = () => {
  const gliderRef = React.useRef < GliderMethods > null;

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://hipstersmoothie.com/"><img src="https://avatars3.githubusercontent.com/u/1192452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Lisowski</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=hipstersmoothie" title="Code">💻</a> <a href="#design-hipstersmoothie" title="Design">🎨</a> <a href="https://github.com/hipstersmoothie/react-glider/commits?author=hipstersmoothie" title="Documentation">📖</a> <a href="#infra-hipstersmoothie" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-hipstersmoothie" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://bitnoi.se/"><img src="https://avatars1.githubusercontent.com/u/156628?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Misiorny</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=adam187" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/zeelMT"><img src="https://avatars1.githubusercontent.com/u/35482746?v=4?s=100" width="100px;" alt=""/><br /><sub><b>zeelMT</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=zeelMT" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vinkodlak"><img src="https://avatars2.githubusercontent.com/u/24816470?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vinkodlak</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=vinkodlak" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/stanislavvasilyev-sravni"><img src="https://avatars2.githubusercontent.com/u/60090959?v=4?s=100" width="100px;" alt=""/><br /><sub><b>stanislavvasilyev-sravni</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=stanislavvasilyev-sravni" title="Code">💻</a></td>
    <td align="center"><a href="https://imkev.dev/"><img src="https://avatars1.githubusercontent.com/u/8075326?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Farrugia</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=kevinfarrugia" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hotscotch92"><img src="https://avatars1.githubusercontent.com/u/47922069?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hotscotch92</b></sub></a><br /><a href="https://github.com/hipstersmoothie/react-glider/commits?author=hotscotch92" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
