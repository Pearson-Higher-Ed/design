# Pearson Elements 
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/elements.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/elements)

For full documentation, please visit https://pearson-elements-v0.surge.sh/getting-started/

![Image](https://cloud.githubusercontent.com/assets/1950683/13062650/6d4bccee-d3fd-11e5-8815-cf3b8e5c7a78.jpg?raw=true "swatch")

## Consuming this SDK

We recommend that you install Elements in your project using [npm](https://npmjs.org):

    npm install --save pearson-elements
      
The installation provides both the dist version with CSS, and the original source 
[SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html), with required assets. 
This allows the option for the consuming app to include the SDK as a static asset or as part of a build process.

### Important: Fonts

The Elements SDK looks for the /fonts folder at the root of your served application. Copy the npm-installed /fonts to the
 correct location in your web server, and ensure your application is set up to allow the font files to download correctly 
 and not filter out the response header Content Type (i.e. 'application/x-font-ttf') so the icons may be rendered in the
  browser.

## Contributions

Please review the [guidelines](CONTRIBUTING.md) for contributing before getting started.

You must have [Node.js](https://nodejs.org/en/) v5 installed.

Clone the project and install the dependencies:

    git clone https://github.com/Pearson-Higher-Ed/elements.git
    cd elements
    npm install

### Adding Icons

Please follow the steps outlined in the [how-to-add-an-icon](how-to-add-an-icon.md) file to add an icon. This assumes the icon is a Font-Awesome icon and was already approved by UX Design (contact the [Elemental Design Google Group](https://groups.google.com/a/pearson.com/forum/#!forum/elemental-discuss/categories)).


### Build the Documentation

We use [Metalsmith](http://www.metalsmith.io/) to generate the documentation. 

    npm start 

This will give you a browser-sync served copy of the docs on http://localhost:3000, and build the latest version of 
elements.min.css to /dist.

### Test
 
The unit tests are run by Karma configured to use webpack to transpile and bundle the ES6-compliant Mocha tests.
 
    npm test
     
### Fork repo

Forked repo will not trigger the 'ux-test-platform' tests. In the logs, you would see this error: {"error":"Travis encountered an error, sorry :("} which may cause the elements build to fail.

	To handle this, follow below steps to have successful build runs:

 	cd elements
 	travis login --org *Provide your github login and password
 	travis token --org *Copy the access token
 	travis ecrypt AUTH_TOKEN=access_token *Copy this token and replace it with env: global: secure: <<access_token>> in .travis.yml file
 	
 	Push this change and the ux-test-platform build would be triggered successfully.

## Acknowledgements

This project was inspired by other popular front-end frameworks published under the MIT license:

- [Bootstrap](https://getbootstrap.com) copyright 2011-2015 Twitter, Inc.
- [Foundation](http://foundation.zurb.com/) copyright 2015 ZURB, inc.

## License

Copyright 2015 Pearson Education. This software is published under the [MIT](LICENSE) license.
