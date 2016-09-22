---
layout: component-yaml
title: Mobile - Login
section: Components
redirect_from: /docs/ui-components/mobile-login/
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
  This component defines the standard visual style for the login screen.
features:
  - validation of username and password
  - view password (Android only)
  - external URL for user assistance
  - single sign on
usage_guidelines: |
  Every instance of a mobile login screen should come from this component.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: The mobile login screen features the Pearson iterrobang logo, username field, and password field. A "need help" link leads to pearsonhighered.com/support/.
    contents:
      - type: narrow image
        src: ./assets/ios/login_ios.png
        caption: first load
      - type: narrow image
        src: ./assets/ios/login_ios_inactive.png
        caption: keyboard
  - type: two column
    text: Once the user has entered a valid username and password, the Sign In button becomes active. Unrecognized credentials will trigger a warning modal to the user.
    contents:
      - type: narrow image
        src: ./assets/ios/login_ios_active.png
        caption: entering credentials
      - type: narrow image
        src: ./assets/ios/login_ios_invalid.png
        caption: invalid

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
        https://zpl.io/Z1xy2c6

      - login_ios_inactive:
        https://zpl.io/Z2tuh0V

      - login_ios_active:
        https://zpl.io/Z1DpGj1

      - login_ios_invalid: 
        https://zpl.io/bvQpj

      ### Android



# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
