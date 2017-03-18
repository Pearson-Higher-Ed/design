---
layout: component-yaml
title: Modal
section: Components
redirect_from: /docs/ui-components/modal/
version: 2.0.0-beta.1
status: active
implemented: false
people:
  - role: Designer
    name: Elle Steiner
    email: elle.steiner@pearson.com
dependencies:
  - name: Buttons
    version: 1.0.0

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1PRuQGU_AlpPkWBGA5gJuOTEG3pu9xEp5_H7Z2dD7YMw/edit?usp=sharing
  - name: Sketch
    link: ./assets/modal.sketch

tagline: |
  Defines the standard visual style for a modal element with styles for both textual and media content.


blocks:
  - type: section
    name: Text Modals

  - type: two column
    text: |
      Text modals include a header with a title and standard close button. The content area can then contain either a basic text message or more structured content such as a form.

      An optional button bar can present standard actions at the bottom of the  modal.



changelog:

  - version: 2.0.0.-beta.1
    changes: |
      - Re-skinned with the latest styles
      - ADDED: Sticky buttons for long content

  - version: 1.0.1
    changes: |
      - FIXED: Responsive image button bar and sizing.
  - version: 1.0.0
    changes: Initial version
---
