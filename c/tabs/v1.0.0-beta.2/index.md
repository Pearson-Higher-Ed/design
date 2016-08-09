---
layout: component-yaml
title: Tabs
section: Components
redirect_from: "/docs/ui-components/tabs/"
version: 1.0.0-beta.2
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
      - type: narrow image
        src: ./assets/tab_states.png
        caption: Tab states


  - type: section
    name: Responsive Tab Breakpoints

  - type: two column
    text: |
      As breakpoints decrease in size, the spacing between tabs as well as the width of the leftmost margin decreases.
    contents:
      - type: wide image
        src: ./assets/tab_breakpoints.png
        caption: Responsive breakpoints for tabs


  - type: section
    name: Offloading - Select Box

  - type: two column
    text: |
      One way of handling tab navigation for cases when not all tabs fit within the viewport or when it's not desirable to show all tabs at once is to make use of a select box to contain the non visible tabs. If an item is selected from the select box, that item then takes the place of the last visible tab, and that tab becomes an available selection within the select box.
    contents:
        - type: wide image
          src: ./assets/more_pull_down.png
          caption: Tabs with select box

  - type: section
    name: Tab Container

  - type: two column
    text: |
      In addition to being used as a primary content divider or navigation method, tabs can also be used within a container. All redline values remain the same, but should be used with respect to the bounding container. Tabs containers may utilize a background color (Dirty Ice #F8F8F8) to differentiate them from the container body.  
    contents:
        - type: wide image
          src: ./assets/tab_container.png
          caption: Tabs container

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
      - Color: [Primary/ Pitch](/design/c/colors/v1.0.1/#rd-pitch-231f20)
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

changelog:
  - version: 1.0.0-beta.2
    changes: Updates to fix graphics, remove mobile (for now!), add container, adjust redlines, and shuffle.
    linkable: false

  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false

---
