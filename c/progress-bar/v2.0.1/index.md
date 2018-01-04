---
# Core keys to display correctly
layout: component-yaml
section: Components

# Name the component (this is displayed as the title)
title: Progress Bar

# Status of the component (e.g. experimental, deprecated, etc.)
status: active

# Version (follow the component versioning guide)
version: 2.0.1

# List the people involved
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: JR Harrell
    email: jr.harrell@pearson.com

# Links to any implementations of the component
implemented: true
implementation: https://github.com/Pearson-Higher-Ed/elements-sdk

dependencies:
  - name: Colors
    version: 3.0.1
  - name: Typography
    version: 2.1.1

# Any downloads available
downloads:
  - name: Accessiblity Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1qpFi_MKpyKa8oqrQCfQnIxjQKNrZ5KRnpaZn2oNhf20/edit?usp=sharing
  - name: Sketch file
    link: ./assets/ProgressBarComponent.sketch

# Overview information for the component
tagline: |
  Graphical control element used to visualize the progression of an operation such as course copy, course setup, or assignment creation.
description:
features:
  - Complete vs Incomplete Status
  - Compliance with Accessiblity
usage_guidelines: |
  Whenever you need to indicate the progress of a system process such as uploading a file, copying a course, etc. use the Progress Bar to provide feedback to the user. This component should generally not be used to present a static "progress", prefer instead a single bar chart or similar design.

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
    name: Basic Progress Bar

  - type: two column
    text: |
      The determinate progress bar shows the user how far along a process with a known start and end point has progressed. For processes with an unknown end point, use the [Loading Indicator](/design/c/loading-indicator) instead.

      As the process proceeds, the bar fills up and the label text is updated. The formatting of the label should be contextual. For example, if you are measuring time, the label might read "5 Minutes Remaining."

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: narrow image
        src: ./assets/progress.bars.png
    features:
      - Basic Progress Bar

  - type: section
    name: Options

  - type: two column
    text: |
      ### Alternative text alignment
      The progress bar label is centered by default, but can be either left or right aligned if needed.
    contents:
      - type: narrow image
        src: ./assets/left.aligned.png
      - type: narrow image
        src: ./assets/right.aligned.png
    features:
      - Left Aligned Progress Bar
      - Right Aligned Progress Bar

  - type: two column
    text: |
      ### Loading animation
      For situations where the process is likely to stall at one or more points for more than a second or two, an animation can be used to indicate that the system is still functioning.
    contents:
      - type: narrow video
        src: ./assets/animation.mp4
    features:
      - Animated Progress Bar

  - type: section
    name: Redlines
    redlines:
      - Basic Progress Bar
      - Left Aligned Progress Bar
      - Right Aligned Progress Bar
      - Animated Progress Bar

  - type: two column
    text: |
      Dimensions
      : - Track is 4px wide
        - Progress fill is 12px wide

      Spacing
      : - Track is 8px below the label

      Colors
      : - Track is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Fill is [Digital Marine Turquoise](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-marine-turquoise)

      Label
      : - [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text) in [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)
        - Center aligned by default
        - Options for left and right aligned positioning

      Animated fill
      : - Stripes are 4px wide [Digital Ice Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-ice-blue)
        - 8px spacing between stripes
        - Set at 45° angle
        - Stripes animate leftwards at a rate of 100px/6s
    contents:
      - type: narrow image
        src: ./assets/redlines.progress.bar.png
      - type: narrow image
        src: ./assets/redlines.animated.png

# Required. List out each version of the component and the changes made. Make
# sure to follow the component versioning guide.
changelog:
  - version: 2.0.1
    changes: |
      - ADDED: Missing spacing details to redlines

  - version: 2.0.0
    changes: |
      - CHANGED: Rebranded visual style
      - ADDED: Animated option
      - ADDED: Alternative text alignments
  - version: 1.0.0
    changes: |
      Initial version
---
