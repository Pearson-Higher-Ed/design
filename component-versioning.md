---
layout: article
title: Component Versioning
section: contribute
---

Most aspects of Elemental Design are given version numbers in order to clearly communicate changes and support dependencies between components.

## Anatomy of a Version Number
Version numbers follow a specific scheme which can inform you about the differences between two difference versions. All versions include three numbers, each separated by a period like so:

`[Major].[Minor].[Patch]`

When components are in development or being submitted for review there are a few modifiers which can be added after a hyphen:

`1.0.0-[Modifier].[Counter]`

In general, versions must follow these conventions:

- **Major** numbers increment each time there is a breaking change (defined below)
- **Minor** numbers increment when a non-breaking feature is added
- **Patch** numbers increment when a non-breaking bug fix occurs
- **Modifiers** may be either 'beta' or 'rc' and indicate in-progress work
- **Counter** numbers increment each time a change is made to in-progress work

## How to Version a Component

1. A brand new component will start with version 1.0.0-beta.1
2. As you work on the component, increment the counter with each change (e.g. 1.0.0-beta.2, 1.0.0-beta.3, etc.)
3. Once you are ready to submit the component for review use the rc (for 'release candidate') modifier and reset the counter: 1.0.0-rc.1
4. If you need to make changes at this point increment the counter (1.0.0-rc.2, 1.0.0-rc.3, etc.)
5. Once the component has been added to the library remove all modifiers: 1.0.0
6. Any changes that solely fix bugs increment the patch number: 1.0.1, 1.0.2, etc.
7. Any backwards compatible changes that add new functionality increments the minor number: 1.1.0, 1.2.0, etc.
8. Any backwards incompatible or breaking changes increments the major number: 2.0.0, 3.0.0, etc.
9. Use modifiers again as you make improvements to the component (e.g. 1.2.1-beta.2 or 2.0.0-rc.1)

## What is a Breaking Change? (Backwards Incompatibility)
Any alteration to a component which would require a consumer to make a corresponding modification is considered a 'breaking change'. Here are a few examples:

- Changing the size or shape of a component may require a consumer to update their layout to accommodate. For example, increasing the size of a standard button.
- Changing the font of a component may require other text on the page to be updated. For example, changing the heading font from a serif to a sans serif style.

It's not always clear what changes should be considered breaking, therefore it's a good idea to share proposed changes through the 'beta' and 'rc' modifiers before final publication. When in doubt it's better to stay conservative and declare the change as breaking.

## What Else is Versioned?
Component Definitions are the primary target of versioning within Elemental Design, although several other items also use versions for greater clarity:

- Most notably, the [Library Membership Specification]({{site.baseurl}}/membership-spec) is versioned which makes it easy to tell what components support which version of the specification.
- Component Implementations are also versioned, although their version schemes may differ depending on the method of implementation (e.g. Origami or Angular variants).
