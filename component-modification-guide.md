---
layout: article
title: Modifying and Updating Components
section: contribute
---

Each component is designed to be useful and high quality from the beginning, but the nature of software these days is to always change and evolve. Elemental Design understands this and includes several features to make updates easy, for both creators and consumers.

One of the key tools in managing change is the [Component Versioning system][versions]. This enables clear communication about the type and extent of a change and allows component consumers to choose an update rate that works for them. Modifications are classified as:

- 'Major' (large, breaking changes)
- 'Minor' (small to large but non breaking changes)
- 'Patch' (bug fixes, no change in functionality).

## Suggesting changes to a component
If you're using another team's component and have an idea for a change the first step is to suggest the change by posting in the ['Specific Components' section of the mailing list][specific-components] (make sure to include the component name in the subject). Someone from the owning team will respond and give feedback on your idea. Your discussion should try to answer the following questions:

- Is there a reason why the component wasn't like this from the beginning?
- How would the change affect current users of the component?
- Is the proposed change compliant with the [Component Spec][spec]?

Once a change is determined the final question is who will design and build the modification. The owning team can, of course, implement the change directly but it's also possible for any other group to contribute through the pull request process. Usually this comes down to which team has the available bandwidth.

## Updating and maintaining your own component
The process of changing a component is essentially the same if your team owns the components. You should still post your proposed updates to the [mailing list][specific-components] and gather feedback before submitting your changes for review.

## Submitting updates for review
Any Major or Minor version change will need to be reviewed against the [Component Spec][spec]. This is essentially the same as [submitting a new component][creation]. First, create a Component Definition with the changes and submit for review (email <elemental-review@pearson.com> with your work). Once that's approved go ahead and implement the new design and submit the code for final review (send another email to the elemental-review alias). Don't forgot to keep the community informed with beta updates to the mailing list.


Note that if you are simply fixing bugs or making another change that doesn't change the functionality in any way you don't need to go through the review process.



[versions]: {{site.baseurl}}/component-versioning
[specific-components]: https://groups.google.com/a/pearson.com/forum/#!categories/elemental-discuss/component-discussion
[spec]: {{site.baseurl}}/membership-spec
[creation]: {{site.baseurl}}/component-creation-guide
