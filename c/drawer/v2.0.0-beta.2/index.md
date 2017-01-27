---
layout: component-yaml
title: Drawer
section: Components
version: 2.0.0-beta.2
status: deprecated
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
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
  - name: Breakpoints
    version: 1.0.0
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

      Content may populate the area below this with 30px margins. Custom background colors and dividing lines may extend to 100% width.
    contents:
      - type: wide image
        src: ./assets/basic.view.2x.png

  - type: section
    name: Detail View

  - type: two column
    text: |
      If the drawer is presenting a list of items, selecting one of them should transition the drawer to the detail view. This adds a back label and icon for returning to the originating view.

      The drawer should retain state on close, i.e. closing the drawer on a detail view and then reopening the same drawer will return the user to that detail view.
    contents:
      - type: wide image
        src: ./assets/detail.view.2x.png

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
        src: ./assets/responsive.view.2x.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic View
      Spacing
      : - 30px side, 25px top and 30px bottom margins around the content area
        - 25px vertical margins below the title area, 30px side margins
        - Drawer is 320px wide at the [Small breakpoint](/design/c/breakpoints/v1.0.0/#rd-small) and wider
        - Drawer is 100% width at the [Extra Small breakpoint](/design/c/breakpoints/v1.0.0/#rd-extra-small)
        - Dividing lines may extend past the content area, up to 100% width

      Background
      : - Default background is [white](/design/c/colors/v1.0.1/#rd-white-ffffff), may customized to an accessible color and extend to 100% width.
        - Border is 1px solid [alto (#D9D9D9)](/design/c/colors/v2.0.0-beta.5/#rd-alto)

      Typography
      : - Title is a [Basic section heading](/design/c/typography/v2.0.0-beta.9/#rd-ui-headings-section-basic)

      Icons
      : - Close icon is "[Pearson Icon (remove-sm-24)]"
        - A focused icon will use the standard browser outline for focus

      Shadow
      : - box-shadow: 0 3px 5px 0 rgba(199,199,199,0.70);

      Title Separator
      : - 1px solid [alto (#D9D9D9)](/design/c/colors/v2.0.0-beta.5/#rd-alto)

      Keyboard Shortcuts
      : - Pressing escape should close the drawer in any mode

      Focus Behavior
      : - Opening the drawer moves focus from the triggering element to the first focusable item within the drawer (typically the Close icon).
        - Tabbing within the drawer should cycle through focusable items like normal
        - The drawer should capture focus, so you won't be able to tab out of the drawer
        - Upon dismissing the drawer focus should be restored to the triggering element

    contents:
      - type: wide image
        src: ./assets/redlines.basic.view.2x.png
    exports:
      - Basic View

  - type: two column
    text: |
      ### Detail View
      Title
      : - Use a static "Back" label
        - Focusing the "< Back" element will use the standard browser outline for focus

      Icon
      : - Pearson Icon (chevron-back-18)
        - 10px spacing between icon and label

      Focus Behavior
      : - Follow the patterns of the Basic Drawer
        - Transitioning into the detail view should move focus to the first focusable element of the view (typically the back button)
        - Focus should again be captured
        - Focus targets from the Basic View should not be accessible
    contents:
      - type: wide image
        src: ./assets/redlines.detail.view.2x.png
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
  - version: 2.0.0-beta.2
    changes: Apply new brand to existing component.
  - version: 2.0.0-beta.1
    changes: Redesign align with new brands
  - version: 1.0.0-beta.8
    changes: |
      - ADDED: Ability to include 100% width divider lines and custom background colors
  - version: 1.0.0-beta.7
    changes: |
      - ADDED: Dimensions to redlines
      - ADDED: Dependency links for breakpoints
  - version: 1.0.0-beta.6
    changes: |
      - CHANGED: Dependencies to final versions.
      - ADDED: Missing colors dependency.
      - ADDED: Additional detail on focus behavior for keyboard users.
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
