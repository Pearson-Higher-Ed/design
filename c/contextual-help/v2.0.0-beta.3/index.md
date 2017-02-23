---
layout: component-yaml
title: Contextual Help
section: Components
redirect_from: /docs/ui-components/contextual-help/
version: 2.0.0-beta.3
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1YjPJz6ZJgG6m4iJvtTFYuhIBGVuefHpzYx3H_lPU-vo/edit?usp=sharing
  - name: .sketch
    link: ./assets/contextual-help.mockup.sketch
  - name: .ai
    link: ./assets/contextual-help.mockup.ai
  - name: Authoring Guidelines
    https: https://docs.google.com/document/d/1tQVifP2ynJhHlg7R-Odk2Ej1qQxMs0SQ67fYzTlYjM8/edit?ts=578397b6

dependencies:
  - name: Drawer
    version: 1.0.0
  - name: Typography
    version: 1.0.0
  - name: Application Header
    version: 1.1.0
  - name: Icons
    version: 1.1.0

tagline: |
  Presents help and support articles within the product experience so that users can answer their questions without the interruption of opening a separate help system in a new tab.
usage_guidelines: |
  Every URL in the Next Gen platform should use the Contextual Help component, at a minimum configuring the two default items in the Help List.

features:
  - Answer user questions without leaving the product experience
  - Present articles based on the user's current location
  - In-page triggers can jump directly to relevant article
  - Fully responsive and accessible

blocks:
  - type: section
    name: Help List

  - type: two column
    text: |
      Displays a listing of help articles relevant to the current url. Every url in the next gen platform should offer a Help List through this component. Common functionality includes:

      * Universal access through the [Header](/design/c/application-header/v2.0.0-beta.2/#rd-integration-mode)
      * Standard location of 'Contact Support' information
      * Articles relevant to the user's current location and role

      Selecting an article opens it within a [detail view](/design/c/drawer/v2.0.0-beta.2/#rd-detail-view) in the drawer.
    contents:
      - type: narrow image
        src: ./assets/help-list-2x.png
        caption: Initially the drawer presents a list of contextual help and support articles for the page.
      - type: narrow image
        src: ./assets/help-detail-2x.png
        caption: Selecting an article navigates into it, presenting the full content.



  - type: section
    name: Standalone Articles

  - type: two column
    text: |
      In situations where a feature or tool only appears on a url under certain conditions any related help content should be documented with a Standalone Article. This presents just the relevant article, without access to the overall Help List.

      * Standalone Articles must be accessed exclusively through Embedded Activation, described below.
      * Standalone Articles must not appear in the Help List.
    contents:
      - type: narrow image
        src: ./assets/help-standalone-2x.png
        caption: Example standalone article. Note there is not an option to go back to the overall Help List from here.

  - type: section
    name: Embedded Activation

  - type: two column
    text: |
      Selecting the "Help" link in the [App Header](/design/c/application-header/v2.0.0-beta.2/#rd-signed-out-mode) will open the Help List. You can also navigate directly to an article (either a standalone article or one from the list) through embedded activation.

      A Help icon or a "Learn more" link can be used to activate an article from within the page. These should be positioned near the relevant portion of the page. Avoid mixing and matching both styles in the same page.
    contents:
      - type: wide image
        src: ./assets/embedded-activation.png
        caption: Two examples of controls that can be embedded in the page. Normally you wouldn't mix and match the two styles like this.

  - type: section
    name: Article Features

  - type: two column
    text: |
      ### Accordions
      Content may be grouped into accordions which help organize and condense information.

    contents:
      - type: narrow image
        src: ./assets/help-according-2x.png
        caption: Example of accordions.



  - type: section
    name: Writer's Guide

  - type: two column
    text: |
      Use [the authoring guidelines](https://docs.google.com/document/d/1tQVifP2ynJhHlg7R-Odk2Ej1qQxMs0SQ67fYzTlYjM8/edit?ts=578397b6) when authoring articles for the Contextual Help component.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Help List

      Container
      : - [Drawer Basic View](/design/c/drawer/v2.0.0-beta.2/#rd-basic-view)

      Spacing
      : - 25px margin above article title and below article excerpt

      Typography
      : - Article title is a [UI Text - Bold](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold)
        - Article excerpt is (#6A7070) [UI Text - Basic](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)
        - Excerpt length is limited to 80 characters

      Content
      : - Final item in list is always the standard 'Contact Support' article
    contents:
      - type: wide image
        src: ./assets/readline-list-2x.png

  - type: two column
    text: |
      ### Article Detail

      Container
      : - [Drawer Detail View](/design/c/drawer/v2.0.0-beta.2/#rd-detail-view) for articles from the help list
        - [Drawer Basic View](/design/c/drawer/v2.0.0-beta.2/#rd-basic-view) for standalone articles
        - Title is 'Help Topic' for standalone articles

      Typography
      : - 1st level title is a [UI Headings - Section - Basic](/design/c/typography/v2.0.0-beta.9/#rd-ui-headings-section-basic)
        - 2nd level title is a [UI Text - Bold](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold)
        - Main content is (#6A7070) [UI Text - Basic](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)
        - Lists, italics, bold, and other basic typography features follow the standard [Typography component](/design/c/typography) styles
    contents:
      - type: wide image
        src: ./assets/readline-detail-2x.png

  - type: two column
    text: |
      ### Accordion

      Spacing
      : - 25px above, below and between accordions
        - 25px separating the title from accordion content
        - 12px padding between icon and title

      Typography
      : - Titles are [UI Text - Bold](/design/c/typography/v2.0.0-beta.8/#rd-ui-text-bold)
        - Main content is (#6A7070) [UI Text - Basic](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)
        - Accordion content follows the same type style as the surrounding text

      Pearson Icons
      : - [pivot-close-18] for unopened items
        - [pivot-open-18] for opened item

      Behavior
      : - Users can open accordion items independently from each other (i.e. opening an item doesn't autoclose other items that are already open)
    contents:
      - type: wide image
        src: ./assets/readline-according-2x.png


  - type: style table
    styles:
      - Help List
      - Standalone Article
      - Embedded Help (Icon)
      - Embedded Help (Text)


changelog:
  - version: 2.0.0-beta.3
    changes: |
      - CHANGED: Deleted authoring guidelines section.
  - version: 2.0.0-beta.2
    changes: |
      - CHANGED: Re-skin of current Console header to new branding.
  - version: 2.0.0-beta.1
    changes: |
      - CHANGED: Change to new design
  - version: 1.0.0-beta.6
    changes: |
      - ADDED: Sketch and Illustrator mockup files.
      - CHANGED: Icons to match latest icons component
  - version: 1.0.0-beta.6
    changes: |
      - UPDATED: Include latest feedback from UA.
  - version: 1.0.0-beta.5
    changes: |
      - UPDATED: Author guidelines with latest UA documentation.
      - ADDED: Accessibility checklist
  - version: 1.0.0-beta.4
    changes: |
      - ADDED: Accordion styles
      - ADDED: Tip, Note, and Warning styles
      - CHANGED: Updated author guidelines per latest from UA
  - version: 1.0.0-beta.3
    changes: |
      - CHANGED: Updated formatting guidelines with latest documentation.
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Images
      - ADDED: Initial redlines
      - ADDED: Dependency links
      - ADDED: Embedded activation triggers
      - CHANGED: Updated formatting guidelines
  - version: 1.0.0-beta.1
    changes: Initial version
---
