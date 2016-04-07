---
layout: component-yaml
title: Application Header
section: Components
redirect_from: /docs/ui-components/application-header/
version: 1.0.0
status: Implemented
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
  - name: .sketch mockup
    link: ./assets/o-app-header.sketch

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
      This is the simplest version of the header, just displaying the Pearson logo (with no link interaction), the help link, and (optionally) a Sign In link. The help link is designed to trigger the [Contextual Help component]().

      Use this mode when the user is signed out.

      ### Options

      #### Remove sign in link
      There is a single configuration option to remove the "Sign In" link. Use this option when displaying the sign in link in the header would be redundant (e.g. on the actual sign in page).

    contents:
      - type: wide image
        src: ./assets/signed-out-mode.png
        caption: The signed out header at two major breakpoints

  - type: section
    name: Basic Mode

  - type: two column
    text: |
      Represents the default signed in experience. Expands on the Signed Out Mode by making the Pearson Logo a home link (currently [www.console.pearson.com](http://console.pearson.com)) and including the *User Menu*.

      The User Menu is labelled with the user's first name and contains My Account and Sign Out options. At widths less than 768px it is condensed into the *Mobile Menu* which relabels the dropdown as "Menu" and extends it with a list of courses (if the consuming app has that information).

      Use this mode when the user logs in to a standard Pi session and needs a default header experience.
    contents:
      - type: wide image
        src: ./assets/basic-mode-1024.png
        caption: The Basic Mode header at desktop sizes

  - type: two column
    text: |
      ### Options

      #### Course listing
      The Mobile Menu can display a list of Next Gen courses for the current user. If the list is longer than five items in length it's truncated and a "See X more courses" item is added at the bottom.

      Use this when the consuming application contains a list of courses for the current user.
    contents:
      - type: wide image
        src: ./assets/basic-mode-480.png
        caption: The basic header with a course list in the mobile menu

  - type: section
    name: Course Mode

  - type: two column
    text: |
      At desktop sizes this is similar to the Basic Header. The Mobile Menu gains an "All Courses" link and any local navigation for the course. The Course Mode also offers the ability to enable a light theme.

      Use this mode when a user launches a specific product (such as Revel, Pearson Reader, etc.) with local navigation.

      ### Options

      #### Course navigation
      At narrower breakpoints the Mobile Menu should contain the navigation for the course. The title of the current course will head this section. Use this option when the course offers any high level local navigation options.

      #### Light theme
      The header can switch it's color from black to a light gray. This option should be used when the user is viewing a reading, assessment, or some other type of content which requires their complete focus.
    contents:
      - type: wide image
        src: ./assets/course-mode.png
        caption: Course mode at mobile and desktop sizes

  - type: section
    name: Integration Mode

  - type: two column
    text: |
      In this version of the header many options are removed that aren't relevant in cases where a user is linking their account to a 3rd party (e.g. BlackBoard, Canvas, or other LMSs). The Logo is no longer a link and the right side of the header only contains a help link.

      Use this mode when the user's session is managed by a third party and the user shouldn't have access to platform session features (e.g. sign out, My Account). Specifically, this applies to 3PL/LMS integration scenarios.
    contents:
      - type: wide image
        src: ./assets/integration-mode.png
        caption: Integration mode

  - type: section
    name: Redlines

  - type: two column
    text: |
      For detailed documentation on colors, typography, sizes, spacing, etc. please see the [redlines available here](./assets/redlines.zip).

changelog:
  - version: 1.0.0
    changes: Initial release
---
