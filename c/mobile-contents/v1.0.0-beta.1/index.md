---
layout: component-yaml
title: Mobile - Table of Contents
section: Components
redirect_from: /docs/ui-components/mobile-contents/
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
  This component defines the standard visual style for the table of contents within a digital textbook.
features:
  - book title
  - book authors
  - book cover thumbnail
  - placeholder graphic for missing cover
  - chapter (first level) titles
  - section (second level) titles
  - ability to navigate to any chapter / section (first level / second level)
usage_guidelines: |
  The table of contents allows the user to navigate to any location within their digital textbook.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/toc_ios.png
        caption: with book cover asset
      - type: ios image
        src: ./assets/ios/toc_noImage_ios.png
        caption: missing book cover asset

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

      - toc_ios:
        <https://zpl.io/1bO4sX>

      - toc_noImage_ios:
        <https://zpl.io/ZwuahL>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
