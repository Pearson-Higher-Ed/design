---
# Core keys to display correctly
layout: component-yaml
section: Components

# Name the component (this is displayed as the title)
title: Bar Chart

# Status of the component (e.g. experimental, deprecated, etc.)
status: active

# Version (follow the component versioning guide)
version: 1.0.0-beta.1

# List the people involved
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: JR Harrell
    email: jr.harrell@pearson.com

# Links to any implementations of the component
implementations:
  - type: origami
    link: https://origami.pearsoned.com/registry/components/o-app-header

# Any downloads available
downloads:
  - name: .sketch mockup
    link: ./assets/ProgressBarComponent.zip

# Overview information for the component
tagline: |
  Data visulization that uses vertical bars to show discrete, numerical comparisons among categories.
features:
  - Numerical Comparisions
  - Compliance with Accessiblity
usage_guidelines: |
  Every instance of a Bar Chart should use this component.  Future versions of the progress bar will include more detailed meta information.

# Main contents of the component definition
# `blocks` is a list of the content chunks to display. Several different types
# are currently supported, including:
#
#    * section (added to TOC, main header)
#    * two column (column of text with images, tables, or code on the right)
#    * palette (creates tables for foreground, background, and accent colors)
blocks:

  # The section type is added to the TOC and is used to delineate major chunks
  # of the article
  - type: section
    name: Description

  - type: two column
    text: |
      The Single Axis Vertical Bar Chart uses vertical bars to show discrete, numerical comparisons, relationships and trends among categories.  

      Bars charts are distinguished from histograms because they do not display continuous developments over an interval of time.

      A bar charts discrete data is categorical data.  It answers the question of "how many?" in each category. 

      One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/DescriptionImage.png

  - type: section
    name: Nomenclature

  - type: two column
    text: |
      The Vertical Bar Chart consists of a Plot Area and Chart Grid.  

      The Plot Area is labeled with a Plot Title, Vertical Axis Group Label and Horizontal Group Label.

      The Horizontal and Vertical Axis values are identified by their Axis Labels.

      The Plot itself is comprised a Chart Grid that is a series of lines called Ticks.

      The vertical bars are called a Series and their values are known as Series Labels.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/NomenclatureDrawing.png

  - type: section
    name: Series Labels

  - type: two column
    text: |
      In order for screen readers to determine the Series values, a numeric needs to be assigned to the Series Labels.  

      This numeric value should be coded as an invisible link that only screen readers can “see” so that it does not clutter the data visualization for sighted users.

      Here’s how a screen reader would read aloud and call out the Series Label as the user tabs through the Class Average Grade Distribution visualization: 

      “Class Average Grade Distribution.  Grade Group.  Zero to Fifty Nine.  Number of Students.  19.”

      The reader would then repeat this flow through to the end of the visualization.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/SeriesLablesDrawing.png   

  - type: section
    name: Screen Reader Flow

  - type: two column
    text: |
      In order for screen readers to properly read through the Vertical Bar Chart, the HTML 5 / Aria Landmarks must be coded appropriately.  

      The tagging flow should proceed in the following order:

      The Horizontal and Vertical Axis values are identified by their Axis Labels. 

      1. Plot Title
      2. Horizontal Axis Group Label
      3. Horizontal Axis Label 1
      4. Vertical Axis Group Label
      5. Series Label 1
      6. Repeat the above through to chart completion

      Which would cause the screen reader to read aloud:

      “Class Average Grade Distribution.  Grade Group.  Zero to Fifty Nine.  Number of Students.  19”.

      The reader would then proceed in the same manner and flow through to the end of the visualization.

      Remember that the Series Label should be coded that that it is only visible to the screen reader.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/ScreenReaderFlowDrawing.png    

  - type: section
    name: Standard Color

  - type: two column
    text: |
      Standard Color palettes should be used unless User Research identifies a rationale for an exception that mandates Custom Colors.  

      Standard Color palettes are identified and documented in the Colors Component.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/StandardColorDrawing.png     

  - type: section
    name: Custom Color

  - type: two column
    text: |
      In addition to demonstrating Value Amount for Categories with vertical bars, Custom Color can be applied to depict an additional information variable that quickly provides insight.

      For example, color can quickly depict performance grouping.

      Custom Color should only be applied when User Research identifies a rationale for an exception to the Standard Colors in the Color Component.

      If a Custom Color does not immediately meet WCAG 2.0 AA guidelines, this should be mitigated by using a dark color stroke.

      Custom Color should be validated by User Research before being applied to the Single Axis Vertical Bar Chart. 

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/ScreenReaderFlowDrawing.png    
                          
  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Foreground
      : - Coming Soon
        - Coming Soon

      Stroke
      : - Coming Soon
        - Coming Soon
        - Coming Soon

      Background
      : - Coming Soon
        - Coming Soon

    contents:
      - type: wide image
        src: ./assets/RedlinesAreInProgress.png

      

# Required. List out each version of the component and the changes made. Make
# sure to follow the component versioning guide.
changelog:
  - version: 1.0.0-beta.1
    changes: |
      Initial version
---
