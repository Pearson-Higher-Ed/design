---
# Core keys to display correctly
layout: component-yaml
section: Components

# Name the component (this is displayed as the title)
title: Progress Bar

# Status of the component (e.g. experimental, deprecated, etc.)
status: unimplemented

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
    link: ./assets/o-app-header.sketch

# Overview information for the component
tagline: |
  Graphical control element user to visualize the progression of an operation such as course copy, course setup or assignment creation.
description: 
features:
  - Complete vs Incomplete Status
  - Compliance with Accessiblity
usage_guidelines: |
  Cover when to use the component and any major guidelines. Further details can
  be provided below.

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
      Here is the content for the text column on the side. It is run through
      markdown.

    # (optional) A list of items to put in the right column
    contents:
      # Images can be wide or narrow, wide images are 760px and narrow are 370px
      - type: wide image OR narrow image
        src: ./assets/path.to.file.png
        caption: (optional), appears below image

      # Tables use the markdown format
      - type: table
        content: |
          | Name    | Phone         | Zip code  |
          |---------|---------------|-----------|
          | Bob     | 303-123-4567  | 02134     |
          | Sally   | 719-432-7869  | 92931     |

      # Palettes list colors in a table. All three categories are required, and
      # hex values should exclude a preceding '#'.
      - type: palette
        foreground:
          - name: White
            hex: FFFFFF
          - name: Gray
            hex: d8d8d8
        background:
          - name: Black
            hex: 000000
        accents:
          - name: Blue
            hex: 0000ff

  - type: section
    name: Redlines
  - type: two column
    text: |
      foreground
      : - 20px tall
        - variable width

      stroke
      :   

# Required. List out each version of the component and the changes made. Make
# sure to follow the component versioning guide.
changelog:
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Green buttons
      - CHANGED: Static links now show an underline which goes away on hover
  - version: 1.0.0-beta.1
    changes: |
      Initial version
---
