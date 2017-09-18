---
layout: component-yaml
title: Application Header
section: Components
sdk: stand_alone
redirect_from: /docs/ui-components/application-header/
version: 2.2.2
status: active
rebranded: true
implemented: true
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
implementation: https://github.com/Pearson-Higher-Ed/app-header
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1oxs4Mjp4xF27v_H7HvyQeonAXhFhKGB3XYQZh2SZ2Gs/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/application-header.sketch

dependencies:
  - name: Colors
    version: 3.0.1
  - name: Typography
    version: 2.0.1
  - name: Breakpoints
    version: 1.0.2
  - name: Icons
    version: 2.3.0
  - name: Drawer
    version: 2.0.1

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
    features:
      - Signed Out Mode

  - type: section
    name: Basic Mode

  - type: two column
    text: |
      Represents the default signed in experience. Expands on the Signed Out Mode by making the Pearson Logo a home link (currently [www.console.pearson.com](http://console.pearson.com)) and including the *User Menu*.

      The User Menu is labelled with the user's first name and contains Account Settings, Policy, and Sign Out options. At widths less than 768px the user's name is replaced with a profile icon.

      Use this mode when the user logs in to a standard Pi session and needs a default header experience.

      ### Policy links
      By default the header links to the standard Terms of Use and Privacy Policies. An application may include additional policy links if necessary below these.

    contents:
      - type: wide image
        src: ./assets/basic.mode.png
        caption: |
          The desktop version of the basic mode header. (Note: Normally the mobile view would be used at this width, it has been compressed for illustration purposes.)
      - type: narrow image
        src: ./assets/basic.mode.mobile.png
        caption: Mobile version of the header is slightly shorter.
    features:
      - Basic Mode

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
    features:
      - Integration Mode

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Signed Out Mode
    redlines:
      - Signed Out Mode

  - type: two column
    text: |
      #### ≥ 768px ([medium and larger viewports](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--medium))

      Logo link
      : - No active link

      Dimensions
      : - 70px tall
        - 100% viewport width

      Logo
      : - 37px tall, vertically centered

      Spacing
      : - Logo, links, and icons vertically centered
        - 15px from either end
        - 26px between link/icons
        - Icons get a 44px square tap zone
        - Icons next to each other are positioned such that their tap zones are immediately adjacent

      Background
      : - [White (#ffffff)](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white)
        - 1px solid [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight) bottom border

      Typography
      : - Links are [Bold UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text) in [Medium Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--medium-gray)

      States
      : - Focusing an icon or link uses the default browser style
        - Hovering or focusing an icon or link changes the color to [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)

      Icons
      : - Help icon is [help-fill-18](/design/c/icons/v2.1.0)

      #### < 768px ([Small and Extra Small viewports](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--small))

      Dimensions
      : - 60px tall

      Logo
      : - 30px tall

    contents:
      - type: wide image
        src: ./assets/redlines.signed.out.mode.png

  - type: two column
    text: |
      ### Basic Mode
    redlines:
      - Basic Mode

  - type: two column
    text: |
      #### ≥ 768px ([M, L, and XL viewports](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--large))

      Spacing and dimensions
      : - Follow Signed Out Mode specs
        - Icons are positioned such that their tap zones are immediately adjacent

      Logo Link
      : - www.console.pearson.com

      Notifications
      : - Uses [notification-18](/design/c/icons/v2.1.0) icon
        - Badge dimensions are 16px tall with 6px horizontal padding
        - Active badge is [Hot Pink](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--hot-pink) background with [White](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white) [Small Bold UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-bold-ui-text)
        - Inactive Badge is [Alto](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--alto) background with [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal) text
        - 2px [White](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white) outer border

      Account Menu
      : - Opens the standard drawer (which will appear full height)
        - Links are [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text) with the standard link style
        - Sign out button is a Large Primary button

      States
      : - Same as Signed Out Mode

      #### < 768px ([Small and Extra Small viewports](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--small))

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
    redlines:
      - Integration Mode


changelog:
  - version: 2.2.2
    changes: |
      - ADDED: Feature links
      - FIXED: Notification background color
  - version: 2.2.1
    changes: |
      - FIXED: Clarified redlines
      - FIXED: Breakpoints in the redlines
      - ADDED: Symbols

  - version: 2.2.0
    changes: |
      - CHANGED: Background color to white

  - version: 2.1.0
    changes: |
      - ADDED: Terms of Use and Privacy Policy links

  - version: 2.0.0
    changes: |
      - CHANGED: Adopt rebrand style

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
