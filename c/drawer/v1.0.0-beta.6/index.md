---
layout: component-yaml
title: Drawer
section: Components
version: 1.0.0-beta.6
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
implementation: https://www.npmjs.com/package/pearson-elements
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1iO8WNiFa5pn6_JleXMUufIvIsXEbVHXsiYUcgxtW-iM/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/drawer.mockup.sketch
  - name: .ai mockup
    link: ./assets/drawer.mockup.ai
dependencies:
  - name: Typography
    version: 1.0.0
  - name: Icons
    version: 1.0.0
  - name: Colors
    version: 1.0.1
tagline: |
  The drawer component offers a convenient method for presenting secondary information which doesn't need to be immediately visible.
features:
  - Overview and item detail levels
  - Animations for show/hide and viewing item details
  - Accessible implementation
usage_guidelines: |
  Drawers should contain secondary content which only needs to be presented when specifically requested by the user, such as help information.

blocks:
  - type: section
    name: Showing/Hiding

  - type: two column
    text: |
      Selecting some UI element on the main page can trigger the drawer to slide in from the right, for example clicking 'Help' in the header.

      A drawer can be dismissed by clicking the included 'x' icon, by selecting the trigger element again, or by hitting the escape key.
    contents:
      - type: wide video
        src: ./assets/show.hide.mov

  - type: section
    name: Basic View

  - type: two column
    text: |
      The basic version of the drawer has a section for a title at the top and a built in close 'x' icon.

      Content may populate the area below this with 20px margins.
    contents:
      - type: wide image
        src: ./assets/basic.view.png

  - type: section
    name: Detail View

  - type: two column
    text: |
      If the drawer is presenting a list of items, selecting one of them should transition the drawer to the detail view. This adds a back label and icon for returning to the originating view.

      The drawer should retain state on close, i.e. closing the drawer on a detail view and then reopening the same drawer will return the user to that detail view.
    contents:
      - type: wide image
        src: ./assets/detail.view.png

  - type: two column
    text: |
      ### Animation
      Displaying the second level uses an animation to provide context.
    contents:
      - type: wide video
        src: ./assets/second.level.mov

  - type: section
    name: Responsive Behavior

  - type: two column
    text: |
      The drawer maintains the same behavior all the way down to the extra small breakpoint, at which point it begins taking up 100% of the viewport width.
    contents:
      - type: narrow image
        src: ./assets/responsive.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic View
      Spacing
      : - 20px side and top margins around the content area
        - 16px vertical margins around the title area, 20px side margins

      Typography
      : - Title is a [large label](/design/c/typography/v1.0.0/#rd-large-label)

      Icons
      : - Close icon is "[times](/design/c/icons/v1.0.0/#rd-times)"
        - A focused icon will use the standard browser outline for focus

      Shadow
      : - Color is rgba(0, 0, 0, 0.3)
        - 8px blur
        - -1px X axis offset

      Title Separator
      : - 1px solid [hairline gray (#D0D0D0)](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0)

      Keyboard Shortcuts
      : - Pressing escape should close the drawer in any mode

    contents:
      - type: wide image
        src: ./assets/redlines.basic.view.png
    exports:
      - Basic View

  - type: two column
    text: |
      ### Detail View
      Title
      : - Use a static "Back" label
        - Focusing the "< Back" element will use the standard browser outline for focus

      Icon
      : - "[chevron-left](/design/c/icons/v1.0.0/#rd-chevron-left)"
        - 8px spacing between icon and label
    contents:
      - type: wide image
        src: ./assets/redlines.detail.view.png
    exports:
      - Detail View

  - type: two column
    text: |
      ### Show/Hide Transition
      Animation
      : - Slide in from the right

      Timing
      : - 0.5 seconds
        - ease-in-out easing

      ### Detail View Transition
      Animation
      : - Content container slides in from the right
        - Title slides away to the left
        - Back fades/slides in from about the middle of the drawer

      Content
      : - 0.3 seconds
        - ease-in-out
        - Opacity is 0 in hidden state

      Hiding Title
      : - Move 40px off to the left
        - Opacity fades to 0
        - 0.3 seconds
        - ease-in-out

      Restoring Title
      : - Restore properties
        - 0.4 seconds
        - ease-in-out

      Showing Back
      : - Starts with midpoint centered at 60% of the content width and opacity of 0
        - 0.3 seconds
        - ease-in-out

      Hiding Back
      : - Reset position and opacity
        - 0.4 seconds
        - ease-in-out

  - type: style table
    styles:
      - Basic View
      - Detail View

changelog:
  - version: 1.0.0-beta.6
    changes: |
      - CHANGED: Dependencies to final versions.
      - ADDED: Missing colors dependency.
  - version: 1.0.0-beta.5
    changes: |
      - ADDED: Dependency links
  - version: 1.0.0-beta.4
    changes: |
      - ADDED: Exported styles
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Animation redlines
      - ADDED: Accessibility checklist
      - ADDED: Sketch and AI mockups

  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Basic -> Detail transition video
      - ADDED: Initial redlines

  - version: 1.0.0-beta.1
    changes: Initial version.
---
