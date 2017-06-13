---
layout: component-yaml
title: Pagination
section: Components
sdk: stand_alone
redirect_from: /docs/ui-components/calendar/
status: active
version: 1.0.0
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

downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1zMbyMPRZcVNGwx13Tkhb4bjhPQq-s3YtQxf7D0LHZyw/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/pagination.sketch

dependencies:
  - name: Typography
    version: 2.0.0
  - name: Colors
    version: 2.1.0
  - name: Icons
    version: 2.1.0

tagline: |
  This component defines the standard visual style for the pagination element.
features:
  - Defines all state styles (hover, selected, highlighted range, disabled)
  - Provides a compact style for responsive or space limited use cases
usage_guidelines: |
  Pagination provides the user with a natural break from reading or scanning the contents of the dataset, and allows them to re-evaluate whether they wish to continue looking through more data, or navigate away from the page.

blocks:
  - type: section
    name: Standard pagination

  - type: two column
    text: |
      Provide pagination control to browse from page to page. Let the user browse to the previous and next pages by providing links to such actions.

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
      : - Page number and arrow buttons: min-width of 44px, height of 44px
        - Ellipses: width 32px , height 44px
        - An underline appears 6px below the text

      Typography
      : - Default text is [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic)

      Normal page style
      : - [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic)
        - [Medium Gray](/design/c/colors/v2.1.0/#rd-medium-gray)

      Selected style
      : - [UI Text - Bold](/design/c/typography/v2.0.0/#rd-ui-text-bold)
        - 2px underline
        - Text and underline are [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)

      Hover style
      : - Add a [Medium Gray](/design/c/colors/v2.1.0/#rd-medium-gray), 2px underline to the normal style

      Focus
      : - Use the browser default focus outline
        - Also use the hover style

      Icons
      : - chevron-next-sm-18
        - chevron-back-sm-18
        - ellipsis-18

      Arrows
      : - Forward/Back arrow are inside a 28px diameter [concrete](/design/c/colors/v2.1.0/#rd-concrete) circle

    contents:
    - type: wide image
      src: ./assets/spec_basic.png

  - type: two column
    text: |
      ### Compact Pagination

      Spacing
      : - Next/Prev buttons are 12px from the current location

      Location info
      : - Uses [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic) style
        - Should either say "Page X of Y" or current range: "X&nbsp;–&nbsp;Y of Z"

    contents:
      - type: wide image
        src: ./assets/spec_compact.png


changelog:
  - version: 1.0.0
    changes: Initial version
---
