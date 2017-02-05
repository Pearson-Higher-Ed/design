---
layout: component-yaml
title: Email
section: Components
version: 1.0.0-beta.1
status: active
implemented: true
people:
  - role: Designer
    name: Linda Tsai
    email: linda.tsai@pearson.com
  - role: Designer
    name: Karen Taxier
    email: karen.taxier@pearson.com

implementation: https://pearson-elements-v0.surge.sh/elements/typography/
downloads:
  - name: Sketch
    link: ./assets/Email Template_4 copy.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1gYypf7WpDkSSMsB29Qa9woJLdPsiwGIZ-u0LrH650Vs/edit?usp=sharing


tagline: Emails inform the users about a specific task or message. They may contain critical information, require decisions, or involve multiple tasks.

dependencies:
  - name: Colors
    version: 2.0.0-beta.5

blocks:
  - type: section
    name: Templates

  - type: two column
    text: |
      Some email examples include:

      * __Email Address Verification__ asks users to confirm the email address to complete the account creation process.
      * __Username/Password Reset__ provides the users with a link to reset the credentials.
      * __Password Reset Confirmation__ informs the users of an successful password reset.
      * __Purchase Confirmation__ informs the users of a successful payment transaction other details.
      * __Confirmation for Product Return, Exchange, or Cancellation__


    contents:
      - type: narrow image
        src: ./assets/Email Address Verification.png
        caption: Template - [Email Address Verification](http://www.wikihow.com/End-a-Letter)
      - type: narrow image
        src: ./assets/Username Password Request.png
        caption: Template - [Username Password Request](c/email/v1.0.0-beta.1/assets/Email Address Verification.png)  
      - type: narrow image
        src: ./assets/Password Reset Confirmation.png
        caption: Template - [Email Reset Confirmation](./assets/Password Reset Confirmation.png)    


  - type: section
    name: Components

  - type: two column
    text: |
      You can build your email with these basic components, but don't feel you are limited with the items in the list.

      1. __Logo__

      2. __Greetings__ is a short line of text stating the core message

      3. __Heading__ is a line of text that explains what the email is about.

      4. __Body__ is the main content

      5. __Table__ is an effective way of displaying data

      6. __Link__ is best for non-crucial call to action

      7. __Sign-off__

      8. __Divider__ separates the body text from the footer

      9. __Footer__ contains standard Pearson information. It must include customer support information and copyright text

      10. __Button__ is the primary call to action

    contents:
      - type: wide image
        src: ./assets/Email Components.png

  - type: section
    name: Design

  - type: two column
    text: |
      Build an email using the components following these rules:

      ### Minimal requirement for an email
      * Logo
      * Greetings
      * Body
      * Sign-off
      * Divider
      * Footer

      ### Use 40px blocks for spacing
      Separate distinct contents or group related contents by using spacing of multiples of 40px. See the illustration on the left for example.

      ### Heading comes after greetings
      Heading is suggested to have for its clarity and efficiency. It should come after the greetings, but you may break this rule if there is legitimate design reasons. For example, in the Email Verification template, heading comes prior to the greetings in order to have a more natural reading flow.

    contents:
      - type: wide image
        src: ./assets/Email Components Spacing.png
        caption: Create spacing using blocks of 40px tall


  - type: two column
    text: |

      ### Mobile
      The design is responsive to the size of the viewport. Keep in mind that media query doesn’t work for all clients, so you should design as if there is no breakpoints.The ice blue border grows proportionally to the content width. See [Redlines](/design/c/email/beta/#redlines) for more details.

    contents:
      - type: narrow image
        src: ./assets/Email Address Verification_Mobile_iPhone 6_IOS 9.png
        caption: iPhone 6 (IOS 9)

  - type: section
    name: Redlines

  - type: two column
    text: |

      Logo
      : - Height: 45px

      Greetings
      : - Text size: 16px
        - Text line-height: 24px
        - Charcoal #252525

      Heading
      : - Text size: Light 28px
        - Text line-height: 38px
        - Charcoal #252525

      Body
      : - Text style: same as greetings

      Table
      : - Style: [Basic Table](/design/c/tables/v1.1.0-beta.1)
        - Right-align numbers so it’s easier to add up the values

      Link
      : - Generic Link

      Sign-off
      : - Text style: same as greetings

      Divider
      : - Thickness: 1px
        - Concrete #c7c7c7

      Footer
      : - Text size: 12px
        - Text line-height: 16px
        - Medium Gray #6A7070

      Button
      : - Style: Primary Button (Large)
        - On mobile devices, buttons expand to full width

    contents:
      - type: wide image
        src: ./assets/Email Components 2.png

  - type: two column
    text: |
      ### Responsive Behavior
      The design is responsive to the size of the viewport.

      - The white area has a padding of 5.25%
      - The ice blue frame has a padding of 3.75%

    contents:
      - type: wide image
        src: ./assets/Email Redline_Paddings.png

---
