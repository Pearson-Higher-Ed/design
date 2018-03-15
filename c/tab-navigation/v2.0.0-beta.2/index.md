---
layout: component-yaml
title: Tab Style Navigation
section: Components
redirect_from: "/docs/ui-components/tabs/"
version: 2.0.0-beta.2
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
  - role: Designer
    name: Brook Stevenson
    email: brook.stevenson@pearson.com

downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/16--ARmN5JSXsDR20y-LnUo7wkLcZvIL0jq7DJZTR8wI/edit?usp=sharing
  - name: .sketch Mockups
    link: ./assets/tab_nav_2.0.0-beta2.sketch

dependencies:
  - name: Colors
    version: 2.0.0-beta.6
  - name: Typography
    version: 2.0.0

tagline: This component defines the standard visual style, as well as some basic behavior for tab style navigation.
features:
  - Definition of tab visual style, including state changes
  - Definition of uses case context
usage_guidelines: |
  Tab Style "Navigation" refers to a general ability to organize and choose the primary content to display. This is purposefully broad to include linking to a separate page or staying on the same page.

  Note - This does not cover "Tab Panel" specific guidance where keyboard arrows can be used to switch tabs on a single page.

blocks:
  - type: section
    name: Basic Tabs

  - type: two column
    text: |
      Tabs make it easy to explore and switch between different views. Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app. Present tabs as a single row above their associated content. Tab labels should succinctly describe the content within.

      **Default State** indicates the typical appearance of an available, but not selected tab.

      **Active State** indicates the currently selected tab, whose associated content is currently being displayed.

      **Hover State** indicates the appearance of a tab currently in focus.

      **Background** For a consistent experience, use an approved background color combination. Always choose based on your specific needs, but single color backgrounds tend to be best for navigating __inline contents__ where as Bar Style may be best for navigating __page level contents__. Maintain the aesthetics of clarity with generous padding, especially if using a single color background.

    contents:
      - type: wide image
        src: ./assets/tab_states.png
        caption: Tab states

  - type: section
    name: Redlines

  - type: two column
    text: |

      Padding
      : - 8px vertical padding, above and below tab text
      - 32px (16x2) horizontal padding, between tabs

      Background Options
      : - Light 1: [White](/design/c/colors/v2.0.0/#rd-white)
      - Light 2: [White Gray](/design/c/colors/v2.0.0/#rd-white-gray)
      - Light Bar Style: [White Gray](/design/c/colors/v2.0.0/#rd-white-gray) + [Moonlight Border](/design/c/colors/v2.0.0/#rd-moonlight) (1px solid, 100% page width)
      - Dark: [Ink Blue](/design/c/colors/v2.0.0/#rd-ink-blue)

      **Light Backgrounds**

      Default
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color: [Medium Grey](/design/c/colors/v2.1.0/#rd-medium-gray)
      - No Border

      Active
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal)
      - Border: 3px, solid, [Digital Marine Turquoise](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise)
      - No Hover State

      Hover
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal)
      - Border: 3px, solid, [Concrete](/design/c/colors/v2.0.0/#rd-concrete)

      **Dark Backgrounds**

      Default
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color: [Alto](/design/c/colors/v2.1.0/#rd-alto)
      - No Tab Selection Border

      Active
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color: [White](/design/c/colors/v2.0.0/#rd-white)
      - Border: 3px, solid, [Digital Marine Turquoise](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise)      
      - No hover state

      Hover
      : - Font: [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
      - Color on dark: [White](/design/c/colors/v2.0.0/#rd-white)
      - Border on dark: 3px, solid, [Alto](/design/c/colors/v2.1.0/#rd-alto)


    contents:
        - type: wide image
          src: ./assets/tab_redlines.png
          caption: Redlines for different tab states

changelog:
  - version: 2.0.0-beta.2
    changes: |      
      - UPDATED: Image of tab states to include all background options
      - UPDATED: Changed Active/inactive indications from bold/regular font weights to two shades of color.
      - UPDATED: Clarified documentation language
    linkable: false

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
