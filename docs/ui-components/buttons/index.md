---
layout: component
title: Buttons
section: Components
permalink: /docs/ui-components/buttons/
version: 1.0
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
    name: Eajez
implementations:
  - type: Origami
    link: https://origami.pearsoned.com/registry/components/o-buttons
  - type: Angular
    link: https://origami.pearsoned.com/registry/components/o-buttons
downloads:
  - name: .sketch mockup
    link: ./assets/o-app-header.sketch
  - name: .ai mockup
    link: \#
---

* TOC here
{:toc}


## Overview
<div markdown="1" class="tagline">
This component defines the standard visual style for buttons.
</div>

<div markdown="1" class="description">
The header can be presented in four different modes depending on the context it’s in. A user’s first interaction with the header will likely be the Signed Out Mode which displays only the most basic information (usually including a sign in link). After signing in the Basic Mode represents the ‘default’ header, offering functionality such as account management and sign out. Once the user launches a specific course the Course Mode adds a few features, most notably local navigation for mobile breakpoints. In situations where the user’s session is managed by a third party (for example 3PL/LMS integration) the Integration Mode will remove distracting/irrelevant navigation options.
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

## Stand Alone Articles

<div class="section_text" markdown="1">
Buttons come in several different types. Each defines a normal, active/hover, and disabled state.

**Primary** indicates the main call to action and should only appear once per group of buttons.

**Default** is your basic button, it can appear multiple times in a given group.

**Link** indicates reduced importance of the option. ('Cancel' options should typically use this style, for example.)
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/illustration.png)
Here is an illustration of a lemon.

But you really wanted an orange, I know.
</div>

<div class="narrow_image" markdown="1">
![](./assets/sizes.png)
Here is an illustration of a lemon.

But you really wanted an orange, I know.
</div>

<div class="wide_image" markdown="1">
![](./assets/illustration.png)
Here is another duplicate!
</div>
</div>

## Button sizes
<div class="section_text" markdown="1">
Buttons come in small, default, and large sizes. Prefer the default size but feel free to use these other sizes where they would fit better with surrounding content.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/illustration.png)
Here is another duplicate!
</div>

<div class="narrow_image" markdown="1">
![](./assets/sizes.png)
Here is an illustration of a lemon.

But you really wanted an orange, I know.
</div>

<div class="narrow_image" markdown="1">
![](./assets/sizes.png)
Here is another duplicate!
</div>

<div class="wide_image" markdown="1">
![](./assets/illustration.png)
Here is another duplicate!
</div>
</div>




## Redlines
[Download the redline specification here](./assets/redlines.png)
