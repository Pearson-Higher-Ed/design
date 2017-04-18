---
layout: component-yaml
title: Application Header
section: Components
redirect_from: /docs/ui-components/application-header/
version: 2.0.0-beta.1
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Design
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Visual Design
    name: Meredith Williamson
    email: meredith.williamson@pearson.com
implementation: https://origami.pearsoned.com/registry/components/o-app-header
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Uhkqt3gyK7cVDKkEeUcgXfO1GjYLwk5qp_2Gu8CcKhc/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/application-header.mockup.sketch
  - name: .ai mockup
    link: ./assets/application-header.mockup.ai

dependencies:
  - name: Colors
    version: 2.0.0-beta.4
  - name: Typography
    version: 2.0.0-beta.9
  - name: Breakpoints
    version: 1.0.0

tagline: |
  This component contains and displays global tools and navigation across the next gen platform.
description: |
  It offers a simple and consistent way to include standard behavior such as sign in/sign out, help content, notifications, and global navigation. The header can be presented in three different modes depending on the context it's in. A user's first interaction with the header will likely be the [Signed Out Mode](#anonymous-mode) which displays only the most basic information. After signing in, the [Basic Mode](#basic-mode) represents the 'default' header, offering functionality such as account management and sign out. In situations where the user's session is managed by a third party (for example 3PL/LMS integration) the [Integration Mode](#focus-mode) will remove distracting/irrelevant navigation options.
features:
  - Pearson branding/navigate to home
  - Standard help link
  - Sign in/Sign out
  - My Account
  - Notification access
  - Accessibility best practices
  - Mobile ready responsive design
usage_guidelines: |
  Every application that's a part of the next gen platform should display the relevant mode of this header in order to promote a consistent experience.

blocks:
  - type: section
    name: Signed Out Mode

  - type: two column
    text: |
      This is the simplest version of the header, just displaying the Pearson logo (with no link interaction), the help icon, and a Sign In link. The help icon is designed to trigger the [Contextual Help component](/design/c/contextual-help).

      Use this mode when the user is signed out.
    contents:
      - type: wide image
        src: ./assets/signed.out.mode.png
        caption: The signed out header has one style that works for every breakpoint.

  - type: section
    name: Basic Mode

  - type: two column
    text: |
      Represents the default signed in experience. Expands on the Signed Out Mode by making the Pearson Logo a home link (currently [www.console.pearson.com](http://console.pearson.com)) and including the *User Menu*.

      The User Menu is labelled with the user's first name and contains Account Settings and Sign Out options. At widths less than 768px the user's name is replaced with a profile icon.

      Use this mode when the user logs in to a standard Pi session and needs a default header experience.
    contents:
      - type: wide image
        src: ./assets/basic.mode.png
        caption: |
          The desktop version of the basic mode header. (Note: Normally the mobile view would be used at this width, it has been compressed for illustration purposes.)
      - type: narrow image
        src: ./assets/basic.mode.mobile.png
        caption: Mobile version of the header is slightly shorter.

  - type: section
    name: Integration Mode

  - type: two column
    text: |
      In this version of the header many options are removed that aren't relevant in cases where a user is linking their account to a 3rd party (e.g. BlackBoard, Canvas, or other LMSs). The Logo is no longer a link and the right side of the header only contains a help link.

      Use this mode when the user's session is managed by a third party and the user shouldn't have access to platform session features (e.g. sign out, My Account). Specifically, this applies to 3PL/LMS integration scenarios.
    contents:
      - type: wide image
        src: ./assets/integration.mode.png
        caption: Integration mode

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Signed Out Mode
    exports:
      - Signed Out Mode

  - type: style table
    styles:
      - Signed Out Mode

  - type: two column
    text: |
      #### ≥ 768px ([medium and larger viewports](/design/c/breakpoints/v1.0.0/#rd-medium))

      Logo link
      : - No active link

      Dimensions
      : - 70px tall
        - 100% viewport width

      Spacing
      : - Logo, links, and icons vertically centered
        - 15px from either end
        - 26px between link/icons
        - Icons get a 44px square tap zone

      Background
      : - [White Gray (#f5f5f5)](/design/c/colors/v2.0.0-beta.5/#rd-white-gray)
        - 1px solid [Moonlight](/design/c/colors/v2.0.0-beta.5/#rd-moonlight) bottom border

      Typography
      : - Links are [Bold UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold) in [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)

      States
      : - Focusing an icon or link uses the default browser style
        - Hovering or focusing an icon or link changes the color to [Charcoal (#252525)](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)

      #### < 768px ([Small and Extra Small viewports](/design/c/breakpoints/v1.0.0/#rd-small))

      Dimensions
      : - 60px tall

    contents:
      - type: wide image
        src: ./assets/redlines.signed.out.mode.png

  - type: two column
    exports:
      - Basic Mode
    text: |
      ### Basic Mode

  - type: style table
    styles:
      - Basic Mode

  - type: two column
    text: |
      #### ≥ 1024px ([L and XL viewports](/design/c/breakpoints/v1.0.0/#rd-large))

      Spacing and dimensions
      : - Follow Signed Out Mode specs

      Logo Link
      : - www.console.pearson.com

      Notifications
      : - Uses notification-18 icon
        - Badge dimensions are 16px tall with 6px horizontal padding
        - Active badge is Hot Pink (#DA0474) background with [White](/design/c/colors/v2.0.0-beta.5/#rd-white) [Small Bold UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small-bold)
        - Inactive Badge is [White](/design/c/colors/v2.0.0-beta.5/#rd-white) background with [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal) text
        - 2px [White Gray](/design/c/colors/v2.0.0-beta.5/#rd-white-gray) outer border

      Account Menu
      : - Opens the standard drawer
        - Links are [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic) with the standard link style

      States
      : - Same as Signed Out Mode

      #### < 768px ([Small and Extra Small viewports](/design/c/breakpoints/v1.0.0/#rd-small))

      Profile icon
      : - User's name replaced with profile-18 icon
    contents:
      - type: wide image
        src: ./assets/redlines.basic.mode.png
        caption: Redlines for larger viewports

  - type: two column
    text: |
      ### Integration Mode

      Identical to signed out mode, without the 'Sign In' link.
    exports:
      - Integration Mode

  - type: style table
    styles:
      - Integration Mode


changelog:
  - version: 2.0.0-beta.1
    changes: |
      - CHANGED: Adopt rebrand style
  - version: 1.2.0-beta.1
    changes: |
      - ADDED: Enterprise admin login link.

  - version: 1.1.0
    changes: |
      - CHANGED: Use colors component
      - CHANGED: Use typography component
      - ADDED: Details on local nav item truncation
      - ADDED: Details on focus and hover states
      - ADDED: .ai mockup file
      - ADDED: Dependency list and references
      - ADDED: Exported styles
  - version: 1.0.0
    changes: Initial release
---
