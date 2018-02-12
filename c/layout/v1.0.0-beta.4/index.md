---
layout: component-yaml
title: Layout
section: Components
version: 1.0.0-beta.4
status: active
people:
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com


downloads:
  - name: UXD Accessibility Checklist
    link:

dependencies:
  - name: breakpoints
    version: 1.0.2

no_redlines: true

tagline: |
  A set of standards and guidelines for laying out pages.
features:
  - Built on the standard breakpoints
  - Handy 12 column grid that can support many layouts
  - Guidance on standard layouts and how to communicate with developers
usage_guidelines: |
  All pages should try to follow the guidance of this component for laying out their contents. Ultimately the underlying grid is really the only strict rule, the rest of the component simply gives you a toolset of common layouts but don't feel too constrained by them.

blocks:
  - type: section
    name: Grid Structure

  - type: two column
    text: |
      Every page layout should fit into and utilize the common grid strategy.

      The grid consists of several key parts that include the Container, Container Margins, Columns, and Gutters.

      All columns reside within the *Container*, which is located at the root level of a page. Depending on the breakpoint, the container will have *Container Margins* of various sizes. The container also has a maximum width property, beyond which only the container margins grow in size.

      The container is divided into 12 proportional *Columns* which are used to size content and containers on the page. These are separated by *Gutters* of a fixed size (which varies based on the breakpoint again).

      See the redlines for the exact dimensions of each feature at each breakpoint.
    contents:
      - type: wide image
        src: ./assets/illustration.png
        caption: The key parts of the grid.
    features:
      - Grid

  - type: section
    name: Breakpoints

  - type: two column
    text: |
      All pages should provide full functionality and content regardless of screen size. There are [five standard breakpoints](http://pearson-higher-ed.github.io/design/c/breakpoints/v1.0.2/#breakpoints--extra-small) which your layout should support. Your layout can only change at these breakpoints and should use the shape of your content to decide how to adapt.
    contents:
      - type: table
        content: |
          | Size | >= Min | < Max   |
          |:----:|:------:|:-------:|
          | xs   | 320px  | 480px   |
          | sm   | 480px  | 768px   |
          | md   | 768px  | 1024px  |
          | lg   | 1024px | 1280px  |
          | xl   | 1280px | &infin; |

  - type: section
    name: Navigation Regions

  - type: two column
    text: |
      A page may have a visual layout that divides content into sections or "regions"---a header, footer, navigation, etc. HTML5 has created tags for these sections of a page.

      These tags are useful to assistive technologies such as screen readers because users can hear they are in a certain region and use shortcuts to navigate based on them. That is, just like a header may have a visual border (like a different color), someone who cannot see that color can still know they are in a header based on the underlying HTML tag.

      For designers, there are two tasks they should keep in mind when assembling layouts:

      1. Ensure the regions are denoted if not obvious.

          For instance, if there are two navigation regions or the main region is not clear then this needs to be noted. Aside regions generally refer to something related to the main region, such as "Related Articles" or "Similar Items". Short descriptions of the typical region uses may be found on the [WAI-ARIA](https://www.w3.org/WAI/tutorials/page-structure/regions/) website.

      2. In addition to the tags, you can add additional descriptions to the sections.

          This is typically not necessary for simple layouts, especially if there is only 1 of each type of tag. However, if there are duplicated sections (like two navigation regions) then an additional description (an "ARIA" label) is helpful. For example, you may have "site" for the main page navigation then "pagination" for page navigation at the bottom of the page. Speak with a developer if you're unsure about duplicate regions.
    contents:
      - type: wide image
        src: ./assets/regions.png

  - type: section
    name: Common Page Templates

  - type: two column
    text: |
      Here are a few standard page templates which are broadly applicable. Treat these more like guidelines, follow them when it makes sense but feel free to create variations to support your specific use case.

      #### Combining templates
      For larger, more complicated pages multiple templates can be stacked vertically allowing you to customize the layout of each section to the actual content it contains.

      #### Responsive behavior
      A page layout should function at every standard breakpoint. You'll probably need to switch between various templates at a certain width---use your content as a guide for when to change up the layout.

  - type: two column
    text: |
      ### Single content zone
      For pages that focus on a single set of content or controls it often makes sense to dedicate the full page width to that primary content.

      #### Varying width
      A single content zone typically takes up all 12 underlying grid columns, but it can also span 10 or even 8 columns depending on the actual content. Prefer to center the content zone in these cases.
    contents:
      - type: wide image
        src: ./assets/single.content.zone.png
    features:
      - Single Content Zone

  - type: two column
    text: |
      ### Dual content zone
      A dual zone template is common when you have multiple pieces of content to present at the same time. Split the page based on the underlying grid; common combinations include 8/4, 6/6, and 4/8.
    contents:
      - type: wide image
        src: ./assets/dual.content.zone.png
    features:
      - Dual Content Zone

  - type: two column
    text: |
      ### Triple content zone
      For situations where you have several items of similar importance a triple zone template can present them all with relatively equal visual importance. This typically takes the form of 4/4/4 underlying grid columns. Other combinations are possible but are generally discouraged as overly complicated.
    contents:
      - type: wide image
        src: ./assets/triple.content.zone.png
    features:
      - Triple Content Zone

  - type: section
    name: Sketch Settings

  - type: two column
    text: |
      For designing in sketch, you can set the layout guide to the following settings to match the dimensions specified by this component.

      For screens 1220px or wider:

      - Columns: enabled
      - Total Width: 1140px
      - Offset: click "Center" button after all other settings configured
      - Number of Columns: 12
      - Gutter on outside: disabled
      - Gutter Width: 40px
      - Column Width: 58px
    contents:
      - type: wide image
        src: ./assets/sketch.settings.png
        border: true

  - type: section
    name: Redlines

  - type: two column
    text: |
      Container
      : - Maximum width of 1140px
        - Always horizontally centered

      Container Margins
      : - ≥ 40px at [Large and Extra Large](/design/c/breakpoints/v1.0.0/#rd-large) breakpoints
        - 20px at [Small and Medium](/design/c/breakpoints/v1.0.0/#rd-medium) breakpoints
        - 10px at Extra Small breakpoints

      Gutters
      : - 40px at [Medium](/design/c/breakpoints/v1.0.0/#rd-medium) and larger breakpoints
        - 20px at [Small](/design/c/breakpoints/v1.0.0/#rd-small) breakpoints
        - 10px at [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) breakpoints

      Columns
      : - Equal widths, size determined by remaining space after accounting for the container width and gutter size
    contents:
      - type: wide image
        src: ./assets/illustration.png




changelog:
  - version: 1.0.0-beta.4
    changes: |
      - UPDATED: Visual style of example images
      - ADDED: Sketch layout settings guide
      - ADDED: Redlines
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Navigation region guidance
  - version: 1.0.0-beta.2
    changes: |
      - UPDATED: Example image for clarity
  - version: 1.0.0-beta.1
    changes: Initial version.
---
