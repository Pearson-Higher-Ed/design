---
layout: component-yaml
title: Mobile - Search
section: Components
redirect_from: /docs/ui-components/mobile-search/
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
  This component defines the standard visual style for the search screen. This pattern applies to ILP only.
features:
  - content search
  - results populate in content order
usage_guidelines: |
  For ILP only. Additional search parameters to be added for future applications as they are designed.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/search_ios_new.png
        caption: empty state
      - type: ios image
        src: ./assets/ios/search_ios_results.png
        caption: results listing
      - type: ios image
        src: ./assets/ios/search_ios_noresults.png
        caption: no results found


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

      - search_ios_new:
        <https://zpl.io/1xonn7>

      - search_ios_results:
        <https://zpl.io/Z1BhHOf>

      - search_ios_noresults:
        <https://zpl.io/Z1BhHQj>

      ### Android



# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
