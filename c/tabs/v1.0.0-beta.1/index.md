---
layout: component-yaml
title: Tabs
section: Components
redirect_from: "/docs/ui-components/tabs/"
version: 1.0.0-beta.1
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Karen Taxier
    email: karen.taxier@pearson.com
  - role: Designer
    name: Hawthorn Mineart
    email: hawthorn.mineart@pearson.com
  - role: Designer
    name: Jen Moher Sepulveda
    email: jen.sepulveda@pearson.com
  - role: Designer
    name: Ron Spezial
    email: ron.spezial@pearson.com
implementation: https://pearson-elements-v0.surge.sh/elements/tabs/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19r4uvPAZpmXRwT_krIr9MqHLYC-Vgjah2kPDi9PYaQA/edit?usp=sharing

dependencies:
  - name: Colors
    version: 1.0.1
  - name: Typography
    version: 1.0.0-beta.5

tagline: This component defines the standard visual style, as well as some basic behavior for tabs.
features:
  - Definition of tab visual style, including state changes
  - Definition of basic responsive behavior, including offloading and infinite scroll variations
usage_guidelines: |
  Every instance of a tab should come from this component. See the sections below for information about when to use the different responsive options.

blocks:
  - type: section
    name: Basic Tabs

  - type: two column
    text: |
      Tabs are a way of dividing related content into focused views. They can be used as high level navigation, or to quickly switch between something like groups of content or  aspects of a single textbook. Tabs may be used on an entire page, or within a closed container. In most cases, they should be located above the content or views they're dividing.  

      **Default State** indicates the typical appearance of an available, but not selected tab

      **Active State** indicates the currently selected tab, whose associated content is currently being displayed

      **Hover State** indicates the appearance of a tab currently in focus

      **Disabled State** indicates the appearance of a tab that cannot be selected or displayed
    contents:
      - type: wide image
        src: ./assets/tab_states.png
        caption: Tab states

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### States
      Default
      : - Font: [Large label font](/design/c/typography/v1.0.0-beta.5/#rd-large-label)
      - Color: [Secondary/Gray No. 1](/design/c/colors/v1.0.1/#rd-gray-no-1-565656)
      - 13px vertical (bottom) padding

      Active
      : - Font: [Large label font](/design/c/typography/v1.0.0-beta.5/#rd-large-label)
      - Color: [Hyperdrive](/design/c/colors/v1.0.1/#rd-hyperdrive-0d65a6)
      - 13px vertical (bottom) padding

      Hover
      : - Font: [Large label font](/design/c/typography/v1.0.0-beta.5/#rd-large-label)
      - Color: [Primary/ Pitch](/design/c/colors/v1.0.1/#rd-pitch-231f20)
      - 13px vertical (bottom) padding

      Disabled
      : - Font: [Large label font](/design/c/typography/v1.0.0-beta.5/#rd-large-label)
      - Color: [Boring](/design/c/colors/v1.0.1/#rd-boring-a6a8ab)
      - 13px vertical (bottom) padding

    contents:
        - type: wide image
          src: ./assets/tab_redlines.png
          caption: Redlines for different tab states

  - type: section
    name: Responsive Tab Breakpoints

  - type: two column
    text: |
      As breakpoints decrease in size, the spacing between tabs as well as the width of the leftmost margin decreases.
    contents:
      - type: narrow image
        src: ./assets/tab_breakpoints.png
        caption: Responsive breakpoints for tabs


  - type: section
    name: Offloading - Scroll

  - type: two column
    text: |
      When more tabs exist than can fit within the viewport, one way of handling tab navigation is to provide a means to scroll or navigate to the next tab in sequence. This can be done in a linear or looping (carousel) fashion.
    contents:
        - type: narrow image
          src: ./assets/tabbed_gallery.png
          caption: Tabs with offscreen scrolling


  - type: section
    name: Offloading - Select Box

  - type: two column
    text: |
      Another way of handling tab navigation for cases when not all tabs fit within the viewport or when it's not desirable to show all tabs at once is to make use of a select box to contain the non visible tabs. If an item is selected from the select box, that item then takes the place of the last visible tab, and that tab becomes an availble selection within the select box.
    contents:
        - type: narrow image
          src: ./assets/more_pull_down.png
          caption: Tabs with select box


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false

---
