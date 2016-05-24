---
layout: component-yaml
title: Contextual Help
section: Components
redirect_from: /docs/ui-components/contextual-help/
version: 1.0.0-beta.2
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

dependencies:
  - name: Drawer
    version: 1.0.0-beta.7
  - name: Typography
    version: 1.0.0
  - name: Application Header
    version: 1.1.0-beta.3

tagline: |
  This component presents help content and articles within the product experience so that users can answer their questions without the interruption of opening a separate help system in a new tab.
usage_guidelines: |
  Every url in the next gen platform should use the Contextual Help component, at a minimum configuring the two default items in the Help List.

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
      This displays a listing of help articles relevant to the current url. Every url in the next gen platform should offer a Help List through this component. Common functionality includes:

      * Universal access through the [Header](/design/c/application-header/v1.1.0-beta.3/#rd-signed-out-mode)
      * Standard location of 'Contact Support' information
      * Articles relevant to the user's current location and role

      Selecting an article opens it within a [detail view](/design/c/drawer/v1.0.0-beta.7/#rd-detail-view) in the drawer.
    contents:
      - type: narrow image
        src: ./assets/help-list.png
        caption: Initially the drawer presents a list of help articles for the page.
      - type: narrow image
        src: ./assets/article-detail.png
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
        src: ./assets/standalone-article.png
        caption: Example standalone article. Note there is not an option to go back to the overall Help List from here.

  - type: section
    name: Embedded Activation

  - type: two column
    text: |
      Selecting the "Help" link in the [App Header](/design/c/application-header/v1.1.0-beta.3/#rd-signed-out-mode) will open the Help List. You can also navigate directly to an article (either a standalone article or one from the list) through embedded activation.

      A Help icon or a "Learn More" link can be used to activate an article from within the page. These should be positioned near the relevant portion of the page.
    contents:
      - type: wide image
        src: ./assets/embedded-activation.png
        caption: Two examples of controls that can be embedded in the page. Normally you wouldn't mix and match the two styles like this.

  - type: section
    name: Help Article Formatting

  - type: two column
    text: |
      Authors should follow these conventions when writing articles for the contextual help component:
    contents:
      - type: text
        content: |

          ### Do
          * Write articles at the 9th grade reading level.
          * Link to external assets such as EI guides, Marketing PDFs, Videos, etc. where relevant.
          * Follow the formatting guidelines.
          * Title articles with a question.
          * Tailor articles to the user's role, where appropriate.
          * Include a ‘Popular Resources’, ‘FAQ’, or similar article relevant to the current url at the end of your article list.

          ### Don't
          * Link out to 24/7 or Online Help System  content.
          * Link to other articles in the contextual help component.
          * Include tables.
          * Include more than 5 custom articles per page.
          * Include articles about features/tools which aren't permanently accessible from the current URL in the Help List. (Use standalone articles instead.)

          ### Formatting guidelines

          #### Titles
          Every article should have a single title at the top, encoded as an `<h4>` tag.

          #### Headings
          Articles should structure their content using `<h5>` and `<h6>` tags.

          #### Body copy
          Article body copy must be written at a 9th grade reading level.

          #### Bold and italics
          Should be used normally to provide emphasis. The name of interactive elements (i.e. button labels) must be bolded.

          #### Unordered lists
          Should be used to organize content. Must not be nested more than two levels.

          #### Ordered lists
          Should be used to describe steps in a workflow. Should not exceed 9 items in length.

          #### Tips
          Should be used to give handy bits of information more emphasis.

          #### Warnings
          Should be used to call attention to tricky or potentially undoable activities.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Help List

      Container
      : - [Drawer Basic View](/design/c/drawer/v1.0.0-beta.7/#rd-basic-view)

      Dimensions
      : - 20px margin above article title and below article excerpt
        - 10px between title and excerpt

      Typography
      : - Article title is a [Large Label](/design/c/typography/v1.0.0/#rd-large-label), with [link formatting](/design/c/typography/v1.0.0/#rd-links)
        - Article excerpt is [Small Body](/design/c/typography/v1.0.0/#rd-small-body)
        - Excerpt length is limited to 80 characters

      Content
      : - Final item in list is always the standard 'Contact Support' article
    contents:
      - type: wide image
        src: ./assets/redlines.help-list.png

  - type: two column
    text: |
      ### Article Detail

      Container
      : - [Drawer Detail View](/design/c/drawer/v1.0.0-beta.7/#rd-detail-view) for articles from the help list
        - [Drawer Basic View](/design/c/drawer/v1.0.0-beta.7/#rd-basic-view) for standalone articles

      Typography
      : - Title is a [Level 2 Heading](/design/c/typography/v1.0.0/#rd-heading-level-2)
        - Other headings scale to leave the title as the largest heading
        - Main content is [Small Body](/design/c/typography/v1.0.0/#rd-small-body)
    contents:
      - type: wide image
        src: ./assets/redlines.help-article.png

  - type: two column
    text: |
      ### Embedded Activation
      Icon
      : - Question mark icon
        - [Large Label](/design/c/typography/v1.0.0/#rd-large-label) sizing
        - [Link formatting](/design/c/typography/v1.0.0/#rd-links)

      Text
      : - [Basic Label](/design/c/typography/v1.0.0/#rd-basic-label)
        - [Link formatting](/design/c/typography/v1.0.0/#rd-links)

      Usage
      : - Should be physically located near the relevant part of the page
        - Choose either the icon or text style per page, don't mix and match
    contents:
      - type: narrow image
        src: ./assets/redlines.embedded-activation.png

  - type: style table
    styles:
      - Help List
      - Standalone Article
      - Embedded Help (Icon)
      - Embedded Help (Text)


changelog:
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
