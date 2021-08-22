# antbtncopy

> Bir &quot;Button&quot; component&#x27;i geliştirip, bunu npmjs üzerinde paylaşmanız gerekiyor.

[![NPM](https://img.shields.io/npm/v/antbtncopy.svg)](https://www.npmjs.com/package/antbtncopy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save antbtncopy
```

## Usage

```jsx
import { Button } from 'antbtncopy'
import 'antbtncopy/dist/index.css'

React.DOM.render(
  <>
    <Button>Default button</Button>
    <Button type="primary">Primary button</Button>
    <Button type="dashed">Dashed button</Button>
    <Button type="text">Text button</Button>
    <Button type="link">Link button</Button>
  </>,
  mountNode,
);
```

## License

MIT © [alanapapa](https://github.com/alanapapa)
