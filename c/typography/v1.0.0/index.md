---
layout: component-yaml
title: Typography
section: Components
version: 1.0.0
status: deprecated
implemented: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
implementation: https://pearson-elements-v0.surge.sh/elements/typography/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1xE22tRE0aRGqqM8PGEJ-5MVClo8gTqr1nf2fy_VcFl0/edit?usp=sharing
  - name: Sketch
    link: ./assets/typography.mockup.sketch
  - name: Illustrator
    link: ./assets/typography.mockup.ai

tagline: This component provides standard typographic styles for the platform.
features:
  - Single collection of all typographic styles
  - Label styles for UI messages
  - Title styles for UI headings
  - Copy styles for content
  - Inline styles (links, super/sub-script, etc.)
  - Meets accessibility contrast requirements
usage_guidelines: |
  Every instance of text should use a type style defined in this component. If you find a use case not covered by the styles here, make a request to modify this component. (Keeping all type styles in a single component makes it easy to maintain and update them.)

dependencies:
  - name: Colors
    version: 1.0.1
  - name: Breakpoints
    version: 1.0.0

blocks:
  - type: section
    name: Font Stacks

  - type: two column
    text: |
      All textual elements use the following font stacks:
    contents:
      - type: code
        content: |
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-family: Monaco, 'Lucida Console', monospace;

  - type: section
    name: Labels

  - type: two column
    text: |
      Much of the typography used in a web application consists of short names, labels, or single line bits of content. For example, in Console the course tile displays information like instructor names and course dates with labels.
    contents:
      - type: wide image
        src: ./assets/label.example.png
        caption: An example of labels in use on the Console course tile

  - type: two column
    text: |
      ### Size Variants
      There are four different sizes of label, *Basic*, *Small*, *Large*, and *Bold*:

      Labels should primarily be used in single line scenarios. Make a particular effort to avoid using bold labels in a multi-line manner.
    contents:
      - type: narrow image
        src: ./assets/labels.regular.png
        caption: The four label sizes

  - type: two column
    text: |
      ### Color Variants
      Labels come in two colors, *Primary* and *Secondary*. There is an inverse palette available as well.
    contents:
      - type: narrow image
        src: ./assets/labels.colors.png
        caption: Standard colors
      - type: narrow image
        src: ./assets/labels.inverse.png
        caption: Inverse colors
      - type: wide image
        src: ./assets/labels.inverse.png
        caption: Inverse colors
      - type: narrow image
        src: ./assets/labels.inverse.png
        caption: Inverse colors
      - type: narrow image
        src: ./assets/labels.inverse.png
        caption: Inverse colors

  - type: two column
    text: |
      ### Allowed Inline Elements
      In general, labels should not be styled beyond the basic styles listed above. If necessary, stick to the following list of inline elements.

      * `<em>, <i>`
      * `<a>`
      * `<small>`
      * `<time>`
      * `<abbr>`

  - type: section
    name: Titles

  - type: two column
    text: |
      Titles are very similar to labels except they demarcate a logical section or container of content. In the previous example, the course name would be a title.
    contents:
      - type: wide image
        src: ./assets/title.example.png
        caption: Standard colors

  - type: two column
    text: |
      ### Size Variants
      There are three different sizes of title: *Basic*, *Large*, and *Extra Large*. These sizes will automatically scale down in narrow viewports.
    contents:
      - type: wide image
        src: ./assets/titles.sizes.png
        caption: |
          Standard title sizes, multiline versions, and the responsive sizes used when the viewport is narrower.

  - type: two column
    text: |
      ### Allowed Inline Elements
      In general, titles should not be styled beyond the basic styles listed above. If necessary, stick to the following list of inline elements.

      * `<em>, <i>`
      * `<small>`
      * `<time>`
      * `<abbr>`





  - type: section
    name: Copy

  - type: two column
    text: |
      When you have a chunk of content to display, use one of these styles.

  - type: two column
    text: |
      ### Basic Body
      Most regular content will use the *Basic Body* style.

      #### Small variant
      There is a smaller variant available which should be used when the line length is shorter.
    contents:
      - type: narrow image
        src: ./assets/copy.basic.png
      - type: narrow image
        src: ./assets/copy.small.png

  - type: two column
    text: |
      ### Lead Variant
      There is also a *Lead* variant which can be used for the first paragraph of a message or as part of a hero block for marketing materials.

      It will automatically scale down for narrow viewports as well.
    contents:
      - type: wide image
        src: ./assets/copy.lead.png
      - type: narrow image
        src: ./assets/copy.lead.narrow.png

  - type: two column
    text: |
      ### Lists
      Both ordered and unordered lists are supported with a nesting depth of three. These should be used to present content within a copy block, not for UI elements.
    contents:
      - type: narrow image
        src: ./assets/copy.lists.ordered.png
      - type: narrow image
        src: ./assets/copy.lists.unordered.png

  - type: two column
    text: |
      ### Code
      Blocks of code (typically `<pre>` tags) are styled on a dark background. (See also the inline elements `<code>` and `<kbd>`.)
    contents:
      - type: narrow image
        src: ./assets/copy.code.png

  - type: two column
    text: |
      ### Allowed Inline Elements
      Copy is more flexible in this regard that labels or titles. You can include any of the inline elements covered by this component.

  - type: section
    name: Headings

  - type: two column
    text: |
      Headings pair with [copy](#copy) styles to delineate sections within blocks of content. They should not be used for UI elements (see [titles](#titles) instead).

      There are six different levels available and should be used in order.
    contents:
      - type: wide image
        src: ./assets/headings.png
        caption: These headings don't change size as the viewport narrows.

  - type: section
    name: Inline Elements

  - type: two column
    text: |
      There are a number of inline elements which can be used to modify the other type styles (see the list of allowed inline elements for each type style).

  - type: two column
    text: |
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
    contents:
      - type: narrow image
        src: ./assets/inline.1.png
      - type: narrow image
        src: ./assets/inline.2.png

  - type: two column
    text: |
      ### Non-visible Elements
      Some inline elements should be used only for semantic reasons and don't effect the visual style. These include:

      * `<small>` (note: this element is used to represent side-comments and small print, including copyright and legal text, independent of its styled presentation)
      * `<time>`
      * `<abbr>`

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Labels

  - type: two column
    text: |
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
    contents:
      - type: narrow image
        src: ./assets/redlines.labels.regular.png
    exports:
      - Basic Label
      - Small Label
      - Large Label
      - Bold Label

  - type: style table
    styles:
      - Basic Label
      - Small Label
      - Large Label
      - Bold Label

  - type: two column
    text: |
      #### Colors
      Primary (Light)
      : - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)

      Secondary (Light)
      : - [Gray No. 1 (#565656)](/design/c/colors/v1.0.1/#rd-gray-no-1-565656)

      Primary (Dark)
      : - [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - light font-weight

      Secondary (Dark)
      : - [Gray Wash (#AEAEAE)](/design/c/colors/v1.0.1/#rd-gray-wash-aeaeae)
        - light font-weight
    contents:
      - type: narrow image
        src: ./assets/redlines.labels.colors.light.png
      - type: narrow image
        src: ./assets/redlines.labels.colors.dark.png
    exports:
      - Primary Label Color
      - Secondary Label Color
      - Inverse Primary Label Color
      - Inverse Secondary Label Color

  - type: style table
    styles:
      - Primary Label Color
      - Secondary Label Color
      - Inverse Primary Label Color
      - Inverse Secondary Label Color

  - type: two column
    text: |
      ### Titles
    exports:
      - Basic Title
      - Large Title
      - XL Title

  - type: two column
    text: |
      #### Sizes
      Basic
      : - 22px font-size
        - 28px line-height

      Large
      : - 24px font-size
        - 30px line-height

      XL
      : - 30px font-size
        - 36px line-height

      At [extra small](/design/c/breakpoints/v1.0.0/#rd-extra-small) viewports:

      Basic
      : - 18px font-size
        - 22px line-height

      Large
      : - 20px font-size
        - 24px line-height

      XL
      : - 22px font-size
        - 28px line-height

      #### Color
      All titles are colored [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20).
    contents:
      - type: narrow image
        src: ./assets/redlines.titles.regular.png
        caption: Regular title sizes
      - type: narrow image
        src: ./assets/redlines.titles.narrow.png
        caption: Title sizes for narrow viewports (< 480px)

  - type: style table
    styles:
      - Basic Title
      - Large Title
      - XL Title

  - type: two column
    text: |
      ### Copy

  - type: two column
    text: |
      #### Basic Body
      Font
      : - 16px font-size
        - 22px line-height

      Color
      : - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)

      Margins:
      : - Adjacent paragraphs are separated by 12px
        - Leave top/bottom padding for a block of `p` tags up to the consumer

      ##### Small Size
      Font
      : - 14px font-size
        - 20px line-height
    contents:
      - type: narrow image
        src: ./assets/redlines.copy.body.png
        caption: Standard body copy
      - type: narrow image
        src: ./assets/redlines.copy.body.small.png
        caption: Smaller body copy used for narrower line length
    exports:
      - Basic Body
      - Small Body

  - type: two column
    text: |
      #### Lead
      Font
      : - 20px font-size
        - 28px line-height
        - light font-weight

      Color
      : - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)
    contents:
      - type: wide image
        src: ./assets/redlines.copy.lead.png
    exports:
      - Lead

  - type: two column
    text: |
      ##### Narrow Lead
      At [extra small](/design/c/breakpoints/v1.0.0/#rd-extra-small) viewports the lead styles become:

      Font
      : - 18px font-size
        - 24px line-height
        - thin font-weight

      Color
      : - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)
    contents:
      - type: narrow image
        src: ./assets/redlines.copy.lead.narrow.png

  - type: two column
    text: |
      #### Lists
      These lists should be used to communicate content within a copy block, not as UI elements.

      Font
      : - Inherit the containing body copy

      Spacing
      : - 12px above and below a list
        - 6px between list items
        - Lists that immediately follow a header should contribute no top margin

      Padding
      : - The first level of a list has 26px of left padding
        - Sublists have 20px of padding
    contents:
      - type: narrow image
        src: ./assets/redlines.copy.lists.ordered.png
      - type: narrow image
        src: ./assets/redlines.copy.lists.unordered.png
    exports:
      - Ordered List
      - Unordered List

  - type: two column
    text: |
      #### Code
      Font
      : - Monospace font stack
        - 14px font-size
        - 20px line-height

      Color
      : - [Gray Wash (#AEAEAE)](/design/c/colors/v1.0.1/#rd-gray-wash-aeaeae)
        - [Full Moon (#424242)](/design/c/colors/v1.0.1/#rd-full-moon-424242) background-color
    contents:
      - type: narrow image
        src: ./assets/redlines.copy.code.png
    exports:
      - Code

  - type: style table
    styles:
      - Basic Body
      - Small Body
      - Lead
      - Ordered List
      - Unordered List
      - Code

  - type: two column
    text: |
      ### Headings

      #### Fonts
      Level 1
      : - 24px font-size
        - 30px line-height
        - bold font-weight
        - 2px bottom border, [Boring (#A6A8AB)](/design/c/colors/v1.0.1/#rd-boring-a6a8ab)
        - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)

      Level 2
      : - 20px font-size
        - 24px line-height
        - bold font-weight
        - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)

      Level 3
      : - 18px font-size
        - 22px line-height
        - bold font-weight
        - [Pitch (#231f20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)

      Level 4
      : - 16px font-size
        - 20px line-height
        - bold font-weight
        - [Gray No. 1 (#565656)](/design/c/colors/v1.0.1/#rd-gray-no-1-565656)

      Level 5
      : - 16px font-size
        - 20px line-height
        - italic font-style
        - [Gray No. 1 (#565656)](/design/c/colors/v1.0.1/#rd-gray-no-1-565656)

      Level 6
      : - 14px font-size
        - 16px line-height
        - italic font-style
        - [Gray No. 1 (#565656)](/design/c/colors/v1.0.1/#rd-gray-no-1-565656)


      #### Spacing

      Header that follows a header
      : - 6px margin
        - 40px if top header is Level 1

      Header that follows content
      : - 20px margin

      Margins can be customized to meet a layout if necessary.
    contents:
      - type: wide image
        src: ./assets/redlines.headings.png
    exports:
      - Heading Level 1
      - Heading Level 2
      - Heading Level 3
      - Heading Level 4
      - Heading Level 5
      - Heading Level 6

  - type: style table
    styles:
      - Heading Level 1
      - Heading Level 2
      - Heading Level 3
      - Heading Level 4
      - Heading Level 5
      - Heading Level 6

  - type: two column
    text: |
      ### Inline Elements
      `<small>, <time>, <abbr>`
      : - Same as the 'Basic Text' label

      `<a>`
      : - Active link = [Hyperdrive (#0D65A6)](/design/c/colors/v1.0.1/#rd-hyperdrive-0d65a6) and underline
        - Hover link = [Royal Navy (#094877)](/design/c/colors/v1.0.1/#rd-royal-navy-094877), no underline
        - Focus states use the default browser style

      `<mark>`
      : - [Highlighter (#FDEC2E)](/design/c/colors/v1.0.1/#rd-highlighter-fdec2e) background-color
        - Only use within Body Copy

      `<em>, <i>`
      : - italic font-style

      `<strong>, <b>`
      : - bold font-weight

      `<del>, <s>`
      : - line-through text-decoration
        - [Gray No. 1 (#565656)](/design/c/colors/v1.0.1/#rd-gray-no-1-565656) color on light backgrounds
        - [Gray Wash (#AEAEAE)](/design/c/colors/v1.0.1/#rd-gray-wash-aeaeae) color on dark backgrounds

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
        - [Brightly Lit (#E6E6E6)](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6) background-color
        - 4px horizontal padding
    contents:
      - type: narrow image
        src: ./assets/redlines.inline.1.png
      - type: narrow image
        src: ./assets/redlines.inline.2.png
    exports:
      - small, time, abbr tags
      - Links
      - Highlighted Text
      - Italic Text
      - Bold Text
      - Deleted Text
      - Inserted Text
      - Superscript, Subscript
      - Inline Quoted Text
      - code, kbd tags

  - type: style table
    styles:
      - small, time, abbr tags
      - Links
      - Highlighted Text
      - Italic Text
      - Bold Text
      - Deleted Text
      - Inserted Text
      - Superscript, Subscript
      - Inline Quoted Text
      - code, kbd tags

changelog:
  - version: 1.0.0
    changes: Initial version
---
