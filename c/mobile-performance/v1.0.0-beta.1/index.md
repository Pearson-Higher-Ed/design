---
layout: component-yaml
title: Mobile - Performance
section: Components
redirect_from: /docs/ui-components/mobile-performance/
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
  This component defines the standard visual style for course-level performance.
features:
  - overall score displayed in points and percentage value
  - performance by assignment bar chart with paging across date ranges
  - performance by assignment list view with vertical scroll
  - time on task

usage_guidelines: |
  Every instance of course-level performance should come from this component.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: narrow image
        src: ./assets/ios/performance_ios.png
        caption: course-level performance


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

      - performance_ios:
        <https://zpl.io/Z1erOcW>

      ### Android



# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
