---
layout: component-yaml
title: Application Header
section: Components
redirect_from: /docs/ui-components/application-header/
version: 1.2.0-beta.1
status: active
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
    version: 1.0.1
  - name: Typography
    version: 1.0.0
  - name: Breakpoints
    version: 1.0.0

tagline: |
  This component contains and displays global tools and navigation across the next gen platform.
description: |
  It offers a simple and consistent way to include standard behavior such as sign in/sign out, help content, and global navigation. For courses, it will present local navigation at mobile breakpoints. The header can be presented in four different modes depending on the context it's in. A user's first interaction with the header will likely be the [Signed Out Mode](#anonymous-mode) which displays only the most basic information (usually including a sign in link). After signing in the [Basic Mode](#basic-mode) represents the 'default' header, offering functionality such as account management and sign out. Once the user launches a specific course the [Course Mode](#course-mode) adds a few features, most notably local navigation for mobile breakpoints. In situations where the user's session is managed by a third party (for example 3PL/LMS integration) the [Integration Mode](#focus-mode) will remove distracting/irrelevant navigation options.
features:
  - Pearson branding/navigate to home
  - Standard help link
  - Sign in/Sign out
  - My Account
  - Local navigation for courses (at mobile breakpoints)
  - Accessibility best practices
  - Mobile ready responsive design
usage_guidelines: |
  Every application that's a part of the next gen platform should display the relevant mode of this header in order to promote a consistent experience.

blocks:
  - type: section
    name: Signed Out Mode

  - type: two column
    text: |
      This is the simplest version of the header, just displaying the Pearson logo (with no link interaction), the help link, and (optionally) a Sign In link. The help link is designed to trigger the [Contextual Help component](/design/c/contextual-help).

      Use this mode when the user is signed out.

      ### Options

      #### Remove sign in link
      There is a single configuration option to remove the "Sign In" link. Use this option when displaying the sign in link in the header would be redundant (e.g. on the actual sign in page).

    contents:
      - type: wide image
        src: ./assets/signed.out.mode.png
        caption: The signed out header has one style that works for every breakpoint. Shown with and without the sign in link.

  - type: section
    name: Basic Mode

  - type: two column
    text: |
      Represents the default signed in experience. Expands on the Signed Out Mode by making the Pearson Logo a home link (currently [www.console.pearson.com](http://console.pearson.com)) and including the *User Menu*.

      The User Menu is labelled with the user's first name and contains My Account and Sign Out options. At widths less than 768px it is condensed into the *Mobile Menu* which relabels the dropdown as "Menu" and extends it with a list of courses (if the consuming app has that information).

      Use this mode when the user logs in to a standard Pi session and needs a default header experience.

      ### Options

      #### Course listing
      The Mobile Menu can display a list of Next Gen courses for the current user. If the list is longer than five items in length it's truncated and a "See X more courses" item is added at the bottom.

      Use this when the consuming application contains a list of courses for the current user.

      #### Enterprise Admin link
      If the current user has the proper permissions for administering an enterprise system a link will be added to the User/Course menu to access these tools.
    contents:
      - type: wide image
        src: ./assets/basic.mode.png
        caption: |
          The desktop version of the basic mode header. (Note: Normally the mobile view would be used at this width, it has been compressed for illustration purposes.)
      - type: narrow image
        src: ./assets/basic.mode.mobile.png
        caption: Mobile version with the course listing.
      - type: narrow image
        src: ./assets/basic.mode.enterprise.png
        caption: The Enterprise Admin link at mobile sizes.

  - type: section
    name: Course Mode

  - type: two column
    text: |
      At desktop sizes this is identical to the Basic Header.

      The Mobile Menu gains an "All Courses" link and any local navigation for the course.

      The Course Mode also offers the ability to enable a light theme.

      Use this mode when a user launches a specific product (such as Revel, Pearson Reader, etc.) with local navigation.

      ### Options

      #### Course navigation
      At narrower breakpoints the Mobile Menu should contain the navigation for the course. The title of the current course will head this section. Use this option when the course offers any high level local navigation options.

      #### Light theme
      The header can switch it's color from black to a light gray. This option should be used when the user is viewing a reading, assessment, or some other type of content which requires their complete focus.
    contents:
      - type: wide image
        src: ./assets/course.mode.png
        caption: Course mode with the light theme at < 480px; standard course mode at 480px – 767px.

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
      : - 54px tall
        - 100% viewport width

      Spacing
      : - Logo and links vertically centered
        - 30px from either end
        - 30px between links

      Background
      : - [Black (\#000000)](/design/c/colors/v1.0.1/#rd-black-000000)

      Typography
      : - Links are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse primary color](/design/c/typography/v1.0.0/#rd-inverse-primary-label-color))

      States
      : - Links use the browser default style for focus
        - Hovering shows the hand icon, but otherwise no style change

      #### < 768px ([Small and Extra Small viewports](/design/c/breakpoints/v1.0.0/#rd-small))

      Dimensions
      : - 44px tall

      Spacing
      : - 14px from either end
        - 14px between links

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

      Logo Link
      : - www.console.pearson.com

      Dimensions
      : - 54px tall
        - 100% viewport width
        - Dropdown menu is 250px wide
        - Menu items are 48px tall
        - Menu dividers are 1px
        - Dropdown tab is 42px tall
        - Cap over tab is 2px tall

      Spacing
      : - Logo and links vertically centered
        - 30px from either end
        - 30px between links
        - 8px between username and chevron-down icon
        - Dropdown tab has 15px of horizontal padding

      Colors
      : - Main bar is [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000)
        - Dropdown background is [Gutenberg Black (#333333)](/design/c/colors/v1.0.1/#rd-gutenberg-black-333333)
        - Divider lines in dropdown are [Asphalt (#3f3f3f)](/design/c/colors/v1.0.1/#rd-asphalt-3f3f3f)
        - Cap on username is [Smoke Gray (#545454)](/design/c/colors/v1.0.1/#rd-smoke-gray-545454)

      Typography
      : - Top level links are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse primary color](/design/c/typography/v1.0.0/#rd-inverse-primary-label-color))
        - Menu items are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse secondary color](/design/c/typography/v1.0.0/#rd-inverse-secondary-label-color))

      States
      : - Link focus states use the default browser implementation
        - Hovering an item in the dropdown menu will show an underline

      Enterprise Link
      : - If the currently logged in use has access to the enterprise administration screens a link should be added above the account option

      #### 768px – 1023px ([Medium Viewport](/design/c/breakpoints/v1.0.0/#rd-medium))
      Username is truncated to no more than 20 characters
    contents:
      - type: wide image
        src: ./assets/redlines.basic.mode.png
        caption: Redlines for larger viewports

  - type: two column
    text: |
      #### 480px – 767px ([Small Viewport](/design/c/breakpoints/v1.0.0/#rd-small))
      Dimensions
      : - 44px tall
        - 100% viewport width
        - Dropdown menu is 250px wide
        - Course items in menu are 60px tall
        - Other menu items are 48px tall
        - Divider lines are 1px tall
        - Dropdown tab is 36px tall
        - Cap over tab is 2px tall

      Spacing
      : - Logo and links vertically centered
        - 14px from either end
        - 28px between links
        - 8px between link and icons
        - Dropdown tab has 14px of horizontal padding

      Colors
      : - Same as larger viewports

      Typography
      : - Top level links are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse primary color](/design/c/typography/v1.0.0/#rd-inverse-primary-label-color))
        - Course items are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse primary color](/design/c/typography/v1.0.0/#rd-inverse-primary-label-color))
        - Other menu items are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse secondary color](/design/c/typography/v1.0.0/#rd-inverse-secondary-label-color))

      Course List
      : - If more than 5 items, add a 'Show X more courses...' item at the bottom

      #### < 480px ([Extra Small viewport](/design/c/breakpoints/v1.0.0/#rd-extra-small))
      Dropdown menu becomes 100% wide
    contents:
      - type: wide image
        src: ./assets/redlines.basic.mode.responsive.png
        caption: Redlines for smaller viewports.
      - type: narrow image
        src: ./assets/redlines.basic.mode.large.list.png
        caption: The 'Show X more courses...' item.

  - type: two column
    text: |
      ### Course Mode
    exports:
      - Course Mode

  - type: style table
    styles:
      - Course mode

  - type: two column
    text: |
      #### ≥ 768px ([Medium and larger viewports](/design/c/breakpoints/v1.0.0/#rd-medium))
      Follow the Basic Mode specifications.

      #### 480px – 767px ([Small viewport](/design/c/breakpoints/v1.0.0/#rd-small))
      At this size the course navigation appears in the dropdown.

      Logo Link
      : - www.pearson.console.com

      Dimensions
      : - All courses link is 48px high
        - Local nav options are 44px tall (incl. header)

      Spacing
      : - Top level links, and heading, have 20px horizontal padding
        - Local nav options have 30px left padding, 20px on the right
        - Heading has 9px top padding
        - All Courses has 8px padding for the icon

      Colors
      : - Main dropdown background is [Gutenberg Black (#333333)](/design/c/colors/v1.0.1/#rd-gutenberg-black-333333)
        - Local nav background is [Full Moon (#424242)](/design/c/colors/v1.0.1/#rd-full-moon-424242)
        - Divider lines are [Asphalt (#3f3f3f)](/design/c/colors/v1.0.1/#rd-asphalt-3f3f3f)

      Typography
      : - All Courses link and standard menu items are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([inverse secondary color](/design/c/typography/v1.0.0/#rd-inverse-secondary-label-color))
        - Course name is [basic title](/design/c/typography/v1.0.0/#rd-basic-title) (inverse)
        - Local nav items are [basic labels](/design/c/typography/v1.0.0/#rd-basic-label) ([inverse secondary color](/design/c/typography/v1.0.0/#rd-inverse-secondary-label-color))
        - Active nav item is [bold label](/design/c/typography/v1.0.0/#rd-bold-label) ([inverse primary color](/design/c/typography/v1.0.0/#rd-inverse-primary-label-color))
        - Local nav items truncate, rather than wrap to more than one line

      States
      : - Follow the Basic Mode specifications

      #### < 480px ([Extra Small viewport](/design/c/breakpoints/v1.0.0/#rd-extra-small))
      Same as above, dropdown just becomes 100% wide.

    contents:
      - type: wide image
        src: ./assets/redlines.course.mode.480.png

  - type: two column
    text: |
      #### Light theme

      Colors
      : - Header bar is [Off White (#f2f2f2)](/design/c/colors/v1.0.1/#rd-off-white-f2f2f2)
        - Main dropdown background is [Brightly Lit (#e6e6e6)](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6)
        - Local nav background is [Off White (#f2f2f2)](/design/c/colors/v1.0.1/#rd-off-white-f2f2f2)
        - Dropdown cap is [Boring (#a6a8ab)](/design/c/colors/v1.0.1/#rd-boring-a6a8ab)
        - Divider lines are [Hairline Gray (#d0d0d0)](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0)

      Typography
      : - Top level links are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([primary color](/design/c/typography/v1.0.0/#rd-primary-label-color))
        - All courses and other menu items are [large labels](/design/c/typography/v1.0.0/#rd-large-label) ([secondary color](/design/c/typography/v1.0.0/#rd-secondary-label-color))
        - Course heading is a [basic title](/design/c/typography/v1.0.0/#rd-basic-title)
        - Local nav options are basic label ([secondary color](/design/c/typography/v1.0.0/#rd-secondary-label-color))
        - Active nav option is [bold label](/design/c/typography/v1.0.0/#rd-bold-label) ([primary color](/design/c/typography/v1.0.0/#rd-primary-label-color))

    contents:
      - type: wide image
        src: ./assets/redlines.course.mode.320.png

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
