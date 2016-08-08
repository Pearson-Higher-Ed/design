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
implemented: false
downloads:
  - name: Sketch
    link: ./assets/institution-lookup.mockup.sketch
dependencies:
  - name: Inputs
    version: 1.0.0
  - name: Type-ahead
    version:

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
      ###Anonymous and First Time
      The user's initial (or an anonymous user's) view of the institution lookup will be a search field with the place holder text 'Institution or School'. This is also true if there are no values available, or none associated with an account.

      ###Affiliated Institution
      If the user is signed in, and there is at least one institution or school associated with the user's account, the control will then be displayed as a select box with the primary or only institution displayed as the default value.
    contents:
      - type: narrow image
        src: ./assets/illustration.png
        caption: Illustrating the two different place holder values.

  - type: section
    name: Pre-Set Values (Select List)

  - type: two column
    text: |
      If a user has one or more institutions associated with their account, these will be displayed in a traditional dropdown manner. The Primary institution will be indicated as per default browser select functionality.

      It is possible for a user to need to select more than one institution at a time. (e.g. An instructor who wishes to view resluts from two institutions at one time.) In this case, the 'multiple' attribute of the `<select>` element may be used. Due to the way that `<select>` then displays the options when using 'multiple', it is recommended that a css or js option be pursued for aesthetic purposes.

      The value: 'I am not affiliated with an institution or school' should be shown when appropriate. (NOTE: Does this clear a user's list of associated insitutions?)
    contents:
      - type: narrow image
        src: ./assets/illustration2.png
        caption: Displayed values from a user's account.
  - type: section
    name: Type-ahead Functionality

  - type: two column
    text: |
      The type-ahead functionality will be initiated when the user either selects the field and begins typing, or if they select 'Search for an Institution or School' from the select dropdown. Either action will clear the select list values (minus the two static values: I am not affiliated with an institution or school. I do not see my institution or school.) and begin populating based upon the user's keyed in values.
    contents:
      - type: narrow image
        src: ./assets/illustration3.png
        caption: Type-ahead functionality.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Select

      Using optgroup
      : - As per default browser functionality
        - Grouping
        - Basic label font

    contents:
      - type: wide image
        src: ./assets/redline.dropdown.select.png

  - type: two column
    text: |
      ### Type-ahead

      List
      : - Horizontal Rule 1px solid [Hairline Gray (#d0d0d0)](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0)
        - Permanent values \#D6D6D6
        - Typed in values bolded across all suggestions

    contents:
      - type: wide image
        src: ./assets/redline.typeahead.list.png

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false
---
