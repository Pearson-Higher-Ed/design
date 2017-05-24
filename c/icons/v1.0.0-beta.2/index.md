---
layout: component-yaml
title: Icons
section: Components
version: 1.0.0-beta.2
status: deprecated
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
implementations:
  - type: Origami
    link: https://origami.pearsoned.com/registry/components/o-buttons
---

* TOC here
{:toc}


## Overview
<div markdown="1" class="tagline">
Provides a standard set of icons at various sizes.
</div>

<div markdown="1" class="feature_list">
- Single collection of all icons
- Consistent guidelines for sizing and positioning
</div>

<div markdown="1" class="usage">
All icons should come from this component.
</div>

## Available Icons
<div class="section_text" markdown="1">
Icons come from font-awesome and are currently limited to the following set:

- check
- times
- times-circle
- trash-o
- chevron-down
- chevron-up
- chevron-right
- chevron-left
- thumb-tack
- cog
- envelope
- search
- plus-circle
- calendar
- file-o
- info-circle
- users
- user

</div>


<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/icons.png)
The current icon repertoire.
</div>
</div>


## Icon Sizing
<div class="section_text" markdown="1">
Since we're using an icon font each symbol will just inherit the font-size of the surrounding type.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/icons.sizes.png)
Icons adopting the sizes of their containing type elements.
</div>
</div>

## Redlines
<div class="section_text" markdown="1">
Just use the specified glyphs from Font Awesome and inherit the font-size of the surrounding text.

A lone symbol should still be wrapped in the relevant type style (e.g. Basic Label).
</div>

## Changelog

### 1.0.0-beta.2
- ADDED: Additional icons, including user, calendar, info-circle, and file-o.

### [1.0.0-beta.1](./v1.0.0-beta.1)
Initial release
