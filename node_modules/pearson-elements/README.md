# Pearson Elements 
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/elements.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/elements)

For full documentation, please visit https://pearson-elements-v0.surge.sh/getting-started/

![Image](https://cloud.githubusercontent.com/assets/1950683/13062650/6d4bccee-d3fd-11e5-8815-cf3b8e5c7a78.jpg?raw=true "swatch")

## Consuming this SDK

We recommend that you install Elements in your project using [npm](https://npmjs.org):

    npm install --save pearson-elements
      
The installation provides both the dist version with CSS, and the original source 
[SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html), with required assets. 

This allows the consuming app to include the SDK as a static asset or as part of a build process.

## Contributions

Please review the [guidelines](CONTRIBUTING.md) for contributing before getting started.

You must have [Node.js](https://nodejs.org/en/) v5 installed.

Clone the project and install the dependencies:

    git clone https://github.com/Pearson-Higher-Ed/elements.git
    cd elements
    npm install

### Build the Documentation

We use [Metalsmith](http://www.metalsmith.io/) to generate the documentation. 

    npm start 

This will give you a browser-sync served copy of the docs on http://localhost:3000, and build the latest version of 
elements.min.css to /dist.

### Test
 
The unit tests are run by Karma configured to use webpack to transpile and bundle the ES6-compliant Mocha tests.
 
    npm test
     
## Acknowledgements

This project was inspired by other popular front-end frameworks published under the MIT license:

- [Bootstrap](https://getbootstrap.com) copyright 2011-2015 Twitter, Inc.
- [Foundation](http://foundation.zurb.com/) copyright 2015 ZURB, inc.

## License

Copyright 2015 Pearson Education. This software is published under the [MIT](LICENSE) license.
