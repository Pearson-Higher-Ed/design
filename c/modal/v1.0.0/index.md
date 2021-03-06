---
layout: component-yaml
title: Modal
section: Components
redirect_from: /docs/ui-components/modal/
version: 1.0.0
status: deprecated
implemented: false
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Steph Mineart
    email: steph.mineart@pearsoned.com
  - role: Designer
    name: Sennett Johnson
    email: sennett.johnson@pearson.com
  - role: Designer
    name: Elle Steiner
    email: elle.steiner@pearson.com
dependencies:
  - name: Buttons
    version: 1.0.0
  - name: Typography
    version: 1.0.0
  - name: Breakpoints
    version: 1.0.0
  - name: Templates
    version: 1.0.0-beta.1
  - name: Icons
    version: 1.2.0-beta.1
downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1PRuQGU_AlpPkWBGA5gJuOTEG3pu9xEp5_H7Z2dD7YMw/edit?usp=sharing
  - name: Sketch
    link: ./assets/modal.sketch

tagline: |
  Defines the standard visual style for a modal element with styles for both textual and media content.
features:
  - Fully responsive, scales with browser width
  - Accessibility compliant (constrained tab scope, focus memory, etc.)
  - Styles for both textual and image content
  - Five different zoom levels for image content
  - Optional button toolbar
usage_guidelines: |
  You should typically avoid modals in your designs, using the styles defined here only when necessary.

