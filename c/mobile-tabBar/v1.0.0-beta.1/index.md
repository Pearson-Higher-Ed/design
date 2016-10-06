---
layout: component-yaml
title: Mobile - Tab Bar
section: Components
redirect_from: /docs/ui-components/mobile-tab-bar/
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
  This component defines the standard visual style for the iOS tab bar.
features:
  - active and inactive states
  - standard iOS typography and sizing
usage_guidelines: |
  Every instance of an iOS tab bar should come from this component.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/tabBar_ios.png
        caption: iOS tab bar in REVEL
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

      - login_ios:
        <https://zpl.io/23oyI7>

      ### Android

      - tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
