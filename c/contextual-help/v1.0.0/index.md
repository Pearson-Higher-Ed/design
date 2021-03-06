---
layout: component-yaml
title: Contextual Help
section: Components
redirect_from: /docs/ui-components/contextual-help/
version: 1.0.0
status: deprecated
implemented: false
implementation: https://www.npmjs.com/package/@pearson-components/contextual-help
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

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1YjPJz6ZJgG6m4iJvtTFYuhIBGVuefHpzYx3H_lPU-vo/edit?usp=sharing
  - name: .sketch
    link: ./assets/contextual-help.mockup.sketch
  - name: .ai
    link: ./assets/contextual-help.mockup.ai

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

      * Universal access through the [Header](/design/c/application-header/v1.1.0/#rd-signed-out-mode)
      * Standard location of 'Contact Support' information
      * Articles relevant to the user's current location and role

      Selecting an article opens it within a [detail view](/design/c/drawer/v1.0.0/#rd-detail-view) in the drawer.
    contents:
      - type: narrow image
        src: ./assets/help-list.png
        caption: Initially the drawer presents a list of contextual help and support articles for the page.
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
      Selecting the "Help" link in the [App Header](/design/c/application-header/v1.1.0/#rd-signed-out-mode) will open the Help List. You can also navigate directly to an article (either a standalone article or one from the list) through embedded activation.

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
      Content may be grouped into accordions which help organize and condense information. See the [Authoring Guidelines](#authoring-guidelines) below for details on how to include an accordion in your article.

      ### Info Boxes
      Authors may use info boxes to call attention to important information.
    contents:
      - type: narrow image
        src: ./assets/accordions.png
        caption: Example of accordions.
      - type: narrow image
        src: ./assets/tips.warnings.png
        caption: General Tip and Important boxes.

  - type: section
    name: Authoring Guidelines

  - type: two column
    text: |
      Use these guidelines when authoring articles for the Contextual Help component.  If you’re using MadCap Flare to author articles, see these [specifics for preparing Flare files][flare].

      [flare]: https://docs.google.com/document/d/1tQVifP2ynJhHlg7R-Odk2Ej1qQxMs0SQ67fYzTlYjM8/edit?ts=578397b6
    contents:
      - type: text
        content: |

          ### Do
          * Write articles at the 9th grade reading level. If you like, use the Spelling and Grammar feature in MS Word. Click Spelling and Grammar and under Options, select "Show readability statistics".
          * Title articles in the form of a question. Contact Us and Popular Resources are an exception to this guideline.
          * List the 'Contact Us' article at the bottom of the Help List. The Contact Us article is single sourced across all products adopting the contextual help component. Authors can find the Contact Us file in the SVN o-help directory: `o-help-content/EN-US/ContactSupport.html`
          * List Popular Student Resources and Popular Instructor Resources articles in the second to last position of the Help List.
          * Use Online Help Google Analytics and tech support data to determine what info to include in articles. Work with [Mark Giardina](mailto:mark.giardina@pearson.com) and [Matt Norris](mailto:matt.norris@pearson) to request KB metrics and usage reports. Be sure to also take advantage of the [Snapshot Tool](https://hepq.pearson.com/login).
          * Include accordions when necessary to improve readability of longer topics or procedures. Consider using them as a replacement for "See this help topic" links.
          * Link to external assets such as EI guides, Marketing PDFs, Videos, etc. from within the Popular Resources articles when relevant.
          * Add Help List articles that are role specific (educator/learner/TA).
          * List up to 5 custom articles at the top of the list. These should be specifically relevant to features/tools accessible at the current URL. If the feature/tool is only available under certain conditions  it must be documented in a Standalone Article instead.
          * Follow the formatting guidelines below.

          ### Don't
          * Reformat the layout or structure of Popular Resources and Contact Us article types. Your [UA Design representative](mailto:ann.persson@pearson.com) on the UXF Team will work with you in reviewing recommendations to ensure standardized contextual help articles are uniform across the customer experience.
          * Link to other articles in the contextual help component.
          * Include tables.
          * Exceed more than 7 articles per page (5 custom, 2 default: Contact Support and Popular Resources).
          * Include articles about features/tools which aren't permanently accessible from the current URL in the Help List. (Use standalone articles instead.)
          * Link out to Pearson Support KB articles.
          * Link out to Online Help Systems.

          ### Formatting guidelines
          After you’ve  committed your contextual help files to SVN, a sanitization script runs to clean the source html files to follow the tag conventions established by the UX framework.

          **Sanitization**  
          The [sanitization](https://en.wikipedia.org/wiki/HTML_sanitization) script alleviates authors from having to worry about the details of code and html tags used in their help files. Headings, sub-headings, body copy, bold and italics, lists and unordered lists, etc. are all reviewed and cleaned by the sanitization script to follow the same html semantics as other components. Sanitization also helps to ensure we are following accessibility best practices.

          **Accordions**  
          Enables authors to transform sub-headings into expand and collapsable blocks of content. The accordion component should be used within help articles to chunk content by sub-topics, infinitive phrases, step procedures exceeding 9 steps, or to replace “see topic xyz” links.


          **Accordion Tags**  
          To use use the accordion component, you will apply specific tags in your html files whether you are working from MadCap Flare, Dreamweaver, or other development tools.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Help List

      Container
      : - [Drawer Basic View](/design/c/drawer/v1.0.0/#rd-basic-view)

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
      : - [Drawer Detail View](/design/c/drawer/v1.0.0/#rd-detail-view) for articles from the help list
        - [Drawer Basic View](/design/c/drawer/v1.0.0/#rd-basic-view) for standalone articles
        - Title is 'Help Topic' for standalone articles

      Typography
      : - Title is a [Level 2 Heading](/design/c/typography/v1.0.0/#rd-heading-level-2)
        - Other headings scale to leave the title as the largest heading
        - Main content is [Small Body](/design/c/typography/v1.0.0/#rd-small-body)
        - Lists, italics, bold, and other basic typography features follow the standard [Typography component](/design/c/typography) styles
    contents:
      - type: wide image
        src: ./assets/redlines.help-article.png

  - type: two column
    text: |
      ### Embedded Activation
      Icon
      : - [question-circle](/design/c/icons/v1.1.0/#rd-question-circle)
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

  - type: two column
    text: |
      ### Accordion

      Spacing
      : - 12px above, below and between accordions
        - 6px separating the title from accordion content
        - 8px padding between icon and title

      Typography
      : - Titles are [Bold Labels](/design/c/typography/v1.0.0/#rd-bold-label), [Primary Color](/design/c/typography/v1.0.0/#rd-primary-label-color)
        - Accordion content follows the same type style as the surrounding text

      Icon
      : - [caret-right](/design/c/icons/v1.1.0/#rd-caret-right) for unopened items, [caret-down](/design/c/icons/v1.1.0/#rd-caret-down) for opened

      Behavior
      : - Users can open accordion items independently from each other (i.e. opening an item doesn't autoclose other items that are already open)
    contents:
      - type: narrow image
        src: ./assets/redlines.accordions.png

  - type: two column
    text: |
      ### Tips & Notes

      Spacing
      : - Title and content have 10px horizontal padding
        - 4px vertical padding for the title
        - 6px vertical padding for the content

      Border
      : - 1px [hairline gray](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0) line separating title from content

      Icons
      : - [light-bulb-o](/design/c/icons/v1.1.0/#rd-light-bulb-o) for Tip
        - [info-circle](/design/c/icons/v1.1.0/#rd-info-circle) for Note
        - [exclamation-circle](/design/c/icons/v1.1.0/#rd-exclamation-circle) for Important
        - 8px padding between icon and title

      Typography
      : - Content is [Small Body Copy](/design/c/typography/v1.0.0/#rd-small-body)
        - Title is [Bold Label](/design/c/typography/v1.0.0/#rd-bold-label), [Primary Color](/design/c/typography/v1.0.0/#rd-primary-label-color)

      Colors
      : - [Off White (#f2f2f2)](/design/c/colors/v1.0.1/#rd-off-white-f2f2f2) background for titles
        - [Brightly Lit (#e6e6e6)](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6) background for content
    contents:
      - type: narrow image
        src: ./assets/redlines.tips.warnings.png

  - type: style table
    styles:
      - Help List
      - Standalone Article
      - Embedded Help (Icon)
      - Embedded Help (Text)


changelog:
  - version: 1.0.0
    changes: Initial version
---
