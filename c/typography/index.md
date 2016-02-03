---
layout: component
title: Typography
section: Components
version: 1.0.0-beta.2
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
implementations:
  - type: Origami
    link: https://origami.pearsoned.com/registry/components/o-type
---

* TOC here
{:toc}


## Overview
<div markdown="1" class="tagline">
This component provides standard typographic styles for the platform.
</div>

<div markdown="1" class="feature_list">
- Single collection of all typographic styles
- Label styles for UI messages
- Title styles for UI headings
- Copy styles for content
- Inline styles (links, super/sub-script, etc.)
- Meets accessibility contrast requirements
</div>

<div markdown="1" class="usage">
Every instance of text should use a type style defined in this component. If you find a use case not covered by the styles here, make a request to modify this component. (Keeping all type styles in a single component makes it easy to maintain and update them.)
</div>

## Font Stacks
All textual elements use the following font stacks:

~~~
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-family: Monaco, 'Lucida Console', monospace;
~~~

## Labels
<div class="section_text" markdown="1">
Much of the typography used in a web application consists of short names, labels, or single line bits of content. For example, in Console the course tile displays information like instructor names and course dates with labels.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/label.example.png)

An example of labels in use on the Console course tile
</div>
</div>

### Size Variants
<div class="section_text" markdown="1">
There are four different sizes of label, *Basic*, *Small*, *Large*, and *Bold*:

Labels should primarily be used in single line scenarios. Make a particular effort to avoid using bold labels in a multi-line manner.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/labels.regular.png)

The four label sizes
</div>
</div>

### Color Variants
<div class="section_text" markdown="1">
Labels come in two colors, *Primary* and *Secondary*. There is an inverse palette available as well.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/labels.colors.png)

Standard colors
</div>

<div class="narrow_image" markdown="1">
![](./assets/labels.inverse.png)

Inverse colors
</div>
</div>

### Allowed Inline Elements
<div class="section_text" markdown="1">
In general, labels should not be styled beyond the basic styles listed above. If necessary, stick to the following list of inline elements.

* `<em>, <i>`
* `<a>`
* `<small>`
* `<time>`
* `<abbr>`
</div>


## Titles
<div class="section_text" markdown="1">
Titles are very similar to labels except they demarcate a logical section or container of content. In the previous example, the course name would be a title.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/title.example.png)

Example title in use on the Console course tile
</div>
</div>

### Size variants
<div class="section_text" markdown="1">
There are three different sizes of title: *Basic*, *Large*, and *Extra Large*. These sizes will automatically scale down in narrow viewports.

### Allowed Inline Elements
In general, titles should not be styled beyond the basic styles listed above. If necessary, stick to the following list of inline elements.

* `<em>, <i>`
* `<small>`
* `<time>`
* `<abbr>`
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/titles.sizes.png)

Standard title sizes, multiline versions, and the responsive sizes used when the viewport is narrower.
</div>
</div>


## Copy
<div class="section_text" markdown="1">
When you have a chunk of content to display, use one of these styles. Most regular content will use the *Basic Body* style.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/copy.basic.png)
</div>
</div>

### Lead Variant
<div class="section_text" markdown="1">
There is also a *Lead* variant which can be used for the first paragraph of a message or as part of a hero block for marketing materials.

It will automatically scale down for narrow viewports as well.

### Allowed Inline Elements
Copy is more flexible in this regard that labels or titles. You can include any of the inline elements covered by this component.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/copy.lead.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/copy.lead.narrow.png)
</div>
</div>

### Lists
<div class="section_text" markdown="1">
Both ordered and unordered lists are supported with a nesting depth of three. These should be used to present content within a copy block, not for UI elements.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/copy.lists.ordered.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/copy.lists.unordered.png)
</div>
</div>

### Code
<div class="section_text" markdown="1">
Blocks of code (typically `<pre>` tags) are styled on a dark background. (See also the inline elements `<code>` and `<kbd>`.)
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/copy.code.png)
</div>
</div>


## Headings
<div class="section_text" markdown="1">
Headings pair with [copy](#copy) styles to delineate sections within blocks of content. They should not be used for UI elements (see [titles](#titles) instead).

There are six different levels available and should be used in order.
</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/headings.png)

These headings don't change size as the viewport narrows.
</div>
</div>


## Inline Elements
<div class="section_text" markdown="1">
There are a number of inline elements which can be used to modify the other type styles (see the list of allowed inline elements for each type style).

### Basic Elements

* `<a>`
* `<em>, <i>`
* `<strong>, <b>`
* `<u>`
* `<del>, <s>`
* `<ins>`
* `<q>`
* `<sub>, <sup>`
* `<mark>`
* `<code>, <kbd>`
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/inline.1.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/inline.2.png)
</div>
</div>

### Non-visible Elements
<div class="section_text" markdown="1">
Some inline elements should be used only for semantic reasons and don't effect the visual style. These include:

* `<small>` (note: this element is used to represent side-comments and small print, including copyright and legal text, independent of its styled presentation)
* `<time>`
* `<abbr>`
</div>

## Redlines

### Labels

#### Sizes
<div class="section_text" markdown="1">

Small
: - 13px font-size
  - 15px line-height

Basic
: - 14px font-size
  - 16px line-height

Large
: - 16px font-size
  - 18px line-height

