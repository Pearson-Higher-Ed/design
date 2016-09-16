---
layout: component-yaml
title: Typography
section: Components
version: 2.0.0-beta.3
status: active
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
  - Title styles for UI and Page headings
  - Copy styles for content
  - Inline styles (links, super/sub-script, etc.)
  - Meets accessibility contrast requirements
usage_guidelines: |
  Every instance of text should use a type style defined in this component. If you find a use case not covered by the styles here, make a request to modify this component. (Keeping all type styles in a single component makes it easy to maintain and update them.)

dependencies:
  - name: Colors
    version: 2.0.0-beta.4

blocks:
  - type: section
    name: Font Stacks

  - type: two column
    text: |
      All textual elements use the following font stacks:
    contents:
      - type: code
        content: |
          font-family: 'Open Sans', Calibri, Tahoma, sans-serif;
          font-family: Monaco, 'Lucida Console', monospace;

  - type: section
    name: Labels

  - type: two column
    text: |
      Much of the typography used in a web application consists of short names, labels, or single line bits of content. For example, in Console the course tile displays information like instructor names and course dates with labels.
    contents:
      - type: wide image
        src: ./assets/label.example.png
        caption: Examples of how labels are used.

  - type: two column
    text: |
      ### Variants
      There are five different types of label, *Basic*, *Small*, *Large*, *Bold*, and *Small bold*:

      Labels should primarily be used in single line scenarios.
    contents:
      - type: narrow image
        src: ./assets/labels.regular.png
        caption: The five label types

  - type: two column
    text: |
      ### Color Variants
      Use [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal) as the default primary color and [Medium Gray](/design/c/colors/v2.0.0-beta.4/#rd-medium-gray) as the secondary gray. Prefer these defaults, but labels can use any color from the [Colors component](/design/c/colors), as long as they are over an appropriately contrasting background color.

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

      Titles come in two types, *Page* and *Section*. Page titles typically only appear once per page and are designed to name the current page. Section titles are designed to name the modular components that might make up a page.
    contents:
      - type: wide image
        src: ./assets/title.example.png
        caption: Example section title usage.
      - type: wide image
        src: ./assets/page.title.example.png
        caption: Example page title usage.

  - type: two column
    text: |
      ### Page titles
      Page titles come in two sizes, *Basic* and *Small*.
    contents:
      - type: wide image
        src: ./assets/page.titles.sizes.png
        caption: Standard page title sizes.

  - type: two column
    text: |
      ### Section titles
      There are four different types of section title: *Basic*, *Bold*, *Small*, and *Large*.
    contents:
      - type: wide image
        src: ./assets/titles.sizes.png
        caption: |
          Standard title types in single and multiline versions.

  - type: two column
    text: |
      ### Color Variants
      Titles follow the same color guidelines as labels, using [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal) by default and [Medium Gray](/design/c/colors/v2.0.0-beta.4/#rd-medium-gray) as a secondary supplement. Prefer these, but use other colors where appropriate (make sure to pair with an accessible background).

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
    contents:
      - type: narrow image
        src: ./assets/copy.basic.png

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
        caption: All six heading levels.





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
      Small
      : - 12px font-size
        - 16px line-height

      Small bold
      : - Semibold weight

      Basic
      : - 14px font-size
        - 18px line-height

      Bold
      : - Semibold weight

      Large
      : - 16px font-size
        - 20px line-height

      #### Colors
      Text is [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal) by default, [Medium Gray](/design/c/colors/v2.0.0-beta.4/#rd-medium-gray) should be used as the secondary color. Any other color can be used as long as it's paired with an appropriately contrasting background. See the [Colors](/design/c/colors) component for more details.

    contents:
      - type: narrow image
        src: ./assets/redlines.labels.regular.png
    exports:
      - Basic label
      - Small label
      - Small bold label
      - Large label
      - Bold label

  - type: style table
    styles:
      - Basic label
      - Small label
      - Small bold label
      - Large label
      - Bold label

  - type: two column
    text: |
      ### Section Titles
    exports:
      - Basic section title
      - Small section title
      - Bold section title
      - Large section title

  - type: two column
    text: |
      #### Sizes
      Small
      : - 18px font-size
        - 22px line-height

      Basic
      : - 20px font-size
        - 26px line-height

      Bold
      : - 20px font-size
        - 26px line-height
        - Semibold weight

      Large
      : - 24px font-size
        - 28px line-height


      #### Color
      Use the same color scheme as labels.
    contents:
      - type: narrow image
        src: ./assets/redlines.titles.regular.png
        caption: Regular title sizes

  - type: style table
    styles:
      - Basic section title
      - Small section title
      - Bold section title
      - Large section title

  - type: two column
    text: |
      ### Page titles
    exports:
      - Page title
      - Small page title

  - type: two column
    text: |
      #### Sizes
      Page title
      : - 38px font-size
        - 52px line-height
        - Light weight

      Small page title
      : - 28px font-size
        - 38px line-height
        - Light weight

      #### Colors
      Use the same color scheme as labels.
    contents:
      - type: narrow image
        src: ./assets/redlines.page.title.regular.png

  - type: style table
    styles:
      - Page title
      - Small page title

  - type: two column
    text: |
      ### Copy

  - type: two column
    text: |
      #### Basic Body
      Font
      : - 14px font-size
        - 22px line-height

      Color
      : - [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal)

      Margins:
      : - Adjacent paragraphs are separated by 12px
        - Leave top/bottom padding for a block of `p` tags up to the consumer
    contents:
      - type: narrow image
        src: ./assets/redlines.copy.body.png
        caption: Standard body copy
    exports:
      - Basic Body

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
      : - [White Gray](/design/c/colors/v2.0.0-beta.4/#rd-white-gray)
        - [Ink Blue](/design/c/colors/v2.0.0-beta.4/#rd-ink-blue) background-color
    contents:
      - type: narrow image
        src: ./assets/redlines.copy.code.png
    exports:
      - Code

  - type: style table
    styles:
      - Basic Body
      - Ordered List
      - Unordered List
      - Code

  - type: two column
    text: |
      ### Headings

      #### Fonts
      Level 1
      : - Match Small Page title style

      Level 2
      : - Match Large section title style

      Level 3
      : - Match Bold section title style

      Level 4
      : - Match Basic section title style

      Level 5
      : - Match Small section title style

      Level 6
      : - Match Large label style

      #### Colors
      All headings are [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal).

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
      : - No visual change, these elements have semantic meaning only

      `<a>`
      : - Active link = [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue) and underline
        - Hover link = [Ink Blue](/design/c/colors/v2.0.0-beta.4/#rd-ink-blue), no underline
        - Focus states use the default browser style

      `<mark>`
      : - [Sunshine Yellow](/design/c/colors/v2.0.0-beta.4/#rd-sunshine-yellow) background-color
        - Only use within Body Copy

      `<em>, <i>`
      : - italic font-style

      `<strong>, <b>`
      : - semibold font-weight

      `<del>, <s>`
      : - line-through text-decoration

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
        - [Moonlight](/design/c/colors/v2.0.0-beta.4/#rd-moonlight) background-color
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
  - version: 2.0.0-beta.3
    changes: |
      - UPDATED: Uses latest colors, new a11y checklist.
      - CHANGED: Removed Helvetica Neue from font stack.
  - version: 2.0.0-beta.2
    changes: |
      - Add redlines
      - Tweak section titles
      - Remove dependency on breakpoints
  - version: 2.0.0-beta.1
    changes: |
      - CHANGED: Font family and size to match rebrand aesthetic
  - version: 1.0.0
    changes: Initial version
---
