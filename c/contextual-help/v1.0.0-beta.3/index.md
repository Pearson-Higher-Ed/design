---
layout: component-yaml
title: Contextual Help
section: Components
redirect_from: /docs/ui-components/contextual-help/
version: 1.0.0-beta.3
status: deprecated
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
          * Write articles at the 9th grade reading level. To check for this, you can use the Spelling and Grammar feature in MS Word. Click Spelling and Grammar and under Options, select "Show readability statistics".
          * Title articles in the form of a question. This is consistent with how issues are recorded in Salesforce Knowledge. "Contact Us" and "Popular Resources" are an exception to this guideline.
          * List "Popular Student Resources" and "Popular Instructor Resources" articles at the end of the help list.
          * Include data-driven articles. If data is not available from tech support and Online Help Google Analytics to inform the value proposition of which content to display, include, at minimum, the Contact Us article in the Help List.
          * Include accordions when necessary to improve readability of longer topics or procedures.
          * Link to external assets such as EI guides, Marketing PDFs, Videos, etc. from within the "Popular Resources" articles when relevant.
          * Add Help List articles that are role specific (educator/learner/TA).
          * List up to 5 custom articles at the top of the list. Custom articles are specifically relevant to features/tools accessible at the current URL. If the feature/tool is only available under certain conditions, like embedded "Learn more" links,  it must be documented in a Standalone Article instead.
          * Use Standalone Articles to either display a Help List article or additional information about a function/feature not in the Help List.
          * Follow the formatting guidelines.

          ### Don't
          * Reformat the layout or structure of "Popular Resources" and "Contact Us" article types.
          * Link to other articles in the contextual help component.
          * Include tables.
          * Exceed more than 7 articles per page (5 custom, 2 default: Contact Support and Popular Resources).
          * Include articles about features/tools which aren't permanently accessible from the current URL in the Help List. (Use standalone articles instead.)
          * Link out to Pearson Support KB articles.
          * Link out to Online Help Systems.

          ### Formatting guidelines

          #### Titles
          Every article should have a single title at the top, encoded as an `<h4>` tag after sanitization.

          #### Headings
          Articles headings should be structured and encoded as `<h5>` and `<h6>` tags after sanitization.

          #### Body copy
          Article body copy must be written at a 9th grade reading level.

          #### Bold and italics
          Should be used normally to provide emphasis. The name of interactive elements (i.e. button labels) must be bolded.

          #### Unordered lists
          Should be used to organize content. Must not be nested more than two levels.

          #### Ordered lists
          Should be used to describe steps in a workflow. Should not exceed 9 items in length.

          #### Tips and notes
          Should be used to give handy bits of information more emphasis.

          #### Accordions
          Should be used for topics containing sub-topics or step procedures exceeding 9 steps.

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
