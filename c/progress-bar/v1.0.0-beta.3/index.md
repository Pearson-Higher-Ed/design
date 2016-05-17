---
# Core keys to display correctly
layout: component-yaml
section: Components

# Name the component (this is displayed as the title)
title: Progress Bar

# Status of the component (e.g. experimental, deprecated, etc.)
status: active

# Version (follow the component versioning guide)
version: 1.0.0-beta.3

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
  - name: Accessiblity Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1k9ZciQifxzfafy90mTjYHIFzvztl2fz17XzYKbi2v-A/edit?usp=sharing

# Overview information for the component
tagline: |
  Graphical control element used to visualize the progression of an operation such as course copy, course setup or assignment creation.
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
    name: Anatomy

  - type: two column
    text: |
      The progress bar is broken into two states: Complete and Incomplete.  

      The Complete state is represented from left to right as a filled foreground box.

      The Incomplete state is represented from left to right as an unfilled stroke box with a solid color background.

      As an operation progresses, the Complete fill box expands from left to right  as the Incomplete stroked box contracts from left to right at an equal size and rate that is linear in behavior.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image
        src: ./assets/anatomy.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Foreground
      : - 20px tall
        - Variable width

      Stroke
      : - 20px tall
        - Variable width
        - 1px Thickness

      Background
      : - 20px tall
        - Variable width

    contents:
      - type: wide image
        src: ./assets/redlinesizes.png

  - type: two column
    text: |
      ### Color
      The progress bar should follow the Colors component in order to guarantee sufficient contrast to meet WCAG 2.0 AA guidelines.

    contents:
      - type: wide image
        src: ./assets/foregroundstrokebackground.png

  - type: two column
    text: |
      Foreground
      : - Royal Navy
        - \#094877

      Stroke
      : - Royal Navy
        - \#094877

      Background
      : - White
        - \#FFFFFF

    contents:
      - type: wide image
        src: ./assets/foregroundbackground.png        

# Required. List out each version of the component and the changes made. Make
# sure to follow the component versioning guide.
changelog:
  - version: 1.0.0-beta.3
    changes: |
      Added the Accessiblity Checklist
  - version: 1.0.0-beta.2
    changes: |
      Changed background color from White \#FFFFFF to Brightly Lit \#E6E6E6
  - version: 1.0.0-beta.1
    changes: |
      Initial version
---
