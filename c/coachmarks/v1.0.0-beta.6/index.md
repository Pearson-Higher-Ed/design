---
layout: component-yaml
title: Coach Marks
section: Components
version: 1.0.0-beta.6
status: deprecated
implemented: true
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
  - name: colors
    version: 2.1.0
  - name: typography
    version: 2.0.0
  - name: icons
    version: 2.0.0

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
      - type: narrow image
        src: ./assets/single.instance.icon.png
        caption: Coach mark with the close icon.

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

      Dimensions
      : - 280px wide at every viewport

      Arrow
      : - 16px wide, 8px tall
        - Prefer to position the arrow in the center of the box, or 32px from either side
        - If necessary the arrow may be positioned as close as 20px from either end
        - Prefer arrows to point downwards rather than upwards
        - Arrow never points out of either side

      Close icon
      : - remove-sm-18
        - Centered in a 44x44 px tap target in the upper right corner

      Colors
      : - [Digital Ice Blue](/design/c/colors/v2.0.0/#rd-digital-ice-blue) background color
        - All text is [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal)

      Drop shadow
      : - Shifted 3px downwards
        - rgba(0, 0, 0, 0.25) color
        - 7px blur, 0px spread

      Typography
      : - Title is [UI Text - Bold](/design/c/typography/v2.0.0/#rd-ui-text-bold)
        - Message is [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic)
        - Links are [link styled](/design/c/typography/v2.0.0/#rd-links) [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic), but overridden to use [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal) for both active and hover for contrast purposes

      Info Trigger
      : - Use info-fill-18

    contents:
      - type: wide image
        src: ./assets/redlines.single.png
        caption: Single Instance Coach Mark

changelog:
  - version: 1.0.0-beta.6
    changes: |
      - CHANGED: Text in examples to align with UA guidelines
  - version: 1.0.0-beta.5
    changes: |
      - ADDED: Redline spec for drop shadow
  - version: 1.0.0-beta.4
    changes: |
      - CHANGED: Dismissal link to meet contrast reqs.
  - version: 1.0.0-beta.3
    changes: |
      - UPDATED: Simplified features to match current use cases, make single dismiss option
  - version: 1.0.0-beta.2
    changes: |
      - UPDATED: Uses new visual aesthetic
  - version: 1.0.0-beta.1
    changes: |
      - CHANGED: Initial Creation
---
