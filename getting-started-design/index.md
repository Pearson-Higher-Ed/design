---
layout: article
title: Designer Guide
section: use
order: 1
in_footer: true
---

Elemental Design makes it easy for your designs to maintain consistency with the broader product ecosystem and frees you up to focus on solving unique challenges. Leveraging existing work in components is pretty straightforward:

## 1. Identify Components
First you'll want to find components that would be helpful. There are a number of basic components which nearly any project will find useful:

- [Typography]({{site.baseurl}}/c/typography)
- [Buttons]({{site.baseurl}}/c/buttons)
- [Icons]({{site.baseurl}}/c/icons)
- [Breakpoints]({{site.baseurl}}/c/breakpoints)
- [Colors]({{site.baseurl}}/c/colors)

Peruse [the component library]({{site.baseurl}}/#library) to see all your options.

## 2. Design with Components
Once you find a useful component you can start using it in your designs. Reading through the documentation will help you understand the available capabilities and any best practices.

At a minimum, every component will include a complete set of redlines that detail the exact sizing, colors, behavior, etc. You can use this documentation to incorporate a component into your wireframes and mockups. Many components will also include a pre-built mockup for popular programs like Sketch or Adobe Illustrator. These make it easy to just copy and paste directly into your designs.

If you have any questions, either about the process or a specific component, the [mailing list][ml] is a great place to get help.

[ml]: https://groups.google.com/a/pearson.com/forum/#!forum/elemental-discuss/categories

### Craft Library
For designers using Sketch, the [Craft plugin](https://www.invisionapp.com/craft) from Invision makes it easy to include components in your designs. Watch the video below for an overview of how to install Craft and get started using components today:

<div class="video-wrapper">
  <iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/sb5ZeKJaCVU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

## 3. Working With Development
Each component includes a pre-built package of code that makes it easy for developers to incorporate the design into the final product. This also simplifies communication about the design details; you don't have to redline your use of a component, simply note which component it is. For example, you can just point out that a button is [a Large Default button][lg-btn], rather than indicating its exact size and color.

[lg-btn]: {{site.baseurl}}/c/buttons/#button-sizes


## Contributing

### Creating a New Component
Sometimes you'll have some unit of functionality that would make sense as a component, but it doesn't exist in the library yet. Elemental Design is a living, growing creature and is designed to accept contributions from the community. Read the [Component Creation Guide][creation] to learn more about this process.

[creation]: {{site.baseurl}}/component-creation-guide


### Modifying a Component
If a component already exists but you have an idea for an improvement you can [read this guide][modify-update] to learn about proposing and implementing modifications.

[modify-update]: {{site.baseurl}}/component-modification-guide
