---
layout: component-yaml
title: Avatar
section: Components
redirect_from: /docs/ui-components/avatar/
version: 1.0.0-beta.1
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
  This component defines the standard visual style for the avatar element which allows for photo upload.
features:
  - Photo upload from machine or device
  - Ability to scale and reposition photo
  - Photo cropping
  - Delete photo
usage_guidelines: |
  Every instance of the avatar element should come from this component.

blocks:
  - type: section
    name: Avatar

  - type: two column
    text: |
      The avatar component is comprised of an avatar image and a linked area that allows the user to update their photo.

      A new account will display the Default Avatar image. During the photo upload process the user is provided with photo editing tools in order to scale and crop their photo appropriately.

      At any time the user may upload a new photo or delete their current photo. Once a photo is deleted the Default Avatar will display again.

    contents:
      - type: narrow image
        src: ./assets/avatar-default.png
        caption: Default Avatar
      - type: narrow image
        src: ./assets/avatar-photo.png
        caption: Photo Avatar

  - type: section
    name: Avatar Menu

  - type: two column
    text: |
      ### Default Avatar

      When "Update Photo" is pressed on the Default Avatar the user moves directly on to the Upload Photo process. No menu is presented.

    contents:
      - type: narrow image
        src: ./assets/avatar-default-pointer.png
        caption: Default Avatar

  - type: two column
    text: |
      ### Photo Avatar

      When "Update Photo" is pressed on a Photo Avatar a menu is presented with options to "Upload Photo" or "Delete Photo".

    contents:
      - type: narrow image
        src: ./assets/avatar-menu-pointer.png
        caption: Photo Avatar
      - type: narrow image
        src: ./assets/avatar-menu-hover.png
        caption: Photo Avatar Hover State


  - type: section
    name: Upload Photo

  - type: two column
    text: |
      ### Open File

      When the photo upload process is initiated the user's browser or device will display the default open file menu.

      Once a file is chosen the user will move on to the Edit Photo process.

    contents:
      - type: wide image
        src: ./assets/avatar-open-file.png
        caption: Browser Default Open File


  - type: section
    name: Edit Photo

  - type: two column
    text: |
      ### Scale

      A photo may be scaled from 50% to 200% in size by clicking and dragging the slider towards the bottom of the Edit Photo modal.

    contents:
      - type: wide image
        src: ./assets/avatar-edit-scale-small.png
        caption: Initial Scale
      - type: wide image
        src: ./assets/avatar-edit-scale-large.png
        caption: Increased Scale

  - type: two column
    text: |
      ### Reposition

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
    name: Delete Photo

  - type: two column
    text: |
      If a user chooses Delete Photo from the Avatar Menu they will be asked if they are sure they would like to permanently delete their photo.

      Once their photo is deleted it will be replaced by the Default Avatar until a new photo is uploaded.

    contents:
      - type: wide image
        src: ./assets/avatar-delete.png


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Avatar

      Window
      : - Width: 175px
        - Height: 175px
        - Border: 1px solid [Gutenberg Black (#333333)](/design/c/colors/v1.0.1/#rd-gutenberg-black-333333)

      Update Photo
      : - Background Color: [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000), 55% Opacity
        - Height: 34px
        - Text Align: Center
        - Text: [Large Label](/design/c/typography/v1.0.0/#rd-large-label)
        - Icon: [Camera](/design/c/icons/v1.0.0/#rd-camera)
        - Color: [White](/design/c/colors/v1.0.1/#rd-white-ffffff)

    contents:
    - type: narrow image
      src: ./assets/avatar-red.png

  - type: two column
    text: |
      ### Avatar Menu

      Menu
      : - Width: 175px
        - Background Color: [Brightly Lit (#E6E6E6)](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6)
        - Border: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)
        - Padding: 10px Vertical

      Menu Item
      : - Height: 34px
        - Padding: 20px Horizontal
        - Text: [Basic Label](/design/c/typography/v1.0.0/#rd-basic-label)
        - Color: [Gutenberg Black (#333333)](/design/c/colors/v1.0.1/#rd-gutenberg-black-333333)

      Menu Item Hover
      : - Background Color: [Smoke Gray](/design/c/colors/v1.0.1/#rd-smoke-gray-545454)
        - Color: [White](/design/c/colors/v1.0.1/#rd-white-ffffff)

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
