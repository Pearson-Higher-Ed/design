---
layout: component-yaml
title: Tab Style Navigation
section: Components
redirect_from: "/docs/ui-components/tabs/"
version: 2.0.0-beta.1
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19r4uvPAZpmXRwT_krIr9MqHLYC-Vgjah2kPDi9PYaQA/edit?usp=sharing

dependencies:
  - name: Colors
    version: 2.0.0-beta.7
  - name: Typography
    version: 2.0.0

tagline: This component defines the standard visual style, as well as some basic behavior for tab style navigation.
features:
  - Definition of tab visual style, including state changes
  - Definition of uses case context
usage_guidelines: |
  Tab Style Navigation is the main use case for these specific guidelines - where "navigation" refers to changing a page's primary contents. Changing what contents to display can be done either by linking to a separate page or showing the associated content without leaving the current page. For additional tab needs not pertaining to navigation style, visual style should be copied but not on the same page as traditional tab style navigation.

blocks:
  - type: section
    name: Basic Tabs

  - type: two column
    text: |
      Tabs are a way of dividing related content into focused views. They can be used as high level navigation, or to quickly switch between something like groups of content or aspects of a single textbook. Tabs may be used on an entire page or sub sections of a page. In most cases, they should be located above the content or views they're dividing.  

      **Default State** indicates the typical appearance of an available, but not selected tab

      **Active State** indicates the currently selected tab, whose associated content is currently being displayed

      **Hover State** indicates the appearance of a tab currently in focus

      **Background** For a consistent experience, use an approved background color combination. Always choose based on your specific needs, but single color backgrounds tend to be best for navigating __inline contents__ where as dual tone backgrounds tend to be best for navigating __page level contents__. Maintain the aesthetics of simplicity with generous padding, especially if you use a single color background.

    contents:
      - type: wide image
        src: ./assets/tab_states.png
        caption: Tab states

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### States
      Padding
      : - 8px vertical padding, above and below tab text
        - 16px (x2) horizontal padding, between tabs

      Background Options
      : - Light 1: [White](/design/c/colors/v2.0.0/#rd-white)
      - Light 2: [White Gray](/design/c/colors/v2.0.0/#rd-white-gray)
      - Light Dual Tone: [White Gray Above](/design/c/colors/v2.0.0/#rd-white-gray) + [Moonlight Bottom Border](/design/c/colors/v2.0.0/#rd-moonlight) (1px solid, 100% page width)
      - Dark: [Ink Blue 005A70](/design/c/colors/v2.0.0/#rd-ink-blue)

      Default
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color on light: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal)
      - Color on dark: [White](/design/c/colors/v2.0.0/#rd-white)
      - No Tab Selection Border

      Active
      : - Font: [Bold UI Text](/design/c/typography/v2.0.0/#rd-ui-text-bold)
      - Color on light: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal)
      - Color on dark: [White](/design/c/colors/v2.0.0/#rd-white)
      - Tab selection border on light: 3px, solid, [Concrete](/design/c/colors/v2.0.0/#rd-concrete)
      - Tab selection border on dark: 3px, solid, [Moonlight](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise),
      - No hover state

      Hover
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color on light: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal)
      - Color on dark: [White](/design/c/colors/v2.0.0/#rd-white)
      - Tab selection border on light: 3px, solid, [Digital Marine Turquoise](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise)
      - Tab selection border on dark: 3px, solid, [Digital Marine Turquoise](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise),Opacity 0.8      

    contents:
        - type: wide image
          src: ./assets/tab_redlines.png
          caption: Redlines for different tab states

changelog:
  - version: 2.0.0-beta.1
    changes: |
      - UPDATED: Redesigned for rebrand
      - UPDATED: Defined primarily for tab style navigation
      - ADDED: Background color guidance
      - REMOVED: Guidance for tab panel (accessibility concerns)
      - REMOVED: Removed offloading dropdown (for now)
    linkable: false

  - version: 1.0.0-beta.2
    changes: Updates to fix graphics, remove mobile, add container, adjust redlines, and shuffle.
    linkable: false

  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false

---