blocks:
  - type: section
    name: Text Modals

  - type: two column
    text: |
      Text modals include a header with a title and standard close button. The content area can then contain either a basic text message or more structured content such as a form.

      An optional button bar can present standard actions at the bottom of the  modal.

      The text modal uses the [Static Column](/design/c/templates/v1.0.0-beta.1) template and supports both sizes (480px and 800px). At smaller breakpoints both sizes shift to 100% width to prevent content from being too constrained.

      ### Accessibility considerations
      Modals must be careful to properly handle keyboard access to maintain full accessibility compliance. Specifically they must:

      #### Capture Focus
      Opening a modal should move the current keyboard focus into the first focusable element of the modal. Tabbing should only loop through items within the modal, and not escape to the underlying content.

      #### Focus restoration
      Dismissing the modal should return focus to the element that was focused when the modal was activated.
    contents:
      - type: wide image
        src: ./assets/modal-standard.png
        caption: Desktop sized modal with optional button bar.
      - type: narrow image
        src: ./assets/modal-standard-resp.png
        caption: Responsive modal without the button bar.

  - type: section
    name: Media Modals

  - type: two column
    text: |
      This variant presents images in a stripped down and focused modal. The close button and any other tools fit in a toolbar at the top. Content is initially sized according to it's intrinsic dimensions, with a max width/height of 90% of the space below the toolbar.

      ### Image Zooming
      Image modals optionally support zooming to 100%, 150%, 200%, 250%, and 300% levels. The image can be panned by clicking and dragging once it extends beyond the browser viewport.

    contents:
      - type: wide image
        src: ./assets/modal-image.png
        caption: Basic image modal at 100% zoom.
      - type: wide image
        src: ./assets/modal-media-zoom.png
        caption: Zoomed to 200%.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Text Modal

      Overlay
      : - Background Color: [Black](/design/c/colors/v1.0.1/#rd-black-000000), 30% opacity
        - Opening the modal freezes the position of any underlying content, scrolling should only apply to the modal itself

      Spacing
      : - Title has 10px vertical padding, 15px horizontal padding
        - Body has 15px padding all around

      Sizing
      : - Uses the Static Column template in either small or large sizes

      Optional Button Bar
      : - 1px solid [Hairline Gray](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0) divider with 15px horizontal padding
        - [Standard button](/design/c/buttons/v1.0.0/#rd-standard-button) sizes, use only a single [primary](/design/c/buttons/v1.0.0/#rd-primary-button) button at a time (others are [default](/design/c/buttons/v1.0.0/#rd-default-button))
        - 10px above buttons, 15px below
        - 12px between buttons

      Colors
      : - Title background is [Brightly Lit (#e6e6e6)](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6)
        - Content background is [White (#ffffff)](/design/c/colors/v1.0.1/#rd-white-ffffff)

      Shadow
      : - The whole modal has a dropshadow of [Gray No. 1](/design/c/colors/v1.0.1/#rd-gray-no-1-565656), with 7px blur and 1px spread

      Typography
      : - Title is [Basic Title](/design/c/typography/v1.0.0/#rd-basic-title)
        - Content should typically use the [Basic Body](/design/c/typography/v1.0.0/#rd-basic-body) styles

      Icons
      : - Close 'X' is the [times](/design/c/icons/v1.2.0-beta.1/#rd-times) icon

      Dismissing
      : - The text modal may be dismissing by selecting the 'X' icon or anywhere in the gray overlay
        - Pressing the escape key will also dismiss the modal

    contents:
    - type: wide image
      src: ./assets/redlines.modal-standard.png
    - type: narrow image
      src: ./assets/modal-text-no-buttons.png
      caption: Responsively sized text modal with no button bar.

  - type: two column
    text: |
      ### Media Modal

      Overlay
      : - Background Color: [Black](/design/c/colors/v1.0.1/#rd-black-000000), 70% opacity
        - Scrolling is disabled while the modal is open

      Spacing
      : - Toolbar items have 10px vertical padding, 20px horizontal padding on the outside edges, 15px between items

      Sizing
      : - Images take on their native sizes with a maximum width/height of 90%
        - Zoomed images may extend all the way to the edge of the viewport
        - In responsive situations

      Colors
      : - Icons are [White](/design/c/colors/v1.0.1/#rd-white-ffffff) when enabled, [Smoke Gray](/design/c/colors/v1.0.1/#rd-smoke-gray-545454) when disabled
        - Toolbar background is [Black](/design/c/colors/v1.0.1/#rd-black-000000), 95% opacity

      Shadow
      : - The image has a dropshadow of [Black](/design/c/colors/v1.0.1/#rd-black-000000), with a 40px blur and 1px spread

      Zooming
      : - Images can be zoomed to 100%, 150%, 200%, 250%, and 300% of the original size
        - Once the image is larger than the viewport it may be panned by clicking and dragging (or just dragging on touch devices)
        - `grab` and `grabbing` css cursors should be used when panning

      Icons
      : - Close 'X' is the [times](/design/c/icons/v1.2.0-beta.1/#rd-times) icon
        - Zoom icons are [search-plus](/design/c/icons/v1.2.0-beta.1/#rd-search-plus) and [search-minus](/design/c/icons/v1.2.0-beta.1/#rd-search-minus)

      Dismissing
      : - The media modal may be dismissed by selecting the 'X' icon or anywhere in the gray overlay region
        - Pressing the escape key will also dismiss the modal

    contents:
      - type: wide image
        src: ./assets/redlines.modal-media.png

  - type: two column
    text: |
      ### Accessibility guidelines
      Follow these rules and guidelines for ensuring modals behave properly when used with assistive technology.
    contents:
      - type: text
        content: |
          Modals, being a single-context item (they do not coexist with any existing page, but act as though they are their own page), will need the following attributes and settings:

          The dialog body itself (usually a div) needs `role="dialog"` and when the user opens the dialog they ought to get the "name" of it as well, so inside is usually a heading (and it can be an h1 because it's its own context) with an id. Remember id's must be unique to the whole HTML document and must start with a _ or a letter! The dialog div then additionally needs `aria-labelledby=" the id of that heading "`.

          For a text-only dialog, where the modal is mostly just explaining stuff with perhaps an additional "ok" button, it's possible/encouraged to throw an id on the p element holding that text as well and on the dialog div add
          `aria-describedby=" id of that p element "`.

          Example of non-text modal code:

          ~~~
          <div role="dialog" aria-labelledby="f123">
            <button data-foo="close">
              <i class="pe-icon--times" aria-hidden="true"></i>
              <span class="pe-sr-only">Close dialog</span>
            </button>

            <h1 id="f123">All about foo</h1>

            ... possible form elements or interactives inside mixed with text...
          </div>
          ~~~

          Example of a more text-only dialog:

          ~~~
          <div role="dialog" aria-labelledby="q456" aria-describedby="p233">
            <button data-foo="close">
              <i class="pe-icon--times" aria-hidden="true"></i>
              <span class="pe-sr-only">Close dialog</span>
            </button>

            <h1 id="q456">Zomg</h1>

            <p id="p233">Logging in requires you first contact someone from the FooBar office</p>

            <a href="/contact">Contact the FooBar office</a>
          </div>
          ~~~

          Modals should always have a close button for touchscreen accessibility, but also listen for ESC to close and bring the focus back to the modal trigger. Focus cycles through the modal so long as it is open.

          Additionally, if the modal is, source-wise, not inside the page content, then we can prevent a nonvisual user accidentally reading out of the dialog using `aria-hidden`. Be careful using `aria-hidden` and make certain it is set to "false" (or removed entirely) when the modal is closed!

          When modal is not open:

          ~~~
          <body>
            <div class="page_container">
              everything on the visible page is here!
            </div>

            <div role="dialog" aria-labelledby="f123" style="display:none;">
              ...
            </div>
          </body>
          ~~~

          When modal is open:

          ~~~
          <body>
            <div class="page_container" aria-hidden="true">
              This page is not visible to AT!
            </div>

            <div role="dialog" aria-labelledby="f123">
              ...
            </div>
          </body>
          ~~~

          Only mess around with `aria-hidden` on the page if you have a structure like this. If the modal div is *inside* the main page content div, `aria-hidden` should not be used, for it will affect all children including the modal itself. AT users would basically get a blank page.


changelog:
  - version: 1.0.0
    changes: Initial version
---
