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
  - role: Developer
    name: Rich Evers
    email: rich.evers@pearson.com  

implementation: https://pearson-elements-v0.surge.sh/elements/typography/
downloads:
  - name: Sketch
    link: ./assets/Email Template_5.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1gYypf7WpDkSSMsB29Qa9woJLdPsiwGIZ-u0LrH650Vs/edit?usp=sharing


tagline: Emails inform the users about a specific task or message. They may contain critical information, require decisions, or involve multiple tasks.

dependencies:
  - name: Colors
    version: 2.0.0-beta.6
  - name: Typography
    version: 2.0.0-beta.9
  - name: Tables
    version: 1.1.0-beta.1
  - name: Buttons
    version: 2.0.0-beta.4

blocks:
  - type: section
    name: Templates

  - type: two column
    text: |
      Here are a few examples of common email templates:

      * __Create an Account__ verifies users' email address to complete the account creation process.
      * __Forgot Username or Password__ provides the users with a link to reset the credentials.
      * __Password Successfully Reset__ informs the users of an successful password reset.
      * __Purchase Confirmation__ informs the users of a successful payment transaction other details.
      * __Confirmation for Product Return, Exchange, or Cancellation__


    contents:
      - type: narrow image
        src: ./assets/template_create an account.png
        caption: Create an Account
      - type: narrow image
        src: ./assets/template_forgot username or password.png
        caption: Forgot Username or Password
      - type: narrow image
        src: ./assets/template_password successfully reset.png
        caption: Password Successfully Reset


  - type: section
    name: Components

  - type: two column
    text: |
      You can create an email template with these basic components. If there is something that's not defined here, feel free to contact Linda Tsai (linda.tsai@pearson.com).

      * __Logo__

      * __Greeting__

      * __Heading__ is a line of text that explains what the email is about.

      * __Body__ is the main content.

      * __Table__ is helpful for displaying a lot of information for easy viewing.

      * __Link__ is best for non-crucial call to action.

      * __Signature__

      * __Divider__ separates the body text from the footer.

      * __Footer__ contains standard Pearson information. It must include customer support information and copyright text.

      * __Button__ is the primary call to action.

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
      * Greeting
      * Body
      * Signature
      * Divider
      * Footer

  - type: two column
    text: |

      ### Heading
      Heading is option. There are three different layouts regarding the usage of the heading. Choose the one that works best depending on the message.

    contents:
      - type: wide image
        src: ./assets/layouts_heading.png

  - type: two column
    text: |

      ### Responsive Behavior

      The content adjusts to the size of the viewport, and the email frame (in digital ice blue) shrinks proportionally with the content.

      Email design differs from web design in a way that not all email clients support media query, which means that some clients won't be able to tell how wide the viewport is. Therefore, when you design, don't rely on breakpoints, instead, come up with a design that fits all sizes.

    contents:
      - type: wide image
        src: ./assets/template_create an account.png
        caption: Desktop
      - type: narrow image
        src: ./assets/template_create an account_mobile.png
        caption: iPhone 6 (IOS 9)

  - type: section
    name: Email Content

  - type: two column
    text: |

      ### Be clear and concise
      Users are busy, so don’t make them read too much. Simplify the information to help users focus on the message.

      ### Calls to action
      The main point of a of call to action is to get users to do something. It should be more descriptive than “click here”. Start with command verbs to clarify what clicking a link or button will get to. For example:

      * Reset password
      * Order now
      * Lear more

      Give the users a reason why they should perform the task. It helps to explain the benefit of taking the action or give a sense of urgency.

      ### Buttons v.s. Links

      A general rule of thumb is to use only one button for the main call to action so it is clear to the users what they should do.

      Unlike buttons, it’s easier to include links within the copy of your email so it doesn’t cause an abrupt halt. However, that makes links easy to miss. An easy way to do that is to lengthen the number of words covered in a link. Besides, use meaningful description for the link text instead of the URL.

      [Learn more on best email design practices by MailChimp](http://templates.mailchimp.com/design/)


  - type: section
    name: Redlines

  - type: two column
    text: |

      Email Frame
      : - [Digital Ice Blue](/design/c/colors/v2.0.0-beta.6/#rd-digital-pearson-blue) #d6ebe8

      Logo
      : - Height: 45px

      Greeting
      : - Text size: 16px
        - Text line-height: 24px
        - [Charcoal](/design/c/colors/v2.0.0-beta.6/#rd-charcoal) #252525

      Heading
      : - Text size: Light 28px
        - Text line-height: 38px
        - [Charcoal](/design/c/colors/v2.0.0-beta.6/#rd-charcoal) #252525

      Body
      : - Text style: same as greeting

      Table
      : - Style: [Basic Table](/design/c/tables/v1.1.0-beta.1)
        - For numeric values, right-align the values for better readability

      Links
      : - [Generic Link](/design/c/typography/v2.0.0-beta.9/#rd-links)

      Signature
      : - Text style: same as greeting

      Divider
      : - Thickness: 1px
        - [Concrete](/design/c/colors/v2.0.0-beta.6/#rd-concrete) #c7c7c7

      Footer
      : - Text size: 12px
        - Text line-height: 16px
        - [Medium Gray](/design/c/colors/v2.0.0-beta.6/#rd-medium-gray) #6A7070

      Buttons
      : - Style: [Primary Button](/design/c/buttons/v2.0.0-beta.4/#rd-primary-button)
        - Size: [Large](/design/c/buttons/v2.0.0-beta.4/#rd-large-button)
        - On mobile devices, buttons expand to full width

    contents:
      - type: wide image
        src: ./assets/Email Components 2.png

  - type: two column
    text: |
      ### Allow 60px spacing under the first block of text

    contents:
      - type: wide image
        src: ./assets/layouts_heading_redline.png


  - type: two column
    text: |
      ### Separate contents using 40px blocks

    contents:
      - type: wide image
        src: ./assets/Email Components Spacing.png


  - type: two column
    text: |
      ### Responsive Behavior
      The design is responsive to the size of the viewport.

      - The white area has a padding of 5.25%
      - The ice blue frame has a padding of 3.75%

    contents:
      - type: wide image
        src: ./assets/Email Redline_Frame.png







---
