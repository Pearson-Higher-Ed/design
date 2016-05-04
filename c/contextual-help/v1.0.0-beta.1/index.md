---
layout: component-yaml
title: Contextual Help
section: Components
redirect_from: /docs/ui-components/contextual-help/
version: 1.0.0-beta.1
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Mike Caskey
    email: mike.caskey@pearson.com
  - role: User Assistance
    name: Annie Persson
    email: ann.persson@pearson.com

tagline: |
  This component presents help content and articles within the product experience so that users can answer their questions without the interruption of opening a separate help system in a new tab.
usage_guidelines: |
  Every url in the next gen platform should use the Contextual Help component, at a minimum configuring the two default items in the Help List.

blocks:
  - type: section
    name: Help List

  - type: two column
    text: |
      This displays a listing of help articles relevant to the current url. Every url in the next gen platform should offer a Help List which follows these guidelines:

      * A ‘Contact Us’ article must always be displayed at the bottom of the list.
      * A ‘Popular Resources’, ‘FAQ’, or similar article relevant to the current url must be displayed in the second to last position.
      * Between 0-5 custom articles specifically relevant to features/tools accessible at the current url should be displayed at the top of the list.
      * Custom articles must address features/tools which are always accessible by the current user at the current url. If the feature/tool is only available under certain conditions it must be documented in a Standalone Article instead.
      * Custom articles should be tailored to the user’s role (educator/student/TA) where relevant.
      * Custom articles should be titled with a question.
      * The Help List must be accessed exclusively through Header Activation, described below.


  - type: section
    name: Standalone Articles

  - type: two column
    text: |
      In situations where a feature or tool only appears on a url under certain conditions any related help content must be documented with a Standalone Article. Usage guidelines:

      * Standalone Articles must be accessed exclusively through Embedded Activation, described below.
      * Standalone Articles must not appear in the Help List.

  - type: section
    name: Standalone Articles

  - type: two column
    text: |
      The standard interaction with contextual help is to click the “Help” link in the Application Header which opens the drawer and displays the Help List for the current url.


  - type: section
    name: Embedded Activation

  - type: two column
    text: |
      If a feature or tool within a page corresponds to a specific Help Article then it can contain an embedded link which opens the drawer directly to the relevant article. This can be either a Standalone Article or one found in the page’s Help List.

  - type: section
    name: Help Article Formatting

  - type: two column
    text: |
      Authors should follow these conventions when writing articles for the contextual help component:

      * Articles must be written at the 9th grade reading level.
      * Articles must not link out to 24/7 or Online Help System  content.
      * Articles must not link to other articles in the contextual help component.
      * Articles should link to external assets such as EI guides, Marketing PDFs, Videos, etc. where relevant.
      * Articles should not contain tables.
      * Articles must follow the formatting guidelines.


      ### Formatting guidelines

      **Titles**  
      Every article should have a single title at the top, encoded as an `<h4>` tag.

      **Headings**  
      Articles should structure their content using `<h5>` and `<h6>` tags.

      **Body copy**  
      Article body copy must be written at a 9th grade reading level.

      **Bold and italics**  
      Should be used normally to provide emphasis. The name of interactive elements (i.e. button labels) must be bolded.

      **Unordered lists**  
      Should be used to organize content. Must not be nested more than two levels.

      **Ordered lists**  
      Should be used to describe steps in a workflow. Should not exceed 9 items in length.

      **Tips**  
      Should be used to give handy bits of information more emphasis.

      **Warnings**  
      Should be used to call attention to tricky or potentially undoable activities.

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
