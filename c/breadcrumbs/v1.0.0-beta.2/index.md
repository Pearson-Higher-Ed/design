---
layout: component-yaml
title: Breadcrumbs
section: Components
version: 1.0.0-beta.2
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
    link: ./assets/breadcrumbs_1.0.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1CkiA8PtZ23itHbAuc_LczZk5ulojSp6G95aE8lUyFL8/edit?usp=sharing
dependencies:
  - name: Colors
    version: 3.0.1
  - name: Icons
    version: 2.4.0
  - name: Typography
    version: 2.1.1

tagline: This component defines the standard visual style for breadcrumbs.
features:
  - Usage
  - Rendering
  - Types
  - Placement
  - Redlines

usage_guidelines: |
  Use this component to help users keep track of their locations within a website.

blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Breadcrumbs are used primarily to give users a secondary means of navigating a website. They provide a trail of links for the user to follow back to the starting or entry point. Typically, breadcrumbs display a hierarchy of the current page in relation to the website's structure or display the pages the user has visited before arriving on the current page.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-2x.png
        caption: Two examples of breadcrumbs trail.

  - type: section
    name: Rendering

  - type: two column
    text: |
      ### Breadcrumbs With Page Title
      A breadcrumbs trail is typically rendered as follows. Note the end of the trail, the page currently being viewed is displayed as a non-link.

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
        caption: Breadcrumbs trail with parent level links.

  - type: section
    name: Types

  - type: two column
    text: |
      ### Location
      Location based breadcrumbs are static and show the user where the page is located in the website's hierarchy. Best used for navigation schemes that have multiple levels (usually more than two levels).

    contents:
      - type: wide image
        src: ./assets/location-based-2x.png
        caption: Examples of location based breadcrumbs.

  - type: two column
    text: |
      ### Path
      Path based breadcrumbs display the pages the user has visited before arriving on the current page.

    contents:
      - type: wide image
        src: ./assets/path-based-2x.png
        caption: Examples of path based breadcrumbs.

  - type: two column
    text: |
      ### Attribute
      Attribute based breadcrumbs give information that categorizes the current page.

    contents:
      - type: wide image
        src: ./assets/attribute-based-2x.png
        caption: Examples of attribute based breadcrumbs.

  - type: section
    name: Placement

  - type: two column
    text: |
      Breadcrumbs are placed horizontally across the top of a web page, often below navigation or application header.

    contents:
      - type: wide image
        src: ./assets/breadcrumbs-placements-2x.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      Separator Icon
      : - breadcrumbs-18
        - Medium Gray
        - Padding-left 4px
        - Padding-right 4px

      Back Icon
      : - chevron-back-sm-18
        - Medium Gray
        - Padding-left 4px
        - Padding-right 4px

      Typography
      : - Small UI Text
        - Charcoal (default color)
        - Digital Pearson Blue (link color)

    contents:
      - type: narrow image
        src: ./assets/breadcrumbs-redlines-2x.png

changelog:
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Page titles are displayed in larger font
  - version: 1.0.0-beta.1
    changes: Initial version

---
