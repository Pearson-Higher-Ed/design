---
layout: component-yaml
title: Mobile - Assignment List
section: Components
redirect_from: /docs/ui-components/mobile-assignment-list/
version: 1.0.0-beta.1
status: active
implemented: false
private: false
people:
  - role: Product Owner
    name: Mike Pace
    email: michael.pace@pearson.com
  - role: Designer
    name: Adam Beckley
    email: adam.beckley@pearsoned.com
  - role: Designer
    name: Xin Hu
    email: xin.hu@pearson.com
dependencies:

tagline: |
  This component defines the standard visual style for the assignment list screen.
features:
  - due date
  - assignment title
  - assignment status (completed, not started, in-progress, overdue)
usage_guidelines: |
  The assignment list screen is used within ILP to view and access specific assignments for a particular course.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/assignment_list_ios.png
        caption: assignment list showing indicators for 1) completed 2) overdue 3) in progress and 4) not yet started assignments.

# ANDROID

  - type: section
    name: Android

  - type: two column
    text: tba

# REDLINES

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### iOS

      - assignment_list_ios:
        <https://zpl.io/4Y1wH>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
