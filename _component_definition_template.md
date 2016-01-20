---
# Core keys to display correctly
layout: component
section: Components

# Name the component (this is displayed as the title)
title: Inputs

# Status of the component (e.g. experimental, deprecated, etc.)
status: active

# Version (follow the component versioning guide)
version: 1.0.0-beta.1

# List the people involved
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: ed.zee@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

# Links to any implementations of the component
implementations:
  - type: origami
    link: https://origami.pearsoned.com/registry/components/o-app-header

# Any downloads available
downloads:
  - name: .sketch mockup
    link: ./assets/o-app-header.sketch
---

<!-- Include the following two lines to include the table of contents -->
* TOC here
{:toc}

<!-- Begin with H2 level tags, the template will automatically include an H1
     based on the YAML title -->
## Overview
<div markdown="1" class="tagline">
All component should include a brief tagline section.
</div>

<div markdown="1" class="description">
An optional description may follow the tagline. This is an opportunity to go
into more depth on features, etc. of the component.
</div>

<div markdown="1" class="feature_list">
- All components should also list their key Features
- With a list like this
</div>

<aside class="usage" markdown="1">
General usage guidelines should also be specified at the top level.
</aside>


## Each section should be an H2
<div class="section_text" markdown="1">
Section text appears on the left side and introduces a feature.
</div>

<!-- An images block follows the section_text and can include wide or narrow
     images. Wide images should be 920px side, narrow ones 450px. -->
<div class="images">
<div class="wide_image" markdown="1">
![](./assets/wide.png)

Optional caption for the image
</div>

<div class="narrow_image" markdown="1">
![](./assets/narrow.png)

Optional caption for the image
</div>
</div>

## Large section_text
<div class="section_text large" markdown="1">
The 'large' class can be used to make a section_text span more of the column.
This is for sections which don't contain any images.
</div>


## Color swatches

<!-- Color swatches should typically only appear in the colors component. -->
<div class="color_swatches" markdown="1">
### Foreground Colors

| Pitch          | `#231F20` | ![](http://dummyimage.com/200x40/231F20/231F20) |
| Gray No. 1     | `#565656` | ![](http://dummyimage.com/200x40/565656/565656) |
| Royal Navy     | `#094877` | ![](http://dummyimage.com/200x40/094877/094877) |
| Hyperdrive     | `#0D65A6` | ![](http://dummyimage.com/200x40/0D65A6/0D65A6) |

</div>
