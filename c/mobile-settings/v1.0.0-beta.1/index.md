---
layout: component-yaml
title: Mobile - Settings
section: Components
redirect_from: /docs/ui-components/mobile-settings/
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
  This component defines the standard visual style for the user settings screen.
features:
  - configure notifications, alerts
  - allow cellular transfer
usage_guidelines: |
  Every instance of the user settings screen should come from this component.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: uses standard iOS settings view.
    contents:
      - type: ios image
        src: ./assets/ios/settings_ios.png
        caption: user settings screen
      - type: ios image
        src: ./assets/ios/settings_ios_alert.png
        caption: alert frequency


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

      - settings_ios:
        <https://zpl.io/29a1Aq>

      - settings_ios_alerts:
        <https://zpl.io/LWaxg>

      ### Android



# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
