---
layout: component-yaml
title: Alerts
section: Components
version: 2.0.4
status: active
implemented: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Design
    name: Parker
    email: parker.malenke@pearson.com
  - role: Visual Design
    name: Lynn Chang
    email: lynn.chang@pearson.com
implementation: https://github.com/Pearson-Higher-Ed/alerts/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1rzmNsspFnO8bdnLeHtMVWKSXJGzCy6KJ-e3v4513nZk/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/alerts.sketch

dependencies:
  - name: Colors
    version: 3.0.1
  - name: Typography
    version: 2.1.1
  - name: Icons
    version: 2.3.0

tagline: |
  Presents important feedback or information to users either in response to their actions or upon page load.
features:
  - Both global and inline styles
  - Option for dynamic animation in response to user action
  - Error, information, and confirmation styles
usage_guidelines: |
  Use global alerts for messages which are time sensitive but dismissible. The inline alerts may be used in this manner, or to provide more persistent information that relates to a particular region of the page.

blocks:
  - type: live example
    name: Live examples
    link: http://45.55.127.237/pearson-glp-pl/patterns/00-ui-kit-21-alerts-03-error/00-ui-kit-21-alerts-03-error.rendered.html

  - type: section
    name: Global Alert

  - type: two column
    text: |
      The global alert can appear either statically on page load or dynamically in response to use action.

  - type: two column
    text: |
      ### Global alert positioning
      The global alert is positioned in the upper left corner on desktop screens.

      This ensures the alert is noticeable for screen magnification users.
    contents:
      - type: wide image
        src: ./assets/position.desktop.png
        border: true

  - type: two column
    text: |
      For narrower screens the alert takes up the full width.
    contents:
      - type: narrow image
        src: ./assets/alert_mobile_over.png
        border: true

  - type: two column
    text: |
      ### Static global alerts
      When a message is displayed upon page load the alert will appear anchored in the upper left corner of the viewport or if on a mobile device the message will appear across the top of the viewport. (It will stay in place as the user scrolls the page.)  Text in the upper left corner of desktop devices (rather than center) will help ensure screen magnification users do not miss the message upon page load.

      This type of alert can always be dismissed by clicking on the close icon.

      An example use case for this type of alert would be when the user clicks a confirmation link in their email which loads a new window confirming that their address has been verified.

    contents:
      - type: wide image
        src: ./assets/alert_over.png
        caption: The message should appear in the upper corner as part of the normal page load.
        border: true
    features:
      - Static Global Alert

  - type: two column
    text: |
      ### Dynamic global alerts
      Alerts can also appear dynamically in response to user actions like submitting a form, choosing an option, or completing an assignment. In this case the alert will animate down from the top.

      Try to use this alert style sparingly, as it is fairly interruptive. For keyboard interactions, focus will automatically move from where the user is working to this element.

      Example use cases which justify this alert style include:

      - A user drops a student from a course roster, but the action fails due to a server error.
      - A user initiates a course copy action, which proceeds in the background while they go edit another course. A dynamic alert notifies them when the task finishes.
      - A user successfully edits an assignment, but due to backend limitations must be informed that it will take one hour before the changes are available to students.
      - A user edits some settings in one application and needs to be reminded that these changes will not automatically propagate to separate applications that are used as part of the same flow.
    contents:
      - type: wide video
        src: ./assets/animation_alert.mp4
        caption: The animation for showing/dismissing a dynamic alert.
    features:
      - Dynamic Global Alert

  - type: section
    name: Inline Alert

  - type: two column
    text: |
      The alert that applies to a specific task or section content will be displayed where the action occurred. These should only appear below the related content to preserve reading order.

      ### Dismissing
      By default the inline alert is also dismissable, but it can be made to display permanently if the information contained is persistently useful. An example would be a message saying that an email address hasn't been confirmed yet.

    contents:
      - type: wide image
        src: ./assets/alert_inline.png
        caption: The example of message appear below the content area.
        border: true
    features:
      - Inline Alert

  - type: section
    name: Timeouts

  - type: two column
    text: |
      A common pattern with alerts like this is to have the alert automatically dismiss itself after a set timeout. This can be problematic from an accessibility perspective, however, as users may need more time to notice, read, or interact with the alert. For this reason the alert component only supports manual alert dismissal.

  - type: section
    name: Variants

  - type: two column
    text: |
      Warning/Error
      : - Use for negative messages such as a system error or an incorrectly user action
        - If the user needs to take some action in response to the error make sure to clearly state that.

      Success
      : - Use to tell user that a task has been completed successfully.
        - Use to let user know that everything is working property.
        - Example: Submitting a form, completing a quiz

      Information
      : - Use to inform the user about something relevant: to share tips or suggestions.
        - Example: Informing users that an email address hasn't been verified yet

    contents:
      - type: wide image
        src: ./assets/alerts_all.png
    features:
      - Warning/Error Alert
      - Success Alert
      - Information Alert


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic alert

      Dimensions
      : - Color bar is 3px wide
        - At [medium and larger](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--medium) breakpoints, vertical padding is 24px, left padding is 28px, right padding is 36px
        - At smaller breakpoints vertical padding is 20px and horizontal is 28px

      Colors
      : - Error and warning color is [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red)
        - Success and information color is [Digital Marine Turquoise](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-marine-turquoise)
        - Background is [White](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white)

      Typography
      : - Title is [Bold UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text)
        - Message is [Basic Body Copy](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-body-copy)

      "X" icons
      : - [Remove-sm-24](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0-beta.2/#icons--remove-sm)
        - Note the "-sm" size of this icon is actually 12px square
        - Touch area 44x44, positioned in the far upper right corner
        - Icon is 8px away from the top and right edges at [medium and larger](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--medium) breakpoints, 4px at smaller

      Variant icons
      : - Alert/warning icon is [warning-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0-beta.2/#icons--warning)
        - Success icon is [check-lg-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0-beta.2/#icons--check-lg)
        - 12px spacing between the icon and the text area

      Focus Behavior
      : - Most alerts can just be announced by using ARIA alert roles and don't need special focus treatment
        - If an alert is particularly important, focus should be moved to the first element of the alert (and restored to it's original position upon dismissal)
        - Statically presented alerts should just be read and focused in the normal flow of the document

    contents:
      - type: wide image
        src: ./assets/alerts_spec.png
    redlines:
      - Warning/Error Alert
      - Success Alert
      - Information Alert

  - type: two column
    text: |
      ### Global alerts
      Dimensions
      : - 580px wide at [medium and larger](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--medium) breakpoints
        - 440px wide at [small](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--small) breakpoints
        - 100% width at [extra small](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--extra-small)

      Positioning
      : - 32px down and right from the top left viewport corner at [small and larger](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--small) breakpoints
        - 36px from the top with 24px horizontal margins at [extra small breakpoints](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--extra-small)

      Animation (for Dynamic Global)
      : - Drop in uses an ease-in-out easing curve with a duration of 300ms
        - Slide out uses an ease-in easing curve with a duration of 200ms
    contents:
      - type: wide image
        src: ./assets/alerts_spec_popover.png
        caption: Popover alerts
    redlines:
      - Static Global Alert
      - Dynamic Global Alert

  - type: two column
    text: |
      ### Inline alerts

      Dimensions
      : - At [medium and large breakpoints](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--medium), should have a min width of 440px, may expand to fit the content area
        - 100% of content area at [smaller breakpoints](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--small)

      Positioning
      : - Left aligned within content area
    contents:
      - type: wide image
        src: ./assets/alerts_spec_desktop 1.png
        caption: Content (task) level alert
    redlines:
      - Inline Alert



changelog:
  - version: 2.0.4
    person: Parker Malenke
    changes: |
      - CHANGED: Documentation to be clearer about positioning and timeout rules and explain the accessibility considerations in more detail
  - version: 2.0.3
    changes: |
      - ADDED: Feature links
  - version: 2.0.2
    changes: |
      - TWEAKED: Copy in the dynamic alert animation
  - version: 2.0.1
    changes: |
      - FIXED: Inconsistencies in the redlines
  - version: 2.0.0
    changes: |
      - First rebranded version
---
