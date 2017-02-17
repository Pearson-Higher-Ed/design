---
layout: component-yaml
title: Notifications
section: Components
version: 1.0.0-beta.2
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1mO6K4RV0GKQzrLp1PpHibzrsnIVq0ImdPZ1ZISlWZ1o/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/notifications.mockup.sketch

dependencies:
  - name: Typography
    version: 2.0.0-beta.9
  - name: Colors
    version: 2.0.0-beta.5
  - name: Drawer
    version: 2.0.0-beta.2
  - name: Icons
    version: 2.0.0-beta.4
  - name: Buttons
    version: 2.0.0-beta.4

tagline: |
  Inform users of new features or actions they should take.
description: |
  Whenever a user needs to be informed or reminded of something a notification can be sent which appears first as a badge in the global header. Selecting the notification icon activates a drawer listing all current notifications and providing additional information about each item. Once the user is done with a notification it can be removed from the list by archiving for later reference.
features:
  - Header icon and badge
  - Lists active notifications, individual notification detail view
  - Retains an archive of old notifications
usage_guidelines: |
  Any notification that occurs in the next gen product platform should use this component for frontend presentation.

blocks:
  - type: section
    name: Notification Drawer

  - type: two column
    text: |
      Selecting the notification icon in the header opens a drawer which initially lists all current notifications. Selecting a notification will show more information about it and provide guidance or UI controls for next steps.

    contents:
      - type: narrow image
        src: ./assets/notification-list.png
        caption: Listing the currently active notifications.
      - type: narrow image
        src: ./assets/notification-detail.png
        caption: Single notification detail.

  - type: section
    name: Notification Archive

  - type: two column
    text: |
      Notifications are removed from the drawer by archiving them. A button at the bottom of the initial list provides access to the previous notification archive in case a user needs to reference an older item.
    contents:
      - type: narrow image
        src: ./assets/archive-list.png
        caption: |

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Notification list

      Drawer
      : - Use the standard [drawer component](http://pearson-higher-ed.github.io/design/c/drawer/beta/)

      Spacing
      : - 25px vertical spacing between notifications

      Typography
      : - Notification title is [Bold UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold) in [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)
        - Summary text is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic) in [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Date text is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small) in [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Archive link is [Small UI text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small)

      Button
      : - Archive button is a [Large](/design/c/buttons/v2.0.0-beta.4/#rd-large-button) [Primary Button](/design/c/buttons/v2.0.0-beta.4/#rd-primary-button)

      Unread Indicator
      : - 9px diameter circle, 6px right padding
        - Hot Pink color

      Blank State
      : - If there are no active messages, display a message directing users to the notification archive

    contents:
      - type: wide image
        src: ./assets/redline-notelist.png
      - type: wide image
        src: ./assets/redline-no-message.png


  - type: two column
    text: |
      ### Notification Archive

      Typography
      : - Archive heading is a [Basic Section UI Heading](/design/c/typography/v2.0.0-beta.9/#rd-ui-headings-section-basic)
        - Remaining type styles are inherited from the notification list

    contents:
      - type: wide image
        src: ./assets/redline-archive-list.png

  - type: two column
    text: |
      ### Notification Detail

      Typography
      : - Inherited from the notification list style

    contents:
      - type: wide image
        src: ./assets/redline-notedetail.png


  - type: two column
    text: |
      ### Icon details

      Colors
      : - The notification-18 icon is [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray) by default, and [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal) on hover
        - The badge has a Hot Pink background when there are unread notifications and uses a 2px [White Gray](/design/c/colors/v2.0.0-beta.5/#rd-white-gray) border

      Badge
      : - The badge uses [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small) in [White](/design/c/colors/v2.0.0-beta.5/#rd-white)
        - 2px border radius
        - It is set 8px to the right of the notification-18 icon

      Numbering
      : - The badge number reflects the number of active but unread notifications

    contents:
      - type: wide image
        src: ./assets/redline-icon.png


changelog:
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Copy to match UA recommendations.
  - version: 1.0.0-beta.1
    changes: Initial design
---
