---
layout: article
title: Component Governance
section: contribute
---

## Review Board
Elemental Design guarantees a high level of quality for components found in the library, as detailed in the [Library Membership Specification][spec]. A user of the component library should expect any member they find to fully meet each requirement listed in the spec. In order to make this guarantee a review board exists whose responsibility it is to assess each new component for compliance. This board is composed of representatives from Product, Development/Architecture, and design perspectives. Current members include:

- Joe Macaluso <joe.macaluso@pearson.com>, Product
- Parker Malenke <parker.malenke@pearson.com>, Design
- Aamir Motiwala, Architecture

Certain spec requirements will involve delegation to domain exports. Currently this includes:

- Chris Langston, Accessibility
- Meredith Williamson, Visual Design

## Review Process
There are two checkpoints where the board reviews new or modified components. Once the component definition reaches a mature state the board will compare it with the specification for compliance. If things look good work can proceed on the component implementation. Once all the code is done a final review will ensure the end product matches the definition and continues to uphold the membership spec. If these conditions are met the component is added to the library as an official member. See the [Component Creation Guide][creation-guide] for more details.

## Submitting Components for Review
Send an email to <elemental-review@pearson.com> with a link to your component definition or implementation. If you have already worked with an accessibility professional or visual designer include their name and statement of approval. Plan on an approval taking up to 7 days.

[creation-guide]: {{site.baseurl}}/component-creation-guide
