---
layout: article
title: Developer Guide
section: use
---

Components are being hosted on NPM under the [pearson-ux organization][npm-org].

## SDKs

We plan to offer two SDKs which package a set of commonly used components together for easy installation and usage.

### Elements
Elements SDK consists of pure CSS and includes the core set of components for setting up a website with Elemental Design. This list includes components such as:

- Buttons
- Colors
- Typography
- Breakpoints
- Icons

In addition to the compiled CSS, Elements also installs the source SCSS files (and assets) in case you want to integrate it more directly into your existing build process. This also allows you to access some of the SCSS features in your own styles, such as the predefined color variables. Read more on [Github][ghub] or in the [developer documentation][ddocs].

### Compounds
Compounds SDK will include commonly used components that leverage javascript for enhanced functionality and interactivity. This SDK is in progress.

[elements]: https://www.npmjs.com/package/pearson-elements
[npm-org]: https://www.npmjs.com/~pearson-ux
[ddocs]: https://pearson-elements-v0.surge.sh/getting-started/
[ghub]: https://github.com/pearson-higher-ed/elements/

## Consuming


### For All Teams

- [Intro to Origami][o-intro]
- [Review Origami documentation][o-docs]
- [Review Component Documentation][ddocs]
- Identify missing components and work with PDA team to request or contribute

### Team Scenario 1: Brand New Application

1. Build your app using these recommendations: React, Redux, webpack, and Node v4+ toolchain
2. Review components library and, at a minimum, use Typography, Colors, Icons, Responsive Utilities from the Elements SDK:
- [Elements][elementsSDK]
- [Other Components][otherComps]
3. Review AppHeader and Contextual Help for possible inclusion
4. Consume other components as needed using ‘npm install’ and component usage instructions. (See Team Scenario 4)

### Team Scenario 2: Adding Elements SDK or vanilla JS components to Existing Application

1. Install npm2+ and identify how npm modules will work with your build process
2. Review the Elements SDK and, at a minimum, use Typography, Colors, Icons, Responsive Utilities:
- [Elements][elementsSDK]
3. Review the other components in the Pearson Origami npm registry
- [Other Components][otherComps]
4. Consume other components as needed using ‘npm install’ and component usage instructions

### Team Scenario 3: Adding Compounds SDK or React components to non-React Application
1. Install npm2+ and identify how npm modules will work with your build process
2. Add React/ReactDOM script includes to page
3. For Angular 1.x apps, review the compounds-ng wrapper
- [compounds-ng wrapper][compoundsNG]
4. Review the [Compounds SDK][compoundsSDK] (not published yet)
5. Integrate npm installable AppHeader and Contextual Help
6. Review the other components in the Pearson Origami npm registry
- [Other Components][otherComps]
7. Consume other components as needed using ‘npm install’ and component usage instructions

### Team Scenario 4: Adding Compounds SDK or React components to existing React Application
1. Install npm2+ and identify how npm modules will work with your build process
2. If on React < 0.14, upgrade to React v15
3. Because React dependency is externalized, require the component in your source and use webpack configured with appropriate loaders, rather than using distro bundles
4. Review the [Compounds SDK][compoundsSDK] (not published yet)
5. Integrate npm installable AppHeader and Contextual Help
6. Review the other components in the Pearson Origami npm registry
- [Other Components][otherComps]
7. Consume other components as needed using ‘npm install’ and component usage instructions


[o-intro]: https://docs.google.com/presentation/d/1Jco66Dk7p0b7z0uJ7SvuUqgtiyaeSCtR4JpFLUX4fSk/edit#slide=id.g11de0b299f_0_0
[o-docs]: http://pearson-higher-ed.github.io/design/
[elementsSDK]: https://www.npmjs.com/package/pearson-elements
[compoundsSDK]: https://www.npmjs.com/package/pearson-compounds
[otherComps]: https://www.npmjs.com/org/pearson-components
[compoundsNG]: https://github.com/Pearson-Higher-Ed/compounds-ng

## Contributing
Read the [Component Creation Guide][creation] to learn about the process of adding a new component to the library. The development standards are currently being determined, for now please follow the [Origami principles][oprinciples]. If you are contributing to the Elements SDK follow [these guidelines][eprinciples] as well.

Specifically for adding icons to ElementsSDK, first the icons must be approved by Elements' UX members. After that, you may follow the [instructions in the Elements README][ghubreadme].

Development specific requirements will eventually be added to the [Library Membership Specification][spec]. In the meantime, one principle to keep in mind is that components should not do any data fetching themselves, rather they should expect data to be passed through eventing or properties.

[creation]: {{site.baseurl}}/component-creation-guide
[ghubreadme]: https://github.com/Pearson-Higher-Ed/elements#adding-icons
[spec]: {{site.baseurl}}/membership-spec
[oprinciples]: https://origami.pearsoned.com/docs/overview/principles/
[eprinciples]: https://github.com/Pearson-Higher-Ed/elements/blob/v0/CONTRIBUTING.md

## Other Important Links

### Google group

- elemental-review@pearson.com
- [Mailing List]( https://www.google.com/url?q=https://groups.google.com/a/pearson.com/forum/%23!forum/elemental-discuss/categories&sa=D&ust=1460738399085000&usg=AFQjCNEQCQnqV3tDRhWur-_GA1I826wCdQ)

### Neo site

- <https://neo.pearson.com/groups/pearson-design-accelerator>

### Help with React
- <https://camjackson.net/post/9-things-every-reactjs-beginner-should-know>
