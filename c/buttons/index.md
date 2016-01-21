---
layout: component
title: Buttons
section: Components
redirect_from: "/docs/ui-components/buttons/"
version: 1.0.1
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
  - role: QA
    name: Eajaz
implementations:
  - type: Origami
    link: https://origami.pearsoned.com/registry/components/o-buttons
---

* TOC here
{:toc}


## Overview
<div markdown="1" class="tagline">
This component defines the standard visual style for buttons.
</div>

<div markdown="1" class="feature_list">
- Single collection of all button styles
- Multiple button types including Primary, Default, and Link
- Small, Default, and Large button sizes
- Guaranteed compliance with Accessibility contrast requirements
</div>

<div markdown="1" class="usage">
Every instance of a button or button styled link should come from this component. See the sections below for information about when to ease each type of button.
</div>

## Button Types

<div class="section_text" markdown="1">
Buttons come in several different types. Each defines a normal, active/hover, and disabled state.

**Primary** indicates the main call to action and should only appear once per group of buttons.

**Default** is your basic button, it can appear multiple times in a given group.

**Link** indicates reduced importance of the option. ('Cancel' options should typically use this style, for example.)
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/illustration.png)
Each of the three button types in their various states.
</div>
</div>

## Button sizes
<div class="section_text" markdown="1">
Buttons come in small, default, and large sizes. Prefer the default size but feel free to use these other sizes where they would fit better with surrounding content.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/sizes.png)
Each button type in the two alternative sizes.
</div>
</div>




## Redlines
<div class="section_text" markdown="1">
Specifications for the primary button type.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/redlines.primary.png)
</div>
</div>

<div class="section_text" markdown="1">
Default buttons.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/redlines.default.png)
</div>
</div>

<div class="section_text" markdown="1">
Link style buttons.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/redlines.link.png)
</div>
</div>

<div class="section_text" markdown="1">
Sizing specifications. (See the primary button specifications for the standard button size.)
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.sizes.png)
</div>
</div>

## Changelog

### 1.0.1
- TWEAKED: Font color on disabled secondary button to be more consistent with Colors component.
- TWEAKED: Inner shadow in active/hover secondary button to more subtle.

### 1.0.0
Initial release
