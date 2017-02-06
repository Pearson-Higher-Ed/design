# Pearson Elements
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/elements.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/elements)

To see individual Elements components in action, please visit https://pearson-elements-v1.surge.sh/elements/ or http://pearson-higher-ed.github.io/elements/elements/ on Github.


## Consuming this SDK

We recommend that you install Elements in your project using [npm](https://npmjs.org):

    npm install --save pearson-elements

The installation provides both the dist version with CSS, and the original source [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html), with required assets.  This allows the option for the consuming app to include the SDK as a static asset or as part of a build process.

To comment out any SCSS file so it's not added to your rendered elements.css, open `/scss/elements.scss` and use JavaScript-style commenting. Example:

```
    // base variables
    @import 'base/variables';

    // base HTML tags
    //@import 'base/html-tags';

    // typography
    @import 'elements/typography/type';
```

The above would prevent the `_html-tags.scss` styles from being transpiled into the `elements.css` file.

NOTE: if desired, Elements SDK ships with a version that does not include any styling on plain HTML tags.  Simply include the `dist/css/elementsNoPlain.css` or `dist/css/elementsNoPlain.min.css` files or add the `/scss/elementsNoPlain.scss` file to the project.

### Important: Fonts and Icons

The Elements SDK looks for the /fonts and /icons folders at the root of your served application. Copy the npm-installed /fonts and /icons to the correct location in your web server, and ensure your application is set up to allow the font files to download correctly and not filter out the response header Content Type (i.e. 'application/x-font-ttf') so the fonts may be rendered in the browser.

#### Internet Explorer

Some caching headers will prevent Internet Explorer from showing font files after a refresh. The culprits are `Cache-control: no-store` and on https `Pragma: no-cache`.

#### Icons

This version of Elements uses an SVG sprite for icons. The sprite file is found in `/dist/icons/` in Elements, and should be copied to the appropriate place, as mentioned above, in your web server. In additional, to support Internet Explorer and some versions of Android where the default-Chrome browser is actually webkit, that SVG sprite must be present on your application's page. See <a href="https://pearson-elements-v1.surge.sh/elements/icons/">the icons page</a> under "Two methods of including icons" for examples of getting this sprite on your application page. Additionally, there are instructions on that page for how to add new icons.

## Contributions

Please review the [guidelines](https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md) for contributing before getting started.

You must have [Node.js](https://nodejs.org/en/) v5 installed.

Clone the project and install the dependencies:

    git clone https://github.com/Pearson-Higher-Ed/elements.git
    cd elements
    npm install

### Adding Icons

See <a href="https://pearson-elements-v1.surge.sh/elements/icons/">the icons documentation</a> under "Adding new icons" for the process of adding a new icon.

### Build the Documentation

Contibutors adding wholly new components to Elements (which have been already approved by UX design), in addition to writing CSS for the component, will also need to add a new component page to the docs.

We use [Metalsmith](http://www.metalsmith.io/) to generate the documentation. To add a new component to the docs:

- update `/docs/_data/nav.yaml` file with the new component name (this adds it to the menu)
- add a new `.md` file to `/docs/elements/` (use any of the other files in that directory as an example)

The new component's document page should:
- have some explanation of what the purpose of the element or component is
- have some example HTML (wrapped in demo tags, you can show both the rendered in-browser version as well as the actual HTML code in one go) for other developers to see where to best add Elements classes
- have any special use notes if needed, such as accessibility or browser support gotchas

To view your changes or some branch in action:

    npm start

This will give you a browser-sync served copy of the docs on http://localhost:3000, and build the latest version of elements.min.css to /dist.



### Fork repo

Forked repo will not trigger the 'ux-test-platform' tests. In the logs, you would see this error: {"error":"Travis encountered an error, sorry :("} which may cause the elements build to fail.

	To handle this, follow below steps to have successful build runs:

 	cd elements
 	travis login --org *Provide your github login and password
 	travis token --org *Copy the access token
 	travis encrypt AUTH_TOKEN=access_token *Copy this token and replace it with env: global: secure: <<access_token>> in .travis.yml file

 	Push this change and the ux-test-platform build would be triggered successfully.


## Element Design Document Version

List of Elements with their current respective design version:

( <a href="http://pearson-higher-ed.github.io/design/">Design Document Site</a> )

| Element | Current Design Version |
|---------|------------------------|
| Typography | v2.0.0-beta.8 |
| Colors | v2.0.0-beta.4 |
| Icons | v2.0.0-beta.2 |
| Buttons | v2.0.0-beta.4 |
| Inputs | v2.0.0-beta.3 |
| Grid | v1.0.0 |
| Presentation Strategies | v1.0.0 |
| Templates | v2.0.0-beta.1 |
| Responsive Utilities | v1.0.0 |


** Developers should update table as they implement new versions...*


## Acknowledgements

This project was inspired by other popular front-end frameworks published under the MIT license:

- [Bootstrap](https://getbootstrap.com) copyright 2011-2016 Twitter, Inc.
- [Foundation](http://foundation.zurb.com/) copyright 2016 ZURB, inc.

## License

Copyright 2016 Pearson Education. This software is published under the [MIT](LICENSE) license.
