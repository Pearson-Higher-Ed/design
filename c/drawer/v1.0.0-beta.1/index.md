---
layout: component-yaml
title: Drawer2
section: Components
version: 1.0.0-beta.1
status: Unimplemented
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
    link: https://docs.google.com/a/pearson.com/document/d/1ThXm4SGwyPb3wtlJGmOWLTRCIWERcLsjtP-jlkGjwAY/edit?usp=sharing

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

      A drawer can be dismissed by clicking the included 'x' icon or by selecting the trigger element again.
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
    contents:
      - type: wide image
        src: ./assets/detail.view.png

  - type: section
    name: Responsive Behavior

  - type: two column
    text: |
      The drawer maintains the same behavior all the way down to the extra small breakpoint, at which point it begins taking up 100% of the viewport width.
    contents:
      - type: narrow image
        src: ./assets/responsive.png

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version.
---
