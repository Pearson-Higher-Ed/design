---
layout: component-yaml
title: Breadcrumbs
section: Components
version: 1.0.0-beta.5
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
implemented: https://github.com/Pearson-Higher-Ed/elements-sdk
downloads:
  - name: Sketch
    link: ./assets/breadcrumbs_1.4.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1CkiA8PtZ23itHbAuc_LczZk5ulojSp6G95aE8lUyFL8/edit?usp=sharing
dependencies:
  - name: Colors
    version: 3.0.1
  - name: Icons
    version: 2.4.0
  - name: Typography
    version: 2.1.1

tagline: Use breadcrumbs to help users keep track of their locations within a website.

usage_guidelines: |
  This component is a visual style guide only.

blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Breadcrumbs are used primarily to give users a secondary means of navigating a website. They provide a trail of links for the user to follow back to the starting or entry point. Typically, breadcrumbs display a hierarchy of the current page in relation to the website's structure.

      Note: Images used on this page are scaled up to make them easier read, go to the redlines section below for specification.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-titled-trail-2x.png
        caption: Breadcrumbs trail example.

  - type: section
    name: Rendering

  - type: two column
    text: |
      ### Breadcrumbs With Page Title
      A breadcrumbs trail is typically rendered as a trail of links. At the end of the trail, the page currently being viewed is displayed as a bold non-link font.

      A greater-than sign (>) serves as hierarchy separator, as in the format of Parent page > Child page.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-titled-trail-2x.png
        caption: Breadcrumbs trail ended with page title.

  - type: two column
    text: |
      ### Breadcrumbs With No Page Title
      If page has a title, do not include the title in the breadcrumbs to avoid redundancy.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-no-title-2x.png
        caption: Breadcrumbs trail with parent level links.

  - type: two column
    text: |
      ### Mobile or Single Level Directory
      Provide a link back to previous page.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-mobile-2x.png
        caption: Breadcrumbs trail for mobile or single level directory.

  - type: section
    name: Placement

  - type: two column
    text: |
      Breadcrumbs are placed horizontally across the top of a web page, often below navigation or application header.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-placements-2x.png
        caption: Examples of breadcrumbs trail placements for desktop and mobile screens. Note on mobile, the breadcrumb is a link back to previous level.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Separator Icon
      : - [breadcrumb-18](/c/icons/v2.4.0/#icons--breadcrumb)
        - [Medium Gray](/c/colors/v3.0.1/#colors--medium-gray)
        - Padding-left 4px
        - Padding-right 4px

      Back Icon
      : - [chevron-back-sm-18](/c/icons/v2.4.0/#icons--chevron-back-sm)
        - [Medium Gray](/c/colors/v3.0.1/#colors--medium-gray)
        - Padding-left 4px
        - Padding-right 4px

      Links Typography
      : - [Small UI Text](/c/typography/v2.1.1/#typography--small-ui-text)
        - [Digital Pearson Blue](/c/colors/v3.0.1/#colors--digital-pearson-blue)
        - An underline is added on hover.

      Page Title Typography
      : - [Small Bold UI Text](/c/typography/v2.1.1/#typography--small-bold-ui-text)
        - [Charcoal](/c/colors/v3.0.1/#colors--charcoal)

    contents:
      - type: narrow image
        src: ./assets/breadcrumbs-redlines-2x.png

changelog:
  - version: 1.0.0-beta.5
    changes: |
      - ADDED: underlined link style on hover
  - version: 1.0.0-beta.4
    changes: |
      - CHANGED: Placement image to include a mobile screen
      - ADDED: Images are scale up description
  - version: 1.0.0-beta.3
    changes: |
      - CHANGED: Page titles are displayed in bold font
      - REMOVED: Path and attribute based breadcrumbs
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Page titles are displayed in larger font
  - version: 1.0.0-beta.1
    changes: Initial version

---
