---
layout: default
title: Component Creation Guide
---

# Component Creation Guide

* TOC here
{:toc}

## Getting Started
So you've got a great idea for a new component and want to bring it to life! What's the process look like for going from initial concept to Official Elemental Design Component? There are a few steps to follow that will help you build a quality component and add it to the official library. The short version is:

Announce &rarr; Define &rarr; Implement &rarr; Done!

Read on for a more in-depth discussion. There are a couple of checkpoints as well that help guarantee overall component quality.


## 1. Orient Yourself
There are a few key documents that will get your started down the right path when creating a new component. Take a minute to read through these and feel free to ask any questions you have on the [mailing list][ml].

### Library Membership Specification
The [Library Membership Specification][spec] details everything that makes a high quality component. Every component will need to fulfill the requirements listed in this document so it's a good idea to familiarize yourself with them.

### Component Versioning Guide
Your iterations should also follow the [standard versioning scheme][versions]. This can be helpful for managing communication as you make improvements to your design as well as keeping track of any dependencies your component has.

### Component Definition Guide
Forthcoming

### Elemental Design Theory
Forthcoming


## 2. Discuss Your Idea
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


## 3. Start Defining Your Component
Now you should have a pretty good handle on your idea, how it might work across the platform, and maybe a list of partner teams. Or your discussion may cause you to pivot your idea from a brand new component into an enhancement to an existing component. Or maybe you join forces with another team that's already building something that will solve your problem. And that's perfectly fine. Ideally, the component library will consist of a lean set of just enough components to solve the use cases of the platform. Sometimes that means a new component, sometimes it doesn't.

In the case that you proceed with a new component the next step is to begin designing and defining it. Your output at this stage is a component definition which will detail the features, usage, design, and behavior of your idea. Check out the [Component Definition Guide][def-guide] to learn about what makes a good definition.

As you work on coalescing your idea you should publish your project to the mailing list and use version numbers (with the 'beta' modifier) to track progress. This allows interested parties to track your progress and provide feedback as you work.


## 4. Submit Definition for Review
Once your definition reaches a final state you'll need to submit it to the review board to check compliance with the membership specification. If everything in the spec is satisfied you'll get a greenlight and can proceed to step 5. If anything doesn't quite line up the board will work with you to bring your component into alignment with the spec.


## 5. Implement Your Component
Once your definition is approved you can begin building out the implementation. Currently this should be done in accordance with Origami principles, but in the future there may be other implementation methods (e.g. Angular or React).

## 6. Submit Your Implementation for Review
Last step! Once you've built a functional version of your component you can submit it for final review by the board. At this point they will just ensure the final product matches your definition and continues to fulfill the membership specification. If everything looks good the component will be added to the library and you're all set! If there any issues the board will again work with you to bring things in line with the spec.

## (7. Maintain and Update Your Component)
Your component is now complete and in the library, although you will probably want to add new features over time and find bugs you want to fix. Make sure to follow the component versioning guide as you make changes and continue to publish beta iterations to the mailing list.

Note that you'll need to resubmit any modifications to the review board if you add new features or make breaking changes (anything that increments the Major or Minor version numbers) but bug fixes can be pushed through without review.


[versions]: {{site.baseurl}}/component-versioning
[spec]: {{site.baseurl}}/membership-spec
