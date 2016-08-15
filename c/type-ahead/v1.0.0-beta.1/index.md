---
layout: component-yaml
title: Type Ahead
section: Components
redirect_from: "/docs/ui-components/type-ahead/"
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
    link: ./assets/type-ahead.mockup.sketch
dependencies:
  - name: Inputs
    version: 1.0.0

tagline: This component defines the standard visual style for the type ahead.
features:
  - Initialized upon focus
  - Filtered as the user inputs or deletes values
  - Results ordered by numerical and alphabetical descending (default) or ascending order
  - Initial results filtered upon popularity
  - Results can be grouped
  
usage_guidelines: |
  Use this component in situations where the user will be keying in values in order to search for a result.

blocks:
  - type: section
    name: Default States

  - type: two column
    text: |
      ###Search and Standard Text Input
      The user’s initial view of the type-ahead functionality will be a search field with the place holder text ‘Search’. Type-ahead can also be implemented within a standard text input field element. The functionality can be communicated through the placeholder text.

    contents:
      - type: wide image
        src: ./assets/illustration.png
        caption: Illustrating the two different place holder values.

  - type: section
    name: Functionality

  - type: two column
    text: |
      ###Focus and Input
      Once the user clicks into the field and begins to type characters the response will be a displayed list of suggestions. The response can be buffered if the input can not be kept up with, but a response (results) will be surfaced as soon as resources are available. A user may also back characters out, therefore changing the responses.

      ###Response and Results
      The responses that are surfaced to the user are based upon character input, but they can be initially scoped through numerous critieria, dependent upon need and how the componenet is being utilized. (e.g. Geo-location, popularity, etc.) 

      The results can be displayed in ascending alphabetical order (default) or descending alphabetical order. The user's typed-in characters will be bolded within the displayed results. Display of results, both vertically (number) as well as horizontally (characer / word length) can be set determined upon available space. But it is recommended that the list of results not be longer than 20 at any given time.

      ###Selected Values
      A selected value will be displayed within the field. 
    contents:
      - type: narrow image
        src: ./assets/illustration2.png
        caption: List of results.
      - type: narrow image
        src: ./assets/illustration4.png
        caption: Selected result.
  - type: section
    name: Constant Values

  - type: two column
    text: |
      There may be situations wherein constant values (e.g. Institution lookup) will need to be surfaced to the user no matter what values or characters have been input. These will be displayed at the bottom of the list of results and visually delineated.
    contents:
      - type: narrow image
        src: ./assets/illustration3.png
        caption: Constant values shown below results.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Search

      Standard implementation
      : - As per default browser functionality
        - Grouping (as provided by standard markup control)
        - Basic label font

    contents:
      - type: narrow image
        src: ./assets/redline.focus.search.png

  - type: two column
    text: |
      ### Type-ahead

      List
      : - Horizontal Rule 1px solid [Hairline Gray (#d0d0d0)](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0)
        - Permanent values \#D6D6D6
        - Typed in values bolded across all suggestions

    contents:
      - type: narrow image
        src: ./assets/redline.constant.values.png

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false
---
