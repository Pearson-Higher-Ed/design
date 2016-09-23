---
layout: component-yaml
title: Mobile - Typography
section: Components
redirect_from: /docs/ui-components/mobile-typography/
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
  This component defines overall typography structure with mobile applications.
features:
  - min / max sizes for accessibility.
  - iOS and Android
  - Logout
  - App version
  - Copyright disclaimer
usage_guidelines: |
  Every instance of the user account screen should come from this component.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: narrow image
        src: ./assets/ios/typography_ios_size.png
        caption: typography sizes for iOS
      - type: narrow image
        src: ./assets/ios/typography_ios_color.png
        caption: typography colors for iOS


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

      - typography_ios_size:
        <https://zpl.io/2rOYbE>

      - typography_ios_color:
        <https://zpl.io/Z11BVqT>

      ### Android

      - tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
