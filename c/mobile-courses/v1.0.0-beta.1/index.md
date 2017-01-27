---
layout: component-yaml
title: Mobile - Courses
section: Components
redirect_from: /docs/ui-components/mobile-courses/
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
  This component defines the standard visual style for the course screen.
features:
  - course title
  - course professor name
  - course information access
  - ability to download, update , delete course content
  - access to each course's assignments, performance, table of contents, notes and highlights, and search.
usage_guidelines: |
  The course screen is used within ILP to download, access, update, and delete course data.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: If no courses are available, the user is prompted to register for their course, with a link to Pearson support provided. Once a course is made available, the user may tap "Download Course" to retrieve the course data to be stored locally on the device.
    contents:
      - type: ios image
        src: ./assets/ios/courses_empty.png
        caption: empty state
      - type: ios image
        src: ./assets/ios/courses_download.png
        caption: course download
  - type: two column
    text: Once the course data has been downloaded, the data is made available to the user in the course card. If the course content is updated, a refresh banner is displayed for the user which will action the content update.
    contents:
      - type: ios image
        src: ./assets/ios/courses.png
        caption: course downloaded
      - type: ios image
        src: ./assets/ios/courses_update.png
        caption: updated course content
  - type: two column
    text: Tapping on the information icon will bring up the details for that course. The user can delete course content from here. If the course is no longer available to the user, it will appear inaccessible.
    contents:
      - type: ios image
        src: ./assets/ios/course_details.png
        caption: course details
      - type: ios image
        src: ./assets/ios/courses_expired.png
        caption: expired course


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

      - courses_empty:
        <https://zpl.io/Z4qhPr>

      - courses_download:
        <https://zpl.io/Z2mOILp>

      - courses:
        <https://zpl.io/Z1cy1rv>

      - courses_update:
        <https://zpl.io/ZFdX7p>

      - course_details:
        <https://zpl.io/Zf7cf9>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
