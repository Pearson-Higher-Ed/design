---
# Core keys to display correctly
layout: component-yaml
section: Components

# Name the component (this is displayed as the title)
title: Progress Bar

# Status of the component (e.g. experimental, deprecated, etc.)
status: active

# Version (follow the component versioning guide)
version: 2.0.0-beta.2

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

dependencies:
  - name: Colors
    version: 3.0.0
  - name: Typography
    version: 2.0.0

# Any downloads available
downloads:
  - name: Accessiblity Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1k9ZciQifxzfafy90mTjYHIFzvztl2fz17XzYKbi2v-A/edit?usp=sharing

# Overview information for the component
tagline: |
  Graphical control element used to visualize the progression of an operation such as course copy, course setup, or assignment creation.
description:
features:
  - Complete vs Incomplete Status
  - Compliance with Accessiblity
usage_guidelines: |
  Every instance of a Progress Bar should use this component.  Future versions of the progress bar will include more detailed meta information.

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
    name: Determinate Progress Bar

  - type: two column
    text: |
      The determinate progress bar shows the user how far along a process with a known start and end point has progressed. For processes with an unknown end point, use the [Loading Indicator](/design/c/loading-indicator) instead.

      As the process proceeds, the bar fills up and the label text is updated. The formatting of the label should be contextual. For example, if you are measuring time, the label might read "5 Minutes Remaining."

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: narrow image
        src: ./assets/progress.bars.png

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

  - type: two column
    text: |
      ### Loading animation
      For situations where the process is likely to stall at one or more points for more than a second or two, an animation can be used to indicate that the system is still functioning.
    contents:
      - type: narrow video
        src: ./assets/animation.mp4

  - type: section
    name: Redlines
    exports:
      - Determinate Progress Bar

  - type: two column
    text: |
      Forthcoming

  - type: style table
    styles:
      - Determinate Progress Bar

# Required. List out each version of the component and the changes made. Make
# sure to follow the component versioning guide.
changelog:
  - version: 2.0.0-beta.2
    changes: |
      - ADDED: Alternate text alignment options
      - ADDED: Animation option
      - CHANGED: Visual style to make the progress vs track more distinct
  - version: 2.0.0-beta.1
    changes: |
      - CHANGED: Initial rebranding
  - version: 1.0.0
    changes: |
      Initial version
---
