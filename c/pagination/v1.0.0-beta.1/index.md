---
layout: component-yaml
title: Pagination
section: Components
redirect_from: /docs/ui-components/calendar/
status: active
version: 1.0.0-beta.1
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
  - role: Designer
    name: Lynn Chang
    email: lynn.chang@pearson.com

tagline: |
  This component defines the standard visual style for the pagination element.
features:
  - Defines all state styles (hover, selected, highlighted range, disabled)
usage_guidelines: |
  Pagination provides the user with a natural break from reading or scanning the contents of the dataset, and allows them to re-evaluate whether they wish to continue looking through more data, or navigate away from the page.

blocks:
  - type: section
    name: Standard pagination

  - type: two column
    text: |
      Provide pagination control to browse from page to page. Let the user browse to the previous and next pages by providing links to such actions. Also, provide links to the absolute start and end of the dataset (first and last).

    contents:
      - type: narrow image
        src: ./assets/pagination_basic.png
        caption: The standard style

  - type: section
    name: Compact pagination

  - type: two column
    text: |
      A simple alternative version of pagination style.

    contents:
      - type: narrow image
        src: ./assets/pagination_compact.png
        caption: The compact style

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic Pagination

      Spacing
      : - Page number: 44x44px

      Page Number style
      : - Normal: Basic UI Text: 14px/18px(#6A7070)
        - Selected: Bold UI Text 14/18px (#252525), border 2px
        - Hover: Basic UI Text: 14px/18px(#6A7070), border 2px

    contents:
    - type: wide image
      src: ./assets/spec_basic.png

  - type: two column
    text: |
      ### Date States

      Spacing
      : - Page number: 44x44px
        - Ellipses: 44x32px

      Page Number style
      : - Normal: Basic UI Text: 14px/18px(#6A7070)
        - Selected: Bold UI Text 14/18px (#252525), border 2px
        - Hover: Basic UI Text: 14px/18px(#6A7070), border 2px


    contents:
      - type: wide image
        src: ./assets/spec_compact.png


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
