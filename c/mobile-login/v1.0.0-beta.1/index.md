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

# IOS

blocks:
  - type: section
    name: iOS

  - type: two column
    text: The mobile login screen features the Pearson iterrobang logo, username field, and password field. A "need help" link leads to pearsonhighered.com/support/.
    contents:
      - type: narrow image
        src: ./assets/ios/login_1.png
        caption: first load
      - type: narrow image
        src: ./assets/ios/login_2.png
        caption: keyboard
  - type: two column
    text: Invalid credentials will trigger a warning modal to the user.
    contents:
      - type: narrow image
        src: ./assets/ios/login_3.png
        caption: entering credentials
      - type: narrow image
        src: ./assets/ios/login_4.png
        caption: validating
      - type: narrow image
        src: ./assets/ios/login_5.png
        caption: invalid

# ANDROID

  - type: section
    name: Android

  - type: two column
    text: The mobile login screen features the Pearson iterrobang logo, username field, and password field. A "need help" link leads to pearsonhighered.com/support/.
    contents:
      - type: narrow image
        src: ./assets/android/login_1.png
        caption: first load
      - type: narrow image
        src: ./assets/android/login_2.png
        caption: keyboard
  - type: two column
    text: The user can tap the eye icon to hide/reveal the password. Invalid credentials will trigger a warning modal to the user.
    contents:
      - type: narrow image
        src: ./assets/android/login_3.png
        caption: entering credentials
      - type: narrow image
        src: ./assets/android/login_3a.png
        caption: password revealed
      - type: narrow image
        src: ./assets/android/login_5.png
        caption: invalid

# REDLINES

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Standard

      Overlay
      : - Background Color: rgba(0, 0, 0, 0.50)

      Window
      : - Width: 80% of Viewport (100% for [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) Viewports)
        - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Border: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)

      Title Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Text: [Large Title](/design/c/typography/v1.0.0/#rd-large-title)
        - Color: [Pitch (#231F20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)
        - Padding: 11px
        - Icon: [fa-close](/design/c/icons/v1.0.0/#rd-times)
        - Border Bottom: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)

      Content Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Text: [Basic Body](/design/c/typography/v1.0.0/#rd-basic-body)
        - Padding: 15px

      Footer Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Padding: 11px
        - Border Top: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)
        - Buttons: [Standard Size](/design/c/buttons/v1.0.0/#rd-standard-button)

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
