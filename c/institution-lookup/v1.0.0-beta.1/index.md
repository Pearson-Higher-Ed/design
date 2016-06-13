---
layout: component-yaml
title: Institution Lookup
section: Components
redirect_from: "/docs/ui-components/institution-lookup/"
version: 1.0.0-beta.1
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Designer
    name: Jeff Faller
    email: jeffrey.faller@pearson.com
  - role: QA
    name: Eajaz
implementations:
  - type: Elements SDK
    link: https://pearson-elements-v0.surge.sh/elements/institution-lookup/
downloads:
  - name: Sketch
    link: ./assets/buttons.mockup.sketch
  - name: Illustrator
    link: ./assets/buttons.mockup.ai
dependencies:
  - name: Inputs
    version: 1.0.0

tagline: This component defines the standard visual style for the institution lookup.
features:
  - Dropdown, scrollable listing of alphabetized institutions 
  - Filtered by type-ahead functionality
  - Stateful, will show pre-selected values first
  - Sorted by geography, by ip. (e.g. OX in the U.S. may place Oxnard College high in the results, while in the U.K. it may place Oxford high.)
usage_guidelines: |
  Every instance of an institution dropdown should be based upon this component.

blocks:
  - type: section
    name: Default States

  - type: two column
    text: |
      The institution lookup will show the place holder text 'Institution or School' if there are no values available (anonymous state, none associated with account). If the user is signed in, and there is a primary (or single) institution or school associated with the user's account, this will be the displayed default value.
    contents:
      - type: narrow image
        src: ./assets/illustration.png
        caption: Illustrating the two available place holder values.

  - type: section
    name: Pre-Set Values (Dropdown List)

  - type: two column
    text: |
      If a user has one or more institutions associated with their account, these will be displayed in a traditional dropdown manner. The Primary institution will always be top of list.

      The value: 'I am not associated with an institution or school' should be shown if appropriate. (NOTE: Does this clear a user's list of associated insitutions?)
    contents:
      - type: narrow image
        src: ./assets/illustration2.png
        caption: Displayed values from a user's account.
  - type: section
    name: Type-ahead Functionality

  - type: two column
    text: |
      The type-ahead functionality will be initiated when the user either selects the field and begins typing, or if they select 'Search for an Institution or School'. Either action will clear the dropdown list values (minus the two static values: I am not associated with an institution or school. I do not see my institution or school.) and begin populating based upon the user's typed in values.
    contents:
      - type: narrow image
        src: ./assets/illustration3.png
        caption: Type-ahead functionality.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes

      Standard button
      : - 28px tall
        - 12px horizontal padding
        - Basic label font

      Large button
      : - 42px tall
        - 20px horizontal padding
        - large label font

      Small button
      : - 24px tall
        - 10px horizontal padding
        - Small label font

    contents:
      - type: narrow image
        src: ./assets/redlines.sizes.png
      - type: narrow image
        src: ./assets/redlines.sizes.2.png

  - type: two column
    text: |
      ### Corners
      All sizes use a 3px border radius.

  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - \#107ACA fill
        - \#0A4D80 border
        - Inverse font color

      Hover/Active
      : - \#0C5D99 fill
        - 0A4D80 border
        - inset shadow with 3px blur, rgba(0, 0, 0, 0.3) color

      Disabled
      : - \#9DC0DB fill
        - No border

    contents:
      - type: wide image
        src: ./assets/redlines.primary.png

  - type: two column
    text: |
      ### Default buttons

      Normal
      : - \#F8F8F8 fill
        - \#B3B3B3 border
        - Secondary font color

      Hover/Active
      : - \#E6E6E6 fill
        - \#B3B3B3 border
        - inset shadow with 2px blur, rgba(0, 0, 0, 0.3) color

      Disabled
      : - \#F2F2F2 fill
        - No border
        - \#A6A8AB text color
    contents:
      - type: wide image
        src: ./assets/redlines.default.png

  - type: two column
    text: |
      ### Link buttons

      Normal
      : - Just follow the standard link guidelines for color, underline, etc.

      Hover/Active
      : - Follow standard link styles

      Disabled
      : - \#9DC0DB text color
    contents:
      - type: wide image
        src: ./assets/redlines.link.png

changelog:
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Illustrator UI mockup file
      - FIXED: Proper link to elements SDK
      - FIXED: Images aren't downsized

  - version: 1.0.0-beta.2
    linkable: false
    changes: |
      - ADDED: Sketch UI mockup file

  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false
---
