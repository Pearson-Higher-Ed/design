---
layout: component-yaml
title: Avatar
section: Components
redirect_from: /docs/ui-components/avatar/
version: 1.0.0-beta.2
status: deprecated
implemented: false
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Sennett Johnson
    email: sennett.johnson@pearson.com
  - role: Designer
    name: Albert Christy
    email: albert.christy@pearson.com
dependencies:
  - name: Modal
    version: 1.0.0-beta.2
  - name: Typography
    version: 1.0.0
  - name: Icons
    version: 1.0.0
downloads:
  - name: Sketch
    link: ./assets/avatar.sketch

tagline: |
  Allows the user to select, upload, zoom, and crop an image. Can also be used to edit a previously uploaded image.
features:
  - Photo upload from machine or device
  - Ability to scale and reposition photo
  - Photo cropping
usage_guidelines: |
  Use this component any time a user needs to edit an image they are uploading.

blocks:

  - type: section
    name: Image Selection

  - type: two column
    text: |
      Users may select an image using a file input, drag and drop, or another method that works best in the consuming context. Once a file is selected, the image cropper modal should appear.
    contents:
      - type: narrow image
        src: ./assets/avatar-default-pointer.png
        caption: Using a custom file input.
      - type: narrow image
        src: ./assets/default-file-picker.png
        caption: Using the default file input.
      - type: wide image
        src: ./assets/avatar-open-file.png
        caption: Either the file input or a custom trigger will ultimately open a file chooser.


  - type: section
    name: Scale Photo

  - type: two column
    text: |
      A photo may be scaled from 50% to 200% in size by clicking and dragging the slider towards the bottom of the Edit Photo modal.

    contents:
      - type: wide image
        src: ./assets/avatar-edit-scale-small.png
        caption: Initial Scale
      - type: wide image
        src: ./assets/avatar-edit-scale-large.png
        caption: Increased Scale

  - type: section
    name: Reposition Photo

  - type: two column
    text: |
      The user may also click on their photo and drag it in order to reposition the photo around the silhouette for proper cropping.

    contents:
      - type: wide image
        src: ./assets/avatar-edit-position-start.png
        caption: Initial Position
      - type: wide image
        src: ./assets/avatar-edit-position-end.png
        caption: Photo Repositioned for Cropping

  - type: two column
    text: |
      ### Crop

      The final step is to crop the uploaded photo by pressing the Save button. The portion of the photo in the open square of the silhouette will be set as the user's avatar.

    contents:
      - type: wide image
        src: ./assets/avatar-edit-crop.png
        caption: Pressing Save Crops the Photo


  - type: section
    name: Redlines

    contents:
    - type: narrow image
      src: ./assets/avatar-menu-red.png
      caption: Avatar Menu
    - type: narrow image
      src: ./assets/avatar-menu-hover-red.png
      caption: Avatar Menu with Hover Item

  - type: two column
    text: |
      ### Edit Photo

      Modal
      : - [Text Modal](http://pearson-higher-ed.github.io/design/c/modal/beta/)

      Silhouette
      : - Width: 100%
        - Height: 300px
        - Background Color: [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000), Opacity 50%

      Silhouette Subtraction
      : - Width: 200px
        - Height: 200px

      Slider
      : - Width: 300px
        - Height: 30px
        - Background Color: [Brightly Lit](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6), Opacity 75%
        - Text Color: [Pitch](/design/c/colors/v1.0.1/#rd-pitch-231f20)
        - Icon: fa-photo Icon

      Slider Bar
      : - Color: [Pitch](/design/c/colors/v1.0.1/#rd-pitch-231f20)
        - Width: 220px
        - Thickness: 2px
        - Circle: 14px Diameter

    contents:
    - type: wide image
      src: ./assets/avatar-edit-red.png


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
