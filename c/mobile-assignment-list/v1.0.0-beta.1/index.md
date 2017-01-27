---
layout: component-yaml
title: Mobile - Assignment Module
section: Components
redirect_from: /docs/ui-components/mobile-assignment-module/
version: 1.0.0-beta.1
status: active
implemented: false
private: true
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
  This component defines the standard visual style for the assignment module screen in REVEL.
features:
  - due date
  - assignment title
  - assignment resources
  - assignment status (completed, not started, in-progress, overdue)
  - assignment point value
usage_guidelines: |
  The assignment module screen is used within ILP to view and access a specific assignment for a particular date.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/assignment_module_ios.png
        caption: assignment module showing indicators for completed, in progress and not yet started assignment resources.

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

      - assignment_module_ios:
        <https://zpl.io/1Xe0r>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
