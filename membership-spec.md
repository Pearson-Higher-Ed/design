---
layout: default
title: Library Membership Specification
---
# Library Membership Specification
Version 0.1.0

All components listed in the Component Library must satisfy all the requirements contained in this document. To learn about submitting components for inclusion see the [Component Creation Guide][creation-guide].

*The keywords 'must', 'must not', 'required', 'shall', 'shall not', 'should', 'should not', 'recommended', 'may', and 'optional' have specific meanings as defined in [RFC 2110][rfc].*

*The key principles are:*

- *A component that doesn't meet a 'must' requirement will be excluded out of hand, no exceptions*
- *A component may violate a requirement qualified with 'should' provided it has good reasons to do so*


## Generality

<aside>Elemental Design and the Component Library are tools mean to serve the entirety of Pearson's next gen educational ecosystem.</aside>

G1: Components must reflect the needs of Pearson as a whole rather than just the needs of one product.


## Consistency

<aside>One of the main goals of Elemental Design, components should enable a variety of teams to work on different aspects of the Pearson ecosystem while still producing a consistent, coherent, and accessible experience.</aside>

C1: A component should not duplicate functionality found in an existing component, either in whole or in part.

C2: A component must not duplicate functionality found in the following components:

- Colors
- Typography
- Buttons
- More tbd

C3: A component must reflect the design principles and aesthetics defined in the Elemental Design Theory document at the time the component is approved for library membership.

C4: A component must be versioned according to the Component Versioning Specification.

C5: Components should keep configuration options to the minimum possible.

C6: Components must support the following browsers:

- TBD


## Usability and Efficacy

<aside>Not only should our designs present a consistent and pleasing interface, but an intuitive and understandable one as well.</aside>

UE1: A component should be validated with user feedback.

UE2: A component’s design should reflect the Learning Design Principles.


## Quality

<aside>Consumers of the library must be able to trust and depend on the quality and out-of-the-box usefulness of the member components. This means delivering on the details of the component definition and including standard features like responsive design.</aside>

Q1: A component must provide at least one implementation which completely matches the design definition.

Q2: A component must support all device size breakpoints listed in the o-breakpoints component.


## Accessibility

<aside>WIP</aside>
A1: All components must meet the Pearson Accessibility Guidelines. (Doing so also satisfies Section 508 and WCAG 2.0 requirements).

A2: All components must be reviewed and approved by a trained accessibility representative. See here for details on how to get your component reviewed.


## Internationalization

<aside>WIP</aside>

- RTL (text and visual)
- Short, Tall, Dense languages
- Allow for text expansion (up to 30% longer than english?)
- Multi-byte enabled
- Cut and paste text with special characters
- Verify opening/closing files with special characters works
- Be aware of text contraction in Chinese etc.
- Shortcut combos work from international keyboards
- Icons should be globally applicable
- Images shouldn’t contain text
- Be aware of local phrasings/idioms (e.g. references to time)
- Work with input method editors (IME) for different languages (virtual keyboards etc.)
- Support different calendars, dates, and time formats
- Number formats, currencies, weights, and measurement systems
- International paper sizes
- Address formats
- Language should be user selectable

[creation-guide]: #
[rfc]: http://www.ietf.org/rfc/rfc2119.txt
