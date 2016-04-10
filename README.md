## TeteChevre

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm install contentful` to install contentful API
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

### Known Issues
- angular2-polyfills.js is currently being handled manually. 
- bundle size is large, due to inline sourcemaps from angular2 npm source.