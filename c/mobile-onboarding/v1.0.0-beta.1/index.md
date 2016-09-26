---
layout: component-yaml
title: Mobile - Onboarding
section: Components
redirect_from: /docs/ui-components/mobile-onboarding/
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
  This component defines the standard visual style for app onboarding.
features:
  - horizontal swipe through content
  - dismissible
  - supports up to 3? 5? screens
usage_guidelines: |
  Every instance of a mobile onboarding screen should come from this component.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/onboarding.png
        caption: onboarding


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

      - onboarding_ios:
      <https://zpl.io/ZvCyGI>

      ### Android



# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
