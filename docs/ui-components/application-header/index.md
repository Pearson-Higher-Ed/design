---
layout: component
title: Application Header
section: Components
permalink: /docs/ui-components/application-header/
version: 1.0
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Design
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Visual Design
    name: Meredith Williamson
    email: meredith.williamson@pearson.com
implementations:
  - type: origami
    link: https://origami.pearsoned.com/registry/components/o-app-header
downloads:
  - name: .sketch mockup
    link: ./assets/o-app-header.sketch
  - name: .ai mockup
    link: ./assets/o-app-header.ai
---

# Application Header (o-app-header)

* [Overview](#overview)
* [Signed Out Mode](#signed-out-mode)
* [Basic Mode](#basic-mode)
* [Course Mode](#course-mode)
* [Integration Mode](#integration-mode)
* [Redlines](#redlines)

## Overview
This component contains and displays global tools and navigation across the next gen platform. It offers a simple and consistent way to include standard behavior such as sign in/sign out, help content, and global navigation. For courses, it will present local navigation at mobile breakpoints.

<aside class="usage">
  <div class="title">When to use this component</div>
  <div class="message">
    Every application that's a part of the next gen platform should display the relevant mode of this header in order to promote a consistent experience.
  </div>
</aside>

The header can be presented in four different modes depending on the context it's in. A user's first interaction with the header will likely be the [Signed Out Mode](#anonymous-mode) which displays only the most basic information (usually including a sign in link). After signing in the [Basic Mode](#basic-mode) represents the 'default' header, offering functionality such as account management and sign out. Once the user launches a specific course the [Course Mode](#course-mode) adds a few features, most notably local navigation for mobile breakpoints. In situations where the user's session is managed by a third party (for example 3PL/LMS integration) the [Integration Mode](#focus-mode) will remove distracting/irrelevant navigation options.

### Feature summary:

- Pearson branding/navigate to home
- Standard help link
- Sign in/Sign out
- My Account
- Local navigation for courses (at mobile breakpoints)
- Accessibility best practices
- Mobile ready responsive design


## Signed Out Mode

<div
  style="border: 1px solid #eee; position: relative;">
  <img
    src="./assets/signed-out-mode-redlines.png"
    style="
      background-color: white;
      width: 100%">
  <img
    src="./assets/signed-out-mode.png"
    onMouseOver="this.style.opacity='0'"
    onMouseOut="this.style.opacity='1'"
    style="
      background-color: white;
      width: 100%;
      position: absolute;
      top:0;
      left:0;">
</div>

This is the simplest version of the header, just displaying the Pearson logo (with no link interaction), the help link, and (optionally) a Sign In link. The help link is designed to trigger the [Contextual Help component]().

> **Use this mode when**  
> The user is signed out

### Options

*Remove sign in link*  
There is a single configuration option to remove the "Sign In" link.

> **Use when**  
> Displaying the sign in link in the header would be redundant (e.g. on the actual sign in page).


## Basic Mode

<div
  style="border: 1px solid #eee; position: relative; margin-bottom:20px;">
  <img
    src="./assets/basic-mode-1024-redlines.png"
    style="
      background-color: white;
      width: 100%">
  <img
    src="./assets/basic-mode-1024.png"
    onMouseOver="this.style.opacity='0'"
    onMouseOut="this.style.opacity='1'"
    style="
      background-color: white;
      width: 100%;
      position: absolute;
      top:0;
      left:0;">
</div>

<div
  style="border: 1px solid #eee; position: relative;">
  <img
    src="./assets/basic-mode-480-redlines.png"
    style="
      background-color: white;
      width: 100%">
  <img
    src="./assets/basic-mode-480.png"
    onMouseOver="this.style.opacity='0'"
    onMouseOut="this.style.opacity='1'"
    style="
      background-color: white;
      width: 100%;
      position: absolute;
      top:0;
      left:0;">
</div>

Represents the default signed in experience. Expands on the Signed Out Mode by making the Pearson Logo a home link (currently [www.console.pearson.com](http://console.pearson.com)) and including the *User Menu*.

The User Menu is labelled with the user's first name and contains My Account and Sign Out options. At widths less than 768px it is condensed into the *Mobile Menu* which relabels the dropdown as "Menu" and extends it with a list of courses (if the consuming app has that information).

> **Use this mode when**  
> The user logs in to a standard Pi session and needs a default header experience

### Options

*Course listing*  
The Mobile Menu can display a list of Next Gen courses for the current user. If the list is longer than five items in length it's truncated and a "See X more courses" item is added at the bottom.

> **Use when**  
> The consuming application contains a list of courses for the current user.



## Course Mode

<div
  style="border: 1px solid #eee; position: relative;">
  <img
    src="./assets/course-mode-redlines.png"
    style="
      background-color: white;
      width: 100%">
  <img
    src="./assets/course-mode.png"
    onMouseOver="this.style.opacity='0'"
    onMouseOut="this.style.opacity='1'"
    style="
      background-color: white;
      width: 100%;
      position: absolute;
      top:0;
      left:0;">
</div>

At desktop sizes this is similar to the Basic Header. The Mobile Menu gains an "All Courses" link and any local navigation for the course. The Course Mode also offers the ability to enable a light theme.

> **Use this mode when**  
> A user launches a specific product (such as Revel, Pearson Reader, etc.) with local navigation


### Options

*Course navigation*  
At narrower breakpoints the Mobile Menu should contain the navigation for the course. The title of the current course will head this section.

> **Use when**  
> The course offers any high level local navigation options


*Light theme*  
The header can switch it's color from black to a light gray.

> **Use when**  
> The user is viewing a reading, assessment, or some other type of content which requires their complete focus

<!-- ***

#### User/Nav Menu customization `[deprecated]`
A product can insert arbitrary items in the User/Nav Menu which will appear above the standard items. This ability is included to support use cases for existing products, but should not be used by any new consumers of the header.

> **Use when**  
> REVEL needs to display an "About REVEL" link

> **Use when**  
> REVEL needs to display an "Exit review mode" link

***

#### Search box insertion `[deprecated]`
REVEL can manually manipulate the dom for the header to include the search box at widths `>=` 758px. This is non-standard behavior to meet REVEL's needs as the transition is made to a more component-oriented architecture and design.

> **Use when**  
> REVEL needs to include a search box in the header -->


## Integration Mode

<div
  style="border: 1px solid #eee; position: relative;">
  <img
    src="./assets/integration-mode-redlines.png"
    style="
      background-color: white;
      width: 100%">
  <img
    src="./assets/integration-mode.png"
    onMouseOver="this.style.opacity='0'"
    onMouseOut="this.style.opacity='1'"
    style="
      background-color: white;
      width: 100%;
      position: absolute;
      top:0;
      left:0;">
</div>

In this version of the header many options are removed that aren't relevant in cases where a user is linking their account to a 3rd party (e.g. BlackBoard, Canvas, or other LMSs). The Logo is no longer a link and the right side of the header only contains a help link.

> **Use when**  
> The user's session is managed by a third party and the user shouldn't have access to platform session features (e.g. sign out, My Account). Specifically, this applies to 3PL/LMS integration scenarios.




## Redlines

For detailed documentation on colors, typography, sizes, spacing, etc. please see the [redlines available here](./assets/redlines.zip).