Bold
: - 14px font-size
  - 16px line-height
  - bold font-weight

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.labels.regular.png)
</div>
</div>

#### Colors
<div class="section_text" markdown="1">

Primary (Light)
: - \#231F20

Secondary (Light)
: - \#565656

Primary (Dark)
: - \#FFFFFF
  - light font-weight

Secondary (Dark)
: - \#AEAEAE
  - light font-weight

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.labels.colors.light.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/redlines.labels.colors.dark.png)
</div>
</div>

### Titles

#### Sizes
<div class="section_text" markdown="1">

Basic
: - 22px font-size
  - 28px line-height

Large
: - 24px font-size
  - 30px line-height

XL
: - 30px font-size
  - 36px line-height

At narrow viewports (< 480px):

Basic
: - 18px font-size
  - 22px line-height

Large
: - 20px font-size
  - 24px line-height

XL
: - 22px font-size
  - 28px line-height

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.titles.regular.png)
Regular title sizes
</div>

<div class="narrow_image" markdown="1">
![](./assets/redlines.titles.narrow.png)
Title sizes for narrow viewports (< 480px)
</div>
</div>

#### Color
<div class="section_text" markdown="1">
All titles are colored \#231F20.
</div>

### Copy

#### Basic Body
<div class="section_text" markdown="1">

Font
: - 16px font-size
  - 22px line-height

Color
: - \#231F20

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.body.png)
</div>
</div>


#### Lead
<div class="section_text" markdown="1">

Font
: - 20px font-size
  - 28px line-height
  - light font-weight

Color
: - \#231F20

</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/redlines.copy.lead.png)
</div>
</div>

#### Narrow lead
<div class="section_text" markdown="1">
At narrow viewports (<480px) the lead styles become:

Font
: - 18px font-size
  - 24px line-height
  - thin font-weight

Color
: - \#231F20

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.lead.narrow.png)
</div>
</div>


#### Lists
<div class="section_text" markdown="1">
These lists should be used to communicate content within a copy block, not as UI elements.

Font
: - Use the same style as Basic Body copy

Spacing
: - 12px above and below a list
  - 6px between list items

Bullets
: - Centered in a 14px box which is left aligned to the surrounding body copy
  - 4px padding separates box from list content
  - 8px left margin for child elements

Numbers
: - Right aligned in a 14px box which is left aligned to the surrounding body copy
  - If the number is too large for a 14px box, expand the box to fit
  - 4px padding separates box from list content
  - 8px left margin for child elements


Note: The expanding box behavior for ordered lists can be achieved with a `display: table` layout.

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.lists.ordered.1.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.lists.unordered.1.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.lists.ordered.2.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.lists.unordered.2.png)
</div>
</div>

#### Code
<div class="section_text" markdown="1">

Font
: - Monospace font stack
  - 14px font-size
  - 20px line-height

Color
: - \#AEAEAE
  - \#424242 background-color

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.copy.code.png)
</div>
</div>


### Headers
<div class="section_text" markdown="1">

#### Fonts
Level 1
: - 24px font-size
  - 30px line-height
  - bold font-weight
  - 2px bottom border, #A6A8AB
  - \#231F20 color

Level 2
: - 20px font-size
  - bold font-weight
  - \#231F20 color

Level 3
: - 18px font-size
  - bold font-weight
  - \#231F20 color

Level 4
: - 16px font-size
  - bold font-weight
  - \#565656 color

Level 5
: - 16px font-size
  - italic font-style
  - \#565656 color

Level 6
: - 14px font-size
  - italic font-style
  - \#565656 color


#### Spacing

Header that follows a header
: - 6px margin
  - 40px if top header is Level 1

Header that follows content
: - 20px margin

</div>

<div class="images">
<div class="wide_image" markdown="1">
![](./assets/redlines.headings.png)
</div>
</div>


### Inline Elements
<div class="section_text" markdown="1">

`<small>, <time>, <abbr>`
: - Same as the 'Basic Text' label

`<mark>`
: - \#FDEC2E background-color
  - Only use within Body Copy

`<em>, <i>`
: - italic font-style

`<strong>, <b>`
: - bold font-weight

`<del>, <s>`
: - line-through text-decoration
  - \#565656 color on light backgrounds
  - \#AEAEAE color on dark backgrounds

`<ins>`
: - underline text-decoration
  - cap with '+' symbol

`<sup>`
: - vertical-align: baseline
  - position: relative
  - top: 0.2em
  - font-size: 90%

`<sub>`
: - vertical-align: baseline
  - position: relative
  - top: -0.2em
  - font-size: 90%

`<q>`
: - cap with quotes from user's locale

`<code>, <kbd>`
: - Monospace font stack
  - \#E6E6E6 background-color
  - 4px horizontal padding

</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/redlines.inline.1.png)
</div>

<div class="narrow_image" markdown="1">
![](./assets/redlines.inline.2.png)
</div>
</div>


## Changelog

### 1.0.0-beta.2
- ADDED: Style for code blocks (e.g. `<pre>` tags)
- ADDED: Style for `<code>` and `<kbd>` inline elements
- ADDED: Heading styles
- ADDED: Styles for ordered and unordered lists within copy
- CHANGED: Redlines are now included directly in the page, rather than in a .zip file

### [1.0.0-beta.1](./v1.0.0-beta.1)
Initial version
