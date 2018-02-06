---
layout: spec
title: Component Quality Checklist
section: learn
version: 3.0.0
order: 5
intro: |
  Every component listed in the Component Library must satisfy all the requirements contained in this document. To learn about submitting components for inclusion see the [Component Creation Guide][creation-guide].

  Requirements are divided into two sections, Design and Development. Your component definition will be approved based on the design requirements and the implementation is approved based on the development requirements.

  [creation-guide]: /getting-started-dev/

design_reqs:
  - name: Universal
    description: |
      Elemental Design and the Component Library are tools meant to serve the entirety of Pearson's next gen educational ecosystem.
    reqs:
      - req: |
          Components must reflect the needs of Pearson as a whole rather than just the needs of one product.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              This requirement means you should consider what other products might also use a component and how that could change your design. It's a best practice to engage other teams mock up the component in several different product contexts.

              You should also consider the various audiences for a component (student, instructor). Where possible, a component should be designed to work for the broadest group of users, rather than specifically for one audience.

  - name: Consistent
    description: |
      One of the main goals of Elemental Design, components should enable a variety of teams to work on different aspects of the Pearson ecosystem while still producing a consistent, coherent, and accessible experience.
    reqs:
      - req: |
          A component should not duplicate functionality found in an existing component, either in whole or in part.
        type: suggested
        extras:
          - name: Explanation
            content: |
              New component should instead leverage existing work by declaring dependencies on useful components which are already in the library.

      - req: |
          A component must be reviewed by Ed Zee or Van Yang for visual consistency.
        type: mandatory
        extras:
          - name: Note
            content: |
              This requirement will be updated in the near future to specify that components must align with the rebranded visual aesthetic (currently in progress). Rebranded components will also need to support the Pearson Brand Accessibility Guidelines.

      - req: |
          Components should keep configuration options to the minimum possible.
        type: suggested
        extras:
          - name: Explanation
            content: |
              This generally means you should not allow consumers of your component to customize the appearance, style, or behavior or the component. Only add options when different modes or configurable features are needed to meet the core purpose of the component.

              For example, the header component has a few different modes which are needed to meet the use cases of a signed out user vs. a signed in user. This is appropriate configuration. On the other hand, options to change the color, font, or corner styles of a component are extraneous and will perpetuate a fractured and disjointed experience.

      - req: |
          UI copy in component images must be reviewed by Claudia Quella.
        type: mandatory

  - name: Usable and Effective
    description: |
      Not only should our designs present a consistent and pleasing interface, but an intuitive and understandable one as well.
    reqs:
      - req: |
          A component should be evaluated for usefulness, usability, and accessibility through feedback from users with the widest possible range of abilities.
        type: suggested
        extras:
          - name: Explanation
            content: |
              The necessary depth of user research increases with the scale, complexity, and novelty of a component. Atomic components such as simple buttons may only require internal documentation (including a UXD Accessibility Checklist). More complex components should be evaluated internally and externally through user feedback. Contact a User Experience Researcher if you have questions about the appropriateness of research for your component design.

              A non-exhaustive list of resource includes: Open Labs, Learning Design Research, Student and Educator Advisory Boards, and dedicated UX Research. Also, don't forget about the extensive collection of previous reports and findings.

      - req: |
          Where applicable, a component’s design should reflect the [Learning Design Principles](https://neo.pearson.com/groups/learning-design-higher-education/projects/learning-design-principles).
        type: suggested

  - name: Accessible
    reqs:
      - req: |
          Components must conform to the [Pearson Accessibility Guidelines](http://wps.pearsoned.com/accessibility/115/29601/7577872.cw/index.html) (PAG).
        type: mandatory
        extras:
          - name: Explanation
            content: |
              The Pearson Accessibility Guidelines are a company-wide implementation of the Web Content Accessibility Guidelines (WCAG) 2.0. WCAG 2.0 is a global product of the Worldwide Web Consortium that mandates specific accessibility minima and features for compliance at Levels A, AA, and AAA. The Pearson Accessibility Guidelines ensure Level AA compliance by providing a design and development framework of 42 guidelines specific to learner needs and Pearson products.

              The UXD Accessibility Checklist specifies a subset of the 42 Pearson Accessibility Guidelines which **must** be addressed during the design phase. Not every item on the UXD Accessibility Checklist will apply to every design. However, each should be carefully considered and documented for clarity and to ensure the accessibility needs of the component are understood downstream.

  - name: Responsive
    description: |
      Our users want to access our content from an increasingly diverse array of devices. Responsive design is a tried a true technique for delivering the optimal experience to each user regardless of their device.
    reqs:
      - req: |
          All components must be defined for each of the standard breakpoints defined in the [Breakpoints component](/c/breakpoints/).
        type: mandatory

      - req: |
          All touch targets should be at least 44 x 44 pixels in size (minimum dimensions 36 x 36 pixels).
        type: mandatory
        extras:
          - name: Explanation
            content: |
              It may be difficult to implement this for inline links, which can typically be excepted from this requirement.

  - name: Documented
    description: |
      Components are meant to be used by numerous teams across the Pearson organization; it's important for these consumers to completely understand a component without resorting to ad hoc meetings or other private channels of communication.
    reqs:
      - req: |
          A component must include a set of redlines that completely detail every aspect of the design and behavior.
        type: mandatory

      - req: |
          All features, configuration options, usage guidelines, and UI language patterns for a component must be documented.
        type: mandatory

      - req: |
          New versions of a component must document changes in a changelog and follow the Component Version Guidelines.
        type: mandatory

      - req: |
          Any dependencies for a component must be listed and referenced at each place where they are used in the design.
        type: mandatory

      - req: |
          Each component must include a completed [UXD Accessibility Checklist](https://docs.google.com/document/d/1ae7-wqD4A0WCucX6c4JBi-7m9PAp3QVvNteV5njIvGM/edit).
        type: mandatory

dev_reqs:
  - name: Consistent
    reqs:
      - req: |
          Standalone components should use the [Component Archetype][ca] as a starting point.

          [ca]: https://github.com/Pearson-Higher-Ed/component-archetype
        type: mandatory
        extras:
          - name: Explanation
            content: |
              The archetype implements best practices like testing, linting, bundling, transpiling ES6 to ES5, etc. It codifies a long list of decisions that you no longer have to make, saving you from wiring it all together into an automated development environment and build process.
        approvers:
          - PDA Development team

      -  req: |
            All components should be created with responsiveness in mind
         type: mandatory.
         extras:
           - name: Explanation
             content: |
               Responsive Web Design allows web pages to correctly format on any screen size. The application must balance the rich functionality associated with desktop usage with the ability to function on less powerful mobile devices.

               Principles for Responsive Web Design
               A flexible, grid-based layout: This allows the layout to reflow to the screen size of any device. Uses relative sizing of grids. Allows grid layout to adjust to viewport size.
               Flexible images and media: This allows the images and videos to reflow with the layout.

      - req: |
            All components must function properly at each of the standard breakpoints defined in the [Breakpoints component](/c/breakpoints/).
        type: mandatory

      - req: |
          New components should not duplicate the functionality found in existing components.
        type: suggested
        extras:
          - name: Explanation
            content: |
              All teams are expected to re-use available components from the Elements SDK in the npm registry. When developing a new component it is required to check the npm registry to ensure if a similar component already exists. If one exists it is necessary to reach out to the team and discuss potential updates to the original component before trying to create your own.

              When creating a new component it is recommended to use existing sub components and elements. The key idea behind this is to reuse components wherever applicable.

  - name: Accessible
    reqs:
      - req: |
          All components must be accessible.
        type: mandatory
        extras:
          - name: Explanation
            content: All components must have an accessibility review to ensure that minimun accessibility requirements are met as defined by the accessibility team.

  - name: Compatible with Pearson supported browsers
    reqs:
      - req: |
          All browers noted as optimized must be supported.
        type: mandatory
        extras:
          - name: Explanation
            content: Optimized are those OS/Browser combinations tested and certified by QA. These will generally represent the newest versions of major OSs and Browsers.

      - req: |
          Browers noted as supported should be tested and major functionality should work.
        type: mandatory
        extras:
          - name: Explanation
            content: Supported combinations will no longer be tested and certified. Any issues with supported combinations will be addressed as S1 and S2 issues as they arise.

  - name: Globalized
    reqs:
      - req: |
          All strings must be externalized.
        type: mandatory

      - req: |
          When localized, long strings should display correctly.
        type: mandatory

      - req: |
          International currency should be allowed.
        type: mandatory

      - req: |
          International dates and times should be allowed.
        type: mandatory

  - name: Meets Conventions
    reqs:
      - req: |
          Each component must support UTF-8.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              Character encoding can cause problems, especially on sites that are predominantly in English with a few foreign characters here and there, where issues with character encoding can easily go unnoticed.

              Ensure that your pages are UTF-8 encoded, using both an HTTP response header **and** an HTML meta tag: `<meta charset="UTF-8" />`. Place this as the first tag within the `<head>` section of the page, before `<title>`, since it’s important that the browser knows the right character set to use before it gets to any content.

      - req: |
          Each component should use ES6.
        type: suggested
        extras:
          - name: Explanation
            content: |
              The ES6 or ES2015 syntax is recommended be used to create components. Presentational components must not call a backend service directly to get data. The architecture is designed for the components to be loosely coupled from the service to provide highly reusable front end components. The components would need data in a certain expected format. It is the responsibility of either the consuming application or a container component to fetch and aggregate data from a RESTful API.

      - req: |
          All components must comply with the HTML5 specification.
        type: suggested

  - name: Secure
    reqs:
      - req: |
          Components must not collect data on insecure pages.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              When prompting the user for personal data such as email address, username, password or payment information, always serve the page with the form on it using HTTPS, and send the form submission to an HTTPS URL.

              It’s often considered OK to serve forms on insecure pages as long as the form posts to a secure destination. This is not acceptable, because an attacker can modify the page that serves the form and change the form post destination.

  - name: Documented
    reqs:
      - req: |
          Each implementation must include a quality readme file which will help other teams install and use the component.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              A good readme will cover the following items:

              - Introduction
              - Installation
              - Versions
              - User Guide
              - Implementation
              - Testing
              - Related Resources

  - name: Passes QA
    reqs:
      - req: |
          All components must have at least 80% code coverage.
        type: mandatory
        approvers:
          - UXF QA team

      - req: |
          Automated tests and test scripts must be included.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              Click the [following link](https://neo.pearson.com/docs/DOC-607807#jive_content_id_Tools_used) for the tools used for Automated testing and test scripts.

      - req: |
          Contributributions to the QA library must be included for each component.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              How to Contribute: You can fork the repo or create a branch out of master and make your changes, create a Pull Request for your changes to merge into the master branch. Click the [following link](https://neo.pearson.com/docs/DOC-607807#jive_content_id_How_to_contribute_to_this_repo) to see more details on how to contribute.

changelog:
  - version: 3.0.0
    changes: |
      - CHANGED: Simplified the page
      - CHANGED: Fixed all links
      - CHANGED: Updated Development Requirements section
  - version: 2.2.0
    changes: |
      - CHANGED: C1 and C2 have been combined into a single requirement
      - CHANGED: Visual Design reviewers
      - CHANGED: Remove reference to UXD Accessibility Checklist from A1 to reduce duplication
      - CHANGED: Merge D6 and D2 into a single, simplified requirement
  - version: 2.1.0
    changes: |
      - ADDED: Development specifications
      - ADDED: UA specifications
  - version: 2.0.0
    changes: Changed C3 visual design requirement
  - version: 1.0.0
    changes: Initial version

---
