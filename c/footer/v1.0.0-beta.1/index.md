---
layout: component-yaml
title: Footer
section: Components
version: 1.0.0-beta.1
status: active
implemented: false
people:
  - role: Interaction Design
    name: Parker Malenke
    email: parker.malenke@pearson.com
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/12b6shy8-bqWRkYoQKiQbAIqcepyHqgjGmulx3dsjghs/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/footer.sketch
dependencies:
  - name: Colors
    version: 2.0.0
  - name: Typography
    version: 2.0.0

tagline: |
  Makes policy information available on signed out pages.
features:
  - Modes for page load and dynamic presentation
  - Animated presentation
  - Error, information, and confirmation styles
usage_guidelines: |
  All signed out pages should use this component to make the Terms of Use, Privacy Policy, and other policies available to users.

blocks:
  - type: section
    name: Basic Footer

  - type: two column
    text: |
      The basic footer simply lists the Terms of Service and Privacy Policy links and then includes a copyright declaration.
    contents:
      - type: wide image
        src: ./assets/basic.footer.png
        caption: The basic footer.

  - type: two column
    text: |
      ### Additional links
      If other policies are relevant to the current page they may be added to the list after the default two.
    contents:
      - type: wide image
        src: ./assets/extra.link.png
        caption: This page includes an accessibility statement.

  - type: two column
    text: |
      ### Responsive behavior
      At [small](/design/c/breakpoints/v1.0.0/#rd-small) [extra small](/design/c/breakpoints/v1.0.0/#rd-extra-small) breakpoints the copyright declaration moves to it's own line.
    contents:
      - type: wide image
        src: ./assets/responsive.footer.png
        caption: Two line footer used at responsive sizes.

  - type: two column
    text: |
      ### Dark mode
      If the footer needs to be used on a darker background there is a version with all white text.
    contents:
      - type: wide image
        src: ./assets/dark.footer.png
        caption: In order to maintain appropriate contrast on darker backgrounds a version of the footer with white text is available.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Typography
      : - [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic) for all text at normal viewports
        - Copyright declaration is [UI Text - Small](/design/c/typography/v2.0.0/#rd-ui-text-small) for [Small](/design/c/breakpoints/v1.0.0/#rd-small) and [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) breakpoints
        - Standard [Link Styles](/design/c/typography/v2.0.0/#rd-links)

      Colors
      : - Use standard typography colors for the basic footer
        - Use [White](/design/c/colors/v2.0.0/#rd-white) for all text in the dark mode

      Spacing
      : - Footer should appear 24px above the bottom of the page
        - In the responsive mode the link are 12px above the copyright declaration
    contents:
      - type: wide image
        src: ./assets/redlines.png


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
