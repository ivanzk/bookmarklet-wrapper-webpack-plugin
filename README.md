# Bookmarklet Wrapper Webpack Plugin

Wraps output file in IIFE and adds 'javascript:' prefix:

```js
javascript: (function() {
  // ... file content
})();
```

Works only in production mode.

## Installation

```
npm install bookmarklet-wrapper-webpack-plugin
```

## Usage

```js
const BookmarkletWrapperPlugin = require('bookmarklet-wrapper-webpack-plugin');

module.exports = {
  // ...

  plugins: [new BookmarkletWrapperPlugin()]
};
```
