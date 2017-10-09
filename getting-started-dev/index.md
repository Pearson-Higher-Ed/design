---
layout: article
title: Developer Guide
section: use
order: 2
in_footer: true
---

Components are being hosted on NPM under the [@pearson-components organization][npm-org]. The majority will be available
in public scope, but some will be privately scoped and require credentials to install.

* TOC
{:toc}

## Elements SDK

We offer an SDK which packages together a set of commonly used components together for easy installation and usage.

Elements SDK consists of pure CSS (precompiled from SCSS) and includes the core set of components for setting up a
website with Elemental Design. This list includes components such as:

- Buttons
- Colors
- Forms
- Typography
- Breakpoints
- Icons
- Inputs
- Responsive-utilities

Elements SDK also provides a number of React (transpiled from ES6) based components that enhance the design
specifications with certain functionalities that allow them to be dropped into an application.  These
components are based upon the [React](https://facebook.github.io/react/) library, but are also designed to work within
any application framework.  These components assume that the CSS portion of the Element SDK is also being implemented.  
The list of React components includes:

- Calendar
- Dropdown
- Footer
- StaticAlert
- Tabs
- loadingSpinner
- Table
- DatePicker
- TimePicker
- Buttons
- Input fields (e.g. text input, radio/check group, select, etc.)

In addition to the compiled CSS, Elements also installs the source SCSS files (and assets) in case you want to integrate
 it more directly into your existing build process. This also allows you to access some of the SCSS features in your own
styles, such as the predefined color variables. Read more on [Github][ghub] or in the [developer documentation][ddocs].

[elements]: https://www.npmjs.com/package/@pearson-components/elements-sdk
[npm-org]: https://www.npmjs.com/~pearson-ux
[ddocs]: https://pearson-elements-v1.surge.sh/getting-started/
[ghub]: https://github.com/pearson-higher-ed/elements-sdk/

## Consuming

### For All Teams

- [Intro to Origami][o-intro]
- [Review Origami documentation][o-docs]
- [Review Component Documentation][ddocs]
- Identify missing components and work with PDA team to request or contribute

[o-intro]: https://docs.google.com/presentation/d/1Jco66Dk7p0b7z0uJ7SvuUqgtiyaeSCtR4JpFLUX4fSk/edit#slide=id.g11de0b299f_0_0
[o-docs]: http://pearson-higher-ed.github.io/design/
[elementsSDK]: https://www.npmjs.com/package/@pearson-components/elements-sdk
[otherComps]: https://www.npmjs.com/org/pearson-components
[compoundsNG]: https://github.com/Pearson-Higher-Ed/compounds-ng

## Contributing
Read the [Component Creation Guide][creation] to learn about the process of adding a new component to the library. The
development standards are currently being determined, for now please follow the [Origami principles][oprinciples]. If you
 are contributing to the Elements SDK follow [these guidelines][eprinciples] as well.

Note: Specifically for adding icons to Elements SDK, first the icons must be approved by UXF (PDA) team members. After that, you may follow the [instructions in the Elements SDK README][ghubreadme].

Development specific requirements will eventually be added to the [Library Membership Specification][spec]. In the meantime,
 one principle to keep in mind is that components should not do any data fetching themselves, rather they should expect
 data to be passed through eventing or properties.

[creation]: {{site.baseurl}}/component-creation-guide
[ghubreadme]: https://github.com/Pearson-Higher-Ed/elements-sdk#adding-icons
[spec]: {{site.baseurl}}/membership-spec
[oprinciples]: https://origami.pearsoned.com/docs/overview/principles/
[eprinciples]: https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md

## Other Important Links

### Google group

- elemental-review@pearson.com
- [Mailing List]( https://www.google.com/url?q=https://groups.google.com/a/pearson.com/forum/%23!forum/elemental-discuss/categories&sa=D&ust=1460738399085000&usg=AFQjCNEQCQnqV3tDRhWur-_GA1I826wCdQ)

### Neo site

- <https://neo.pearson.com/groups/pearson-design-accelerator>

### Help with React
- <https://camjackson.net/post/9-things-every-reactjs-beginner-should-know>
