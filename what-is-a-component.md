---
layout: article
title: What is a Component?
section: learn
status: deprecated
---

Components form the core idea of the UX Framework's philosophy. Each component packages together a set of style or functionality into a reusable unit which is offered to consumers in two parts: a *definition* which describes the features and design of the component and then an *implementation*, which includes all the code and development documentation necessary to actually incorporate the component into an end product.

* TOC
{:toc}

## Features of Components
All members of the component library offer a standard set of features and functionality to consuming products. These include:

- Full compliance with the Pearson Accessibility Guidelines
- Complete responsive design
- Validation with user feedback (typically)
- Adherence to Learning Design Principles
- Modular and reusable design
- At least one reference implementation

For more details see the the [Library Membership Specification][spec].

## Atoms, Molecules, Organisms, Oh My!
Simpler components can be assembled to create more complex components. For example, the Buttons component uses styles from the Colors and Typography component. This means Buttons *depends* on Colors and Typography. In general, components solve one specific problem, or a small set of related problems, and depend on other components to solve tangentially related problems. In the case of Buttons, it solves the problems of what a button should look like, how it should behave when pressed or focused with the keyboard or disabled, and lets the Colors and Typography components solve problems like what font or what color should be used.

![Component Dependencies]({{site.baseurl}}/img/compound_components.png)

In general, the more dependencies a component has (both directly and indirectly) the more complex it is. This is called a *higher order component* and you might also see the terms *organism* or *page-level component* (page-level meaning almost the whole page is one large component). Simpler components have fewer or no dependencies and are called *lower order components* (also *atoms*, or *molecules*).
