---
layout: spec
title: Library Membership Specification
section: contribute
version: 1.1.0
intro: |
  Every component listed in the Component Library must satisfy all the requirements contained in this document. To learn about submitting components for inclusion see the [Component Creation Guide][creation-guide].

  Requirements are divided into two sections, Design and Development. Your component definition will be approved based on the design requirements and the implementation is approved based on the development requirements.

  [creation-guide]: /design/component-creation-guide/

design_reqs:
  - name: Universal
    description: |
      Elemental Design and the Component Library are tools meant to serve the entirety of Pearson's next gen educational ecosystem.
    reqs:
      - req: |
          U1: Components must reflect the needs of Pearson as a whole rather than just the needs of one product.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              This requirement means you should consider what other products might also use a component and how that could change your design. It's a best practice to engage other teams mock up the component in several different product contexts.

              You should also consider the various audiences for a component (student, instructor). Where possible, a component should be designed to work for the broadest group of users, rather than specifically for one audience.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)
          - Joe Macaluso (Product)


  - name: Consistent
    description: |
      One of the main goals of Elemental Design, components should enable a variety of teams to work on different aspects of the Pearson ecosystem while still producing a consistent, coherent, and accessible experience.
    reqs:
      - req: |
          C1: A component should not duplicate functionality found in an existing component, either in whole or in part.
        type: suggested
        extras:
          - name: Explanation
            content: |
              New component should instead leverage existing work by declaring dependencies on useful components which are already in the library.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          C2: A component must not duplicate functionality found in the following components: [Buttons](/design/c/buttons), [Breakpoints](/design/c/breakpoints), [Colors](/design/c/colors), [Icons](/design/c/icons), or [Typography](/design/c/typography).
        type: mandatory
        extras:
          - name: Explanation
            content: |
              New components must leverage the existing functionality in these components by declaring them as dependencies, where needed.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          C3: A component should reflect the current overall design aesthetic in use across the next gen products (e.g. Console, ILP, Pi, Exchange).
        type: suggested
        extras:
          - name: Note
            content: |
              This requirement will be updated in the near future to specify that components must align with the rebranded visual aesthetic (currently in progress). Rebranded components will also need to support the Pearson Brand Accessibility Guidelines.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          C4: A component must be versioned according to the [Component Versioning Specification](/design/component-versioning).
        type: mandatory
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          C5: Components should keep configuration options to the minimum possible.
        type: suggested
        extras:
          - name: Explanation
            content: |
              This generally means you should not allow consumers of your component to customize the appearance, style, or behavior or the component. Only add options when different modes or configurable features are needed to meet the core purpose of the component.

              For example, the header component has a few different modes which are needed to meet the use cases of a signed out user vs. a signed in user. This is appropriate configuration. On the other hand, options to change the color, font, or corner styles of a component are extraneous and will perpetuate a fractured and disjointed experience.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)



  - name: Usable and Effective
    description: |
      Not only should our designs present a consistent and pleasing interface, but an intuitive and understandable one as well.
    reqs:
      - req: |
          UE1: A component should be evaluated for usefulness, usability, and accessibility through feedback from users with the widest possible range of abilities.
        type: suggested
        extras:
          - name: Explanation
            content: |
              The necessary depth of user research increases with the scale, complexity, and novelty of a component. Atomic components such as simple buttons may only require internal documentation (including a UXD Accessibility Checklist). More complex components should be evaluated internally and externally through user feedback. Contact a User Experience Researcher if you have questions about the appropriateness of research for your component design.

              A non-exhaustive list of resource includes: Open Labs, Learning Design Research, Student and Educator Advisory Boards, and dedicated UX Research. Also, don't forget about the extensive collection of previous reports and findings.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)
          - Chris Langston (Accessibility Research)

      - req: |
          UE2: Where applicable, a component’s design should reflect the [Learning Design Principles](https://neo.pearson.com/groups/learning-design-higher-education/projects/learning-design-principles).
        type: suggested
        approvers:
          - Tommy Bishop (Learning Design)

  - name: Accessible
    reqs:
      - req: |
          A1: Components must conform to the [Pearson Accessibility Guidelines](http://wps.pearsoned.com/accessibility/115/29601/7577872.cw/index.html) (PAG). Designers must provide a [UXD Accessibility Checklist](https://docs.google.com/a/pearson.com/document/d/1Hqa-p_CePJ4x7O7ALOCWM88OaeODx9dP6gEko00sdxs/edit?usp=sharing) with each component that ensures that PAG has been considered during the design phase. This checklist also functions as fulfillment of PAG 42 - Documentation of Accessibility.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              The Pearson Accessibility Guidelines are a company-wide implementation of the Web Content Accessibility Guidelines (WCAG) 2.0. WCAG 2.0 is a global product of the Worldwide Web Consortium that mandates specific accessibility minima and features for compliance at Levels A, AA, and AAA. The Pearson Accessibility Guidelines ensure Level AA compliance by providing a design and development framework of 42 guidelines specific to learner needs and Pearson products.

              The UXD Accessibility Checklist specifies a subset of the 42 Pearson Accessibility Guidelines which **must** be addressed during the design phase. Not every item on the UXD Accessibility Checklist will apply to every design. However, each should be carefully considered and documented for clarity and to ensure the accessibility needs of the component are understood downstream.
        approvers:
          - Isabelle Burkhart (Accessibility UX)
          - Chris Langston (Accessibility UX)
          - Mallory van Achterberg-Hinkley (Accessibility Development)
          - Suzanne Taylor (Global Accessibility)


  - name: Responsive
    description: |
      Our users want to access our content from an increasingly diverse array of devices. Responsive design is a tried a true technique for delivering the optimal experience to each user regardless of their device.
    reqs:
      - req: |
          R1: All components must function properly at each of the standard breakpoints defined in the [Breakpoints component](/design/c/breakpoints/).
        type: mandatory
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          R2: All touch targets should be at least 44 x 44 pixels in size (minimum dimensions 36 x 36 pixels).
        type: mandatory
        extras:
          - name: Explanation
            content: |
              It may be difficult to implement this for inline links, which can typically be excepted from this requirement.
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

  - name: Documented
    description: |
      Components are meant to be used by numerous teams across the Pearson organization; it's important for these consumers to completely understand a component without resorting to ad hoc meetings or other private channels of communication.
    reqs:
      - req: |
          D1: A component must include a set of redlines that completely detail every aspect of the design and behavior.
        type: mandatory
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          D2: All features, configuration options, and usage guidelines for a component must be documented.
        type: mandatory
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          D3: Any changes in a new version of a component must be documented in a changelog.
        type: mandatory
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          D4: Any dependencies for a component must be listed and referenced at each place where they are used in the design.
        type: mandatory
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          D5: Each component must include a completed [UXD Accessibility Checklist](https://docs.google.com/a/pearson.com/document/d/1Hqa-p_CePJ4x7O7ALOCWM88OaeODx9dP6gEko00sdxs/edit?usp=sharing).
        type: mandatory
        approvers:
          - Isabelle Burkhart (Accessibility UX)
          - Chris Langston (Accessibility UX)

dev_reqs:
  - name: General
    reqs:
      - req: |
          G1: Components must adhere to Pearson's standard browser and device support policies. See [this Neo page for the latest standards](https://neo.pearson.com/groups/css/).
        type: mandatory
        approvers:
          - Eajaz (QA)

      - req: |
          G2: Each implementation must include a quality readme file which will help other teams install and use the component.
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
        approvers:
          - ??

      - req: |
          G3: Standalone components must use the [Component Archetype][ca] as a starting point.

          [ca]: https://github.com/Pearson-Higher-Ed/component-archetype
        type: mandatory
        extras:
          - name: Explanation
            content: |
              The scaffolding template will help the teams with sample npm scripts, live reload, CI Integration etc.
        approvers:
          - Aaron Kaka?

      - req: |
          G4: New components should not duplicate the functionality found in existing components.
        type: suggested
        extras:
          - name: Explanation
            content: |
              All teams are expected to re-use available elements and compounds in the npm registry. When developing a new component it is required to check the npm registry to ensure if a similar component already exists. If one exists it is necessary to reach out to the team and discuss potential updates to the original component before trying to create your own.

              When creating a new component it is recommended to use existing sub components and element required to create a new component. The key idea behind this is to reuse components wherever applicable.
        approvers:
          - ??

  - name: Accessibility
    description: |
      Elemental Design and the Component Library are tools meant to serve the entirety of Pearson's next gen educational ecosystem.
    reqs:
      - req: |
          A1: Rendered HTML must be comply with the HTML5 specification.
        type: mandatory
        extras:
          - name: Explanation
            content: We recommend using [this validator](#).
        approvers:
          - ??
  - name: Browser and Device Support
    description: |
      The components should adhere to pearson standard browser policy and device support. There are two levels of support: Optimized and Supported.
    reqs:
      - req: |
          R1: Optimized are those OS/Browser combinations tested and certified by QA. These will generally represent the newest versions of major OSs and Browsers.
        type: mandatory
        approvers:
          - Eajaz Ali Mahaboob Basha (QA)


      - req: |
          R2: Supported combinations will no longer be tested and certified. Any issues with supported combinations will be address as S1 and S2 issues as they arise.
        type: mandatory
        approvers:
          - Eajaz Ali Mahaboob Basha (QA)

  - name: Internationalization (i18N)
    description: |
      Internationalization is the process of designing a software application or product so that it can be adapted to various languages and regions without engineering changes.
    reqs:
      - req: |
          R1: Externalization of strings.
        type: mandatory
        approvers:
          - Deepak


      - req: |
          R2: Testing of long string when localized
        type: mandatory
        approvers:
          - Deepak      

  - name: Localization (L10n)
    description: |
      Localization is the process of adapting a product or application to a specific international language or culture so it seems natural to that particular region.
    reqs:
      - req: |
          R1: Numeric, date and time formats.
        type: mandatory
        approvers:
          - Deepak

      - req: |
          R2: Use of currency
        type: mandatory
        approvers:
          - Deepak   

      - req: |
          R2: Collation and sorting
        type: suggested
        approvers:
          - Deepak       

  - name: QA
    description: |
      All the functional automated tests for Elements SDK / Compounds SDK / Origami V2 components should be contributed to "ux-test-platform" repository, and the PR will be reviewed and merged only by PDA team
    reqs:
      - req: |
          T1: All components must have at least 80% code coverage. Component should have 100% coverage whenever possible. Eajaz to provide additional reqs.
        type: mandatory
        approvers:
          - Eajaz

      - req: |
          Tools Used: Click the following link to use the tools used for Automated testing and test scripts. 
          https://neo.pearson.com/docs/DOC-607807#jive_content_id_Tools_used
        type: optional
        approvers:
          - Eajaz
      - req: |
          How to Contribute: You can fork the repo or create a branch out of master and make your changes, create a Pull Request for your changes to merge into this Original master branch. Click the following link to see more details on how to contribute.
          https://neo.pearson.com/docs/DOC-607807#jive_content_id_How_to_contribute_to_this_repo
        type: optional
        approvers:
          - Eajaz

  - name: Conventions
    description: |
      Standards that make life easier.
    reqs:
      - req: |
          C1: Use UTF-8.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              Character encoding can cause problems, especially on sites that are predominantly in English with a few foreign characters here and there, where issues with character encoding can easily go unnoticed.

              Ensure that your pages are UTF-8 encoded, using both an HTTP response header **and** an HTML meta tag: `<meta charset="UTF-8" />`. Place this as the first tag within the `<head>` section of the page, before `<title>`, since it’s important that the browser knows the right character set to use before it gets to any content.
        approvers:
          - ??

  - name: ES6
    description: |
      The ES6 or ES2015 syntax is recommended be used to create components. should be  should not call a backend service directly to get data. The architecture is designed for the components to be loosely coupled from the service to provide highly reusable front end components. The components would need data in a certain expected format. It is the responsibility of the client application to call the service, get data and provide it to the component in the format expected.
    reqs:
      - req: |
          R1: Use ES6 to write components.
        type: suggested
        approvers:
          - ??

  - name: Security
    reqs:
      - req: |
          S1: Components must not collect data on insecure pages.
        type: mandatory
        extras:
          - name: Explanation
            content: |
              When prompting the user for personal data such as email address, username, password or payment information, always serve the page with the form on it using HTTPS, and send the form submission to an HTTPS URL.

              It’s often considered OK to serve forms on insecure pages as long as the form posts to a secure destination. This is not acceptable, because an attacker can modify the page that serves the form, to simply change the form post destination.
        approvers:
          - ??

changelog:
  - version: 1.1.0
    changes: Added development requirements
  - version: 1.0.0
    changes: Initial version

---
