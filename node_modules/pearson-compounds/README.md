# Core Components for Pearson Web UX
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/compounds.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/compounds)

This module provides a foundational set of [React](http://facebook.github.io/react) components for building Pearson web
user experiences.

## Usage

This project supports [Node v4+](https://nodejs.org) and npm 2+ installed in your development toolchain.

Install and save in your package.json:

    npm install pearson-compounds --save

Import a single component:

    import { Button } from 'pearson-compounds';


Import all components:

    import * as Compounds from 'pearson-compounds';

or destructure as needed:

    import {
      Button,
      Icon,
      TextInput,
      Select
    } from 'pearson-compounds';


### External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or
available from a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

#### Polyfills

React components with internationalisation use React-Intl which relies on the ECMAScript Internationalisation API. This was not supported in Safari until version 10. If you are supporting Safari older than 10, there is a polyfill from Andy Earnshaw (see below).

CustomEvent support in IE is also polyfilled. Because many teams are supporting both IE 11 and Safari 9, we've combined the polyfills into a single script. The example below polyfills for CustomEvent and localisation for English and French:

```
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
```

Be sure to include the above script (a version of it that makes sense for your project and supported browsers) on your HTML page running CompoundsSDK, if you need it.

## Contributing

### Initial Machine Setup

1. Install [Git](https://git-scm.com/downloads).
2. Install [Node 4.0.0 or greater](https://nodejs.org) - Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
3. On a Mac? You're all set. If you're on Windows, complete the steps for your OS below.

**On Windows:**

1. Install Ruby as the runtime engine for SCSS.
2. Install [Python 2.7](https://www.python.org/downloads/). Some node modules may rely on node-gyp, which requires Python on Windows.

**On Chrome browser:**

Optionally, install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

### Quick Start

After cloning the repository:

    npm install
    npm run build
    npm start

Navigate to **http://localhost:8081/demo**, where the spawned Node server hosts a webpack-generated SPA using
React Router for defining how to render the components.

As you save changes to the source, the changes are automatically reloaded in the browser.

### Github Pages

To deploy this project to Github Pages comment out build section in .gitignore then commit your changes, and run:

    npm run gh-pages


### Test

The project is wired to unit test with Jest, "expect" assertion library, and expect-jsx to turn React
elements into formatted strings.

    npm test

### QA Testing

QA may use the event harness to instantiate a component for testing using this format:
```
  document.body.dispatchEvent(new CustomEvent('o.InitCompounds', {
    detail: {
      elementId     : 'app',
      componentName : 'Button',
      props         : {
                       btnType :'primary',
                       btnSize :'xlarge',
                       children:'hi there'
                      }
    }
  }));
```
## Local Linking to Elements SDK

When you need to work with a local version of Elements SDK that has not been published, you can utilize **npm link**.

In the elements project, create a symlink.

    elements> npm link

In the compounds project, link to this newly-created symlink using the package.json name field value for the Elements SDK.

    compounds> npm link pearson-elements

Note that the linking occurs immediately in node_modules, without rebuilding. You may need to re-execute this to pick up
any changes made to Elements.

To undo this specific symlink:

    compounds> npm unlink pearson-elements

Note that re-installing node_modules will remove all symlinks.

## Documentation Site

The static demo site is located at:
http://localhost:8081/compounds/

## CodeCoverage site

After running npm test && npm start, you may view the code coverage site at:
http://localhost:8081/coverage/lcov-report


## Guidelines

All submissions must be via pull request and approved before the pearson-design-accelerator@pearson.com team will merge
and allow it to enter the release process. All submissions must pass this project's linting, test with 100% code coverage,
and be compatible with the version(s) of React approved for the Pearson User Experience Platform.

## License

Copyright 2016 Pearson Education. This software is published under the [MIT](LICENSE) license.
