# react-glider

[![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](http://hipstersmoothie.com/react-glider) [![CircleCI](https://circleci.com/gh/hipstersmoothie/react-glider.svg?style=svg)](https://circleci.com/gh/hipstersmoothie/react-glider) [![Auto Release](https://img.shields.io/badge/release-auto.svg?colorA=888888&colorB=9B065A&label=auto&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=)](https://github.com/intuit/auto-release)

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
import Glider, {GliderMethods} from 'react-glider'

const example = () => {
  const gliderRef = React.useRef<GliderMethods>();

  return (
    <>
      <button onClick={() => gliderRef.current.destroy()}>Destroy!</button>

      <Glider ref={gliderRef}>
        <Pane>1</Pane>
        <Pane>2</Pane>
        <Pane>3</Pane>
        <Pane>4</Pane>
      </Glider>
    </>
  );
}
```
