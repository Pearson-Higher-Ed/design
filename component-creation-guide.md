---
layout: article
title: Component Creation Guide
section: contribute
order: 2
---

## Getting Started
So you've got a great idea for a new component and want to bring it to life! What's the process look like for going from initial concept to Official Elemental Design Component? There are three key steps to the process of creating a new component:

1. **Announce**  
Let everyone know your idea for a component and begin to gather feedback. This is important for reducing duplicative effort and ensuring you have all the info to make a broadly useful component.

2. **Define**  
Describe and specify your component, from general features to usage guidelines to specific colors and dimensions.

3. **Implement**  
Put your design to code and produce the final package which can be consumed by other teams.

After steps 2 and 3 you'll need to submit your work for review against the Library Membership Specification.


## Resources
There are a few key documents that will get you started down the right path when creating a new component. Take a minute to read through these and feel free to ask any questions you have on the [mailing list][ml].

**[Library Membership Specification][spec]**  
The Library Membership Specification details everything that makes a high quality component. Each component will need to fulfill the requirements listed in this document so it's a good idea to familiarize yourself with them. Approval happens in two steps, once for the component definition (where the design requirements are used) and again for the implementation (against the development requirements).

**[Component Versioning Guide][versions]**  
Your iterations should also follow the standard versioning scheme. This can be helpful for managing communication as you make improvements to your design as well as keeping track of any dependencies your component has.

## 1. Announce
Once you have a handle on the Elemental Design infrastructure the next step is to share your idea with the community and gather feedback. This helps maximize usefulness of the final component and can uncover speed bumps early in the process. Suggested topics include:

- Proposed component name
- List of general problems the component is meant to solve
- Description of the specific problem your team is trying to solve
- Example use cases from across the platform
- Any existing components which might be similar, perhaps a discussion on why a wholly new one is needed
- Illustrative wireframes, if you have them
- Any pitfalls or problems you can foresee
- List of teams that will function as stakeholders, dependencies, etc.

Your goals for the discussion should include:

- Identifying key stakeholders and partners
- Finding other teams who might consume the new component
- Learning more about any potential constraints you’ll need to design around
- Identifying any dependencies you might have on other teams

Begin the discussion by posting a [new thread in the Component Proposals category][ml-proposal] of the mailing list.

[ml-proposal]: https://groups.google.com/a/pearson.com/forum/#!categories/elemental-discuss/component-proposals


## 2. Define
Now you should have a pretty good handle on your idea, how it might work across the platform, and maybe a list of partner teams. Or your discussion may cause you to pivot your idea from a brand new component into an enhancement to an existing component. Or maybe you join forces with another team that's already building something that will solve your problem. And that's perfectly fine. Ideally, the component library will consist of a lean set of just enough components to solve the use cases of the platform. Sometimes that means a new component, sometimes it doesn't.

In the case that you proceed with a new component the next step is to begin designing and defining it. Your output at this stage is a component definition which will detail the features, usage, design, and behavior of your idea. Review the existing component documentation for examples of good definitions.

Design documentation is currently hosted in this [Github Pages repository][d-repo]. Follow the readme file to get started with your own component definition page. (We're planning to add a guide dedicated to this topic in the future.)

As you work on coalescing your idea you should publish your project to the mailing list and use version numbers (with the 'beta' modifier) to track progress. This allows interested parties to track your progress and provide feedback as you work.

[d-repo]: https://github.com/Pearson-Higher-Ed/design/

### Definition Approval
Once your definition reaches a final state you'll need to submit it to the review board to check compliance with the [Design Requirements][design-reqs] from the membership specification. If everything in the spec is satisfied you'll get a greenlight and can proceed to implementing your design. If anything doesn't quite line up the approvers will work with you to bring your component into alignment with the spec.

Submit a definition for review by sending an email to <elemental-review@pearson.com>. Make sure to include a link to your work and a copy of the [approval checklist][checklist] (choose File > Make a copy).

[checklist]: https://docs.google.com/a/pearson.com/spreadsheets/d/19dLruCBCAX7HlZdNcOrATrAWp4tdPuiYOwQzQ3hUA60/edit?usp=sharing


## 3. Implement
Once your definition is approved you can begin building out the implementation. <s>Currently this should be done in accordance with Origami principles, but in the future there may be other implementation methods (e.g. Angular or React).</s> Development specs and standards are currently being created.

### Implementation Approval
Last step! Once you've built a functional version of your component you can submit it for final review by the board (simply email <elemental-review@pearson.com> again). At this point they will just ensure the final product matches your definition and continues to fulfill the membership specification. If everything looks good the component will be added to the library and you're all set! If there are any issues the approvers will again work with you to bring things in line with the spec.

## Component Maintenance
Your component is now complete and in the library, although you will probably want to add new features over time and find bugs you want to fix. Make sure to follow the component versioning guide as you make changes and continue to publish beta iterations to the mailing list.

Note that you'll need to resubmit any modifications to the review board if you add new features or make breaking changes (anything that increments the Major or Minor version numbers) but bug fixes can be pushed through without review.

See [Modifying and Updating Components][updates] for more information.


[versions]: {{site.baseurl}}/component-versioning
[spec]: {{site.baseurl}}/membership-spec
[design-reqs]: {{site.baseurl}}/membership-spec/beta#design-requirements
[ml]: https://groups.google.com/a/pearson.com/forum/#!forum/elemental-discuss
[updates]: {{site.baseurl}}/component-modification-guide
