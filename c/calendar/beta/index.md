---
layout: component-yaml
title: Calendar
section: Components
redirect_from: /docs/ui-components/calendar/
status: active
version: 1.0.0-beta.1
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: ed.zee@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

tagline: |
  This component defines the standard visual style for the calendar element.
features:
  - Defines all date state styles (hover, selected, highlighted range, disabled)
  - Optional legend
usage_guidelines: |
  Every instance of a calendar element should come from this component.
  
blocks:
  - type: section
    name: Calendar
    
  - type: two column
    text: |
    The default calendar style shows the current month's dates alongside the prior and next months' dates in a single calendar month view.
    
    The current month is indicated at the top left.
    
    Controls for month-to-month traversal are in the upper right.
    contents:
      - type: narrow image
        src: ./assets/calendar-default.png

  - type: section
    name: Date States

  - type: two column
    text: |
      **Dates within current month** is the normal state.  It is available for user interaction.

      **Dates outside current month** is used for the prior and next months' dates that fit within the current single month calendar view.

      **Hover** state indicates that the user's mouse is located over a selectable date.  This can be applied to dates both outside and within the current month.

      **Selected** state indicates the user's selected date.  This can be applied to dates both outside and within the current month.

      **Disabled** state is used when a date is not selectable.  Disabled dates also cannot incur a hover state.
      
      **Highlight** state is used to indicate a range of selected dates.
    contents:
      - type: narrow image
        src: ./assets/states.png
        caption: The six basic states.
      -type: narrow image
        src: ./assets/states-context.png
        caption: Date states in context on a calendar.

  - type: section
    name: Legend (optional)

  - type: two column
    text: |
      A legend can be included optionally if needed to lend more context to one of the states.
    contents:
      - type: narrow image
        src: ./assets/calendar-legend.png
