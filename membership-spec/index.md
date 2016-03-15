---
layout: spec
title: Library Membership Specification
section: contribute
version: 1.0.0-beta.1
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
          C2: A component must not duplicate functionality found in the following components: <a href="#">Buttons</a>, <a href="#">Breakpoints</a>, <a href="#">Colors</a>, <a href="#">Icons</a>, or <a href="#">Typography</a>.
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
              This requirement will be updated in the near future to specify that components must align with the rebranded visual aesthetic (currently in progress).
        approvers:
          - Ed Zee (UX Design)
          - Parker Malenke (UX Design)

      - req: |
          C4: A component must be versioned according to the Component Versioning Specification.
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
          UE2: Where applicable, a component’s design should reflect the [Learning Design Principles](https://neo.pearson.com/groups/learning-design-higher-education/projects/learning-design-principles)
        type: suggested
        approvers:
          - Tommy Bishop (Learning Design)

  - name: Accessible
    description: |
      WIP
    reqs:
      - req: |
          A1: All components must meet the requirements set forth in the [UXD Accessibility Checklist](https://docs.google.com/a/pearson.com/document/d/1Hqa-p_CePJ4x7O7ALOCWM88OaeODx9dP6gEko00sdxs/edit?usp=sharing).
        type: mandatory
        extras:
          - name: Explanation
            content: |
              Make sure to pay particular attention to keyboard access and color contrast.
        approvers:
          - Isabelle Burkhart (Accessibility UX)
          - Chris Langston (Accessibility UX)
          - Mallory van Achterberg-Hinkley (Accessibility Development)
          - Suzanne Taylor (Global Accessibility)

      - req: |


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

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version

---
