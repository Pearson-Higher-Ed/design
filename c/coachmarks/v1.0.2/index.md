---
layout: component-yaml
title: Coach Marks
section: Components
sdk: stand_alone
version: 1.0.2
status: active
implemented: true
implementation: https://github.com/Pearson-Higher-Ed/coach-mark/
people:
  - role: Interaction Design
    name: Albert Christy
    email: albert.christy@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1MFgXC2WVyNs-R6HiGu5pEcdvSlANmMNhf2DHWl6M49w/edit?usp=sharing
  - name: Sketch
    link: ./assets/coach.mark.mockup.sketch

dependencies:
  - name: Colors
    version: 3.0.1
  - name: Typography
    version: 2.1.1
  - name: Icons
    version: 2.3.0

tagline: |
  This component informs the user of a new feature, nudges a user to use a feature or guides the user through a multistep process.

features:
  - Contextual message for instructing or drawing attention
  - Way to present small pieces of contextual information
  - Two different dismissal options

usage_guidelines: |
  Coach marks should be used sparingly in the application to avoid coach mark chains. Information presented in a coach mark should be short and sweet, focusing on one key function.

blocks:
  - type: section
    name: Basics

  - type: two column
    text: |
      A coach mark appears pointing to the targeted UI element on the page. It displays a title, description and either a dismissal link or 'X' icon. Once the coach mark is dismissed, it will not show again.

    contents:
      - type: narrow image
        src: ./assets/single.instance.link.png
        caption: The basic coach mark with a link to dismiss.
        border: true
      - type: narrow image
        src: ./assets/single.instance.icon.png
        caption: Coach mark with the close icon.
        border: true
    features:
      - Link Coach Mark
      - Icon Coach Mark

  - type: section
    name: Usage

  - type: two column
    text: |
      The coach mark is used to inform and instruct the user. It can either appear automatically, such as when a user visits a page for the first time or a new feature is added, or in response to user action, like activating an info icon.

      ### Informational
      The info coach mark should only be used to clarify the meaning of a section of the page. Prefer to use [information text](http://pearson-higher-ed.github.io/design/c/inputs/#information-error-text) if the target is a form input. One reason to break this guideline is if the amount of information would be unwieldy below the input, as in the example here.

      Be careful not to use the coach mark to provide help content that would be better served by the [Contextual Help](http://pearson-higher-ed.github.io/design/c/contextual-help/) component.

      ### Instructional
      Write the copy in accordance with [accessibility guideline #18](http://wps.pearsoned.com/accessibility/115/29601/7577872.cw/#PG18) by refering to the semantic names of the UI rather than visual appearance. For example, "Click **Start**" vs "Click the Blue Button".

      ### Dismissing
      Either the link or close icon should always be present, but the coach mark may also be dismissed when the user interacts with the targeted part of the UI. This is mostly useful for introducing new features or prompting users to take a specific action.
    contents:
      - type: narrow image
        src: ./assets/info.example.png
        caption: An example of using a Coach Mark when there's too much information to put under the input.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Spacing
      : - 20px vertical padding
        - 24px horizontal padding
        - 4px between title and message
        - 24px between message and dismissal link
        - 4px between arrow and target element

      Dimensions
      : - 280px wide at every viewport

      Arrow
      : - 16px wide, 8px tall
        - Prefer to position the arrow in the center of the box, or 32px from either side
        - If necessary the arrow may be positioned as close as 20px from either end
        - Prefer arrows to point downwards rather than upwards
        - Arrow never points out of either side

      Close icon
      : - [remove-sm-18](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text)
        - Centered in a 44x44 px tap target in the upper right corner

      Colors
      : - [Digital Ice Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-ice-blue) background color
        - All text is [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)

      Drop shadow
      : - Shifted 3px downwards
        - rgba(0, 0, 0, 0.25) color
        - 7px blur, 0px spread

      Typography
      : - Title is [Bold UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text)
        - Message is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)
        - Links are [link styled](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--link) [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text), but overridden to use [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal) for both active and hover for contrast purposes

      Info Trigger
      : - Use the [info-fill-18](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text) icon

    contents:
      - type: wide image
        src: ./assets/redlines.single.png
        caption: Single Instance Coach Mark
    redlines:
      - Link Coach Mark
      - Icon Coach Mark

changelog:
  - version: 1.0.2
    changes: |
      - ADDED: Feature links
  - version: 1.0.1
    changes: |
      - FIXED: Inconsistencies in sketch file
  - version: 1.0.0
    changes: |
      - CHANGED: Initial version
---
