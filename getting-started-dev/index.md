---
layout: article
title: Developer Guide
section: use
---

Components are being hosted in on NPM under the [pearson-ux organization][npm-org].

## SDKs

We plan to offer two SDKs which package a set of commonly used components together for easy installation and usage.

### Elements
Consists of pure CSS and includes the core set of components for setting up a website with Elemental Design. Currently this list covers:

- Buttons
- Colors
- Typography
- Breakpoints
- Icons
- Normalize.css
- A basic CSS reset

Install with: `npm install --save pearson-elements`

In addition to the compiled CSS, Elements also installs the source SCSS files (and assets) in case you want to integrate it more directly into your existing build process. This also allows you to access some of the SCSS features in your own styles, such as the predefined color variables. Read more on [Github][ghub] or in the [developer documentation][ddocs].

### Compounds
Currently in progress, this SDK will include commonly used components that leverage javascript for enhanced functionality and interactivity.

[elements]: https://www.npmjs.com/package/pearson-elements
[npm-org]: https://www.npmjs.com/~pearson-ux
[ddocs]: https://pearson-elements-v0.surge.sh/getting-started/
[ghub]: https://github.com/pearson-higher-ed/elements/



## Contributing
Read the [Component Creation Guide][creation] to learn about the process of adding a new component to the library. The development standards are currently being determined, for now please follow the [Origami principles][oprinciples]. If you are contributing to the Elements SDK follow [these guidelines][eprinciples] as well.

Development specific requirements will eventually be added to the [Library Membership Specification][spec]. In the meantime, one principle to keep in mind is that components should not do any data fetching themselves, rather they should expect data to be passed through eventing or properties.

[creation]: {{site.baseurl}}/component-creation-guide
[spec]: {{site.baseurl}}/membership-spec
[oprinciples]: https://origami.pearsoned.com/docs/overview/principles/
[eprinciples]: https://github.com/Pearson-Higher-Ed/elements/blob/v0/CONTRIBUTING.md
