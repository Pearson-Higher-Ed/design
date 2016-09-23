---
layout: component-yaml
title: Mobile - Account
section: Components
redirect_from: /docs/ui-components/mobile-account/
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
  This component defines the standard visual style for the user account screen.
features:
  - user name and ID
  - outbound links to Support, ToS and Privacy Policy.
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
        src: ./assets/ios/account_ios.png
        caption: user account screen


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

      - account_ios:
        <https://zpl.io/Z1n7GLS>

      ### Android



# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
