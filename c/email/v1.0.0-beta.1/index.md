---
layout: component-yaml
title: Email
section: Components
version: 1.0.0-beta.1
status: active
implemented: true
people:
  - role: Designer
    name: Linda Tsai
    email: linda.tsai@pearson.com
  - role: Designer
    name: Karen Taxier
    email: karen.taxier@pearson.com

implementation: https://pearson-elements-v0.surge.sh/elements/typography/
downloads:
  - name: Sketch
    link: ./assets/Email Template_4 copy.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1gYypf7WpDkSSMsB29Qa9woJLdPsiwGIZ-u0LrH650Vs/edit?usp=sharing


tagline: Emails inform the users about a specific task or message. They may contain critical information, require decisions, or involve multiple tasks.

dependencies:
  - name: Colors
    version: 2.0.0-beta.5

blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Some email examples include:

      * __Email Address Verification__ asks users to confirm the email address to complete the account creation process.
      * __Username/Password Reset__ provides the users with a link to reset the credentials.
      * __Password Reset Confirmation__ informs the users of an successful password reset.
      * __Purchase Confirmation__ informs the users of a successful payment transaction other details.
      * __Confirmation for Product Return, Exchange, or Cancellation__


    contents:
      - type: narrow image
        src: ./assets/Email Address Verification.png
        caption: Template - [Email Address Verification](http://www.wikihow.com/End-a-Letter)
      - type: narrow image
        src: ./assets/Username Password Request.png
        caption: Template - [Username Password Request](./assets/Username Password Request.png)  
      - type: narrow image
        src: ./assets/Password Reset Confirmation.png
        caption: Template - [Email Reset Confirmation](./assets/Password Reset Confirmation.png)    


  - type: section
    name: Components

  - type: two column
    text: |
      Build your email using these components:

      1. __Logo__ Logo*

      2. __Greetings__ is a short line of text stating the core message

      3. __Heading__ is a line of text that explains what the email is about. It comes after the greeting, but there can be exceptions by use cases. E.g. In the Email Verification Template, heading comes before greeting for a more natural reading flow.

      4. __Body__ is the main content

      5. __Table__ is an effective way of displaying data

      6. __Link__ is best for non-crucial call to action

      7. __Sign-off__

      8. __Divider__ separates the body text from the footer

      9. __Footer__ contains standard Pearson information. It must include customer support information and copyright text

      10. __Button__ is the primary call to action

    contents:
      - type: wide image
        src: ./assets/Email Components.png

  - type: two column
    text: |
      ### Variants
      There are five different types of UI Text, *Basic*, *Small*, *Large*, *Bold*, and *Small Bold*:

      UI Text should primarily be used in single line scenarios.
    contents:
      - type: narrow image
        src: ./assets/ui.text.regular.png
        caption: The five UI Text types

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
    name: UI Headings

  - type: two column
    text: |
      UI Headings are very similar to UI Text except they demarcate a logical section or container of content. In the previous example, the course name would be a UI Heading.

      UI Headings come in two types, *Page* and *Section*. Page headings typically only appear once per page and are designed to name the current page. Section headings are designed to name the modular components that might make up a page.
    contents:
      - type: wide image
        src: ./assets/section.ui.heading.example.png
        caption: Example of Section UI Heading usage.
      - type: wide image
        src: ./assets/page.ui.heading.example.png
        caption: Example of Page UI Heading usage.

  - type: two column
    text: |
      ### Page UI Headings
      Page UI Headings come in two sizes, *Basic* and *Small*.
    contents:
      - type: wide image
        src: ./assets/page.ui.heading.sizes.png
        caption: Standard Page UI Heading sizes.

  - type: two column
    text: |
      ### Section UI Headings
      There are four different types of section UI Headings: *Basic*, *Bold*, *Small*, and *Large*.
    contents:
      - type: wide image
        src: ./assets/section.ui.heading.sizes.png
        caption: |
          Standard Section UI Heading types in single and multiline versions.

  - type: two column
    text: |
      ### Color Variants
      UI Headings follow the same color guidelines as UI Text, using [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal) by default and [Medium Gray](/design/c/colors/v2.0.0-beta.4/#rd-medium-gray) as a secondary supplement. Prefer these, but use other colors where appropriate (make sure to pair with an accessible background).

      ### Allowed Inline Elements
      In general, UI Headings should not be styled beyond the basic styles listed above. If necessary, stick to the following list of inline elements.

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

      ### Large Body
      For more extensive chunks of content, use the *Large Body* style. This is useful to maintain the target line length of around 75 characters.
    contents:
      - type: narrow image
        src: ./assets/copy.basic.png
      - type: narrow image
        src: ./assets/copy.large.png

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
      Copy is more flexible in this regard than labels or titles. You can include any of the inline elements covered by this component.

  - type: section
    name: Copy Headings

  - type: two column
    text: |
      Copy Headings pair with [copy](#copy) styles to delineate sections within blocks of content. They should not be used for UI elements (see [UI Headings](#ui-headings) instead).

      There are six different levels available and should be used in order.
    contents:
      - type: wide image
        src: ./assets/headings.png
        caption: All six Copy Heading levels.





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
      ### UI Text

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
        src: ./assets/redlines.ui.text.regular.png
    exports:
      - UI Text - Basic
      - UI Text - Small
      - UI Text - Small Bold
      - UI Text - Large
      - UI Text - Bold

  - type: style table
    styles:
      - UI Text - Basic
      - UI Text - Small
      - UI Text - Small Bold
      - UI Text - Large
      - UI Text - Bold

  - type: two column
    text: |
      ### Section UI Headings
    exports:
      - UI Headings - Section - Basic
      - UI Headings - Section - Small
      - UI Headings - Section - Bold
      - UI Headings - Section - Large

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
      Use the same color scheme as UI Text.
    contents:
      - type: narrow image
        src: ./assets/redlines.ui.heading.section.regular.png
        caption: Regular title sizes

  - type: style table
    styles:
      - UI Headings - Section - Basic
      - UI Headings - Section - Small
      - UI Headings - Section - Bold
      - UI Headings - Section - Large

  - type: two column
    text: |
      ### Page UI Headings
    exports:
      - UI Headings - Page - Basic
      - UI Headings - Page - Small

  - type: two column
    text: |
      #### Sizes
      Basic
      : - 38px font-size
        - 52px line-height
        - Light weight

      Small
      : - 28px font-size
        - 38px line-height
        - Light weight

      #### Colors
      Use the same color scheme as UI Text.
    contents:
      - type: wide image
        src: ./assets/redlines.ui.heading.page.regular.png

  - type: style table
    styles:
      - UI Headings - Page - Basic
      - UI Headings - Page - Small

  - type: two column
    text: |
      ### Copy

  - type: two column
    text: |
      #### Body
      Basic Font Size
      : - 14px font-size
        - 22px line-height

      Large Font Size
      : - 16px font-size
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
      - type: narrow image
        src: ./assets/redlines.copy.large.png
        caption: Large body copy
    exports:
      - Basic Body
      - Large Body

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
      - Large Body
      - Ordered List
      - Unordered List
      - Code

  - type: two column
    text: |
      ### Copy Headings

      #### Fonts
      Level 1
      : - Match Small Page UI Heading style

      Level 2
      : - Match Large Section UI Heading style

      Level 3
      : - Match Bold Section UI Heading style

      Level 4
      : - Match Basic Section UI Heading style

      Level 5
      : - Match Small Section UI Heading style

      Level 6
      : - Match Large UI Text style

      #### Colors
      All Copy Headings are [Charcoal](/design/c/colors/v2.0.0-beta.4/#rd-charcoal).

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
      : - Generic link = [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue) and underline
        - Hover link = [Ink Blue](/design/c/colors/v2.0.0-beta.4/#rd-ink-blue), no underline
        - Focus states use the default browser style, and also adopt the hover style

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
  - version: 2.0.0-beta.8
    changes: |
      - ADDED: Large Body style
  - version: 2.0.0-beta.7
    changes: |
      - FIXED:
  - version: 2.0.0-beta.6
    changes: |
      - CHANGED: Updated names to be less confusing when communicating with developers
  - version: 2.0.0-beta.5
    changes: |
      - FIXED: Correct a11y checklist link
      - CHANGED: Focused links include the hover style as well
  - version: 2.0.0-beta.4
    changes: |
      - FIXED: Typos
      - REMOVED: `<u>` tag styling
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
