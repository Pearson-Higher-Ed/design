---
layout: default
title: Contextual Help
section: Components
permalink: /docs/ui-components/contextual-help/
---

# Contextual Help (o-contextual-help)

* [Overview](#overview)
* [Help List](#help-list)
* [Standalone Articles](#standalone-articles)
* [Header Activation](#header-activation)
* [Embedded Activation](#embedded-activation)
* [Help Article Formatting](#help-article-formatting)
 * [Formatting Guidelines](#formatting-guidelines)
 
## Overview
This component presents help content and articles within the product experience so that users can answer their questions without the interruption of opening a separate help system in a new tab.

> **When to use this component**  
> Every url in the next gen platform should use the Contextual Help component, at a minimum configuring the two default items in the Help List.


|   Useful info          |                                       |
|------------------------|---------------------------------------|
|   Version              |    1.0-rc1                            |
|   Status               |    Active                             |
|   Origami component    |    [Registry link][reg-entry]         |
|   Product owner        |    [Joe Macaluso][jm-contact]         |
|   Interaction Design   |    [Parker Malenke][pm-contact], [Mike Caskey][mc-contact]       |
|   User Assistance      |    [Annie Persson][ap-contact]        |


[pm-contact]: mailto:parker.malenke@pearson.com
[ap-contact]: mailto:ann.persson@pearson.com
[mc-contact]: mailto:mike.caskey@pearson.com
[jm-contact]: mailto:joe.macaluso@pearson.com
[reg-entry]:  https://origami.pearsoned.com/registry/components/o-contextual-help
[sk]:         ./assets/o-app-header.sketch
[ai]:         ./assets/o-app-header.ai



## Help List  
This displays a listing of help articles relevant to the current url. Every url in the next gen platform should offer a Help List which follows these guidelines:
* A ‘Contact Us’ article must always be displayed at the bottom of the list.
* A ‘Popular Resources’, ‘FAQ’, or similar article relevant to the current url must be displayed in the second to last position.
* Between 0-5 custom articles specifically relevant to features/tools accessible at the current url should be displayed at the top of the list.
* Custom articles must address features/tools which are always accessible by the current user at the current url. If the feature/tool is only available under certain conditions it must be documented in a Standalone Article instead.
* Custom articles should be tailored to the user’s role (educator/student/TA) where relevant.
* Custom articles should be titled with a question.
* The Help List must be accessed exclusively through Header Activation, described below.


## Standalone Articles  
In situations where a feature or tool only appears on a url under certain conditions any related help content must be documented with a Standalone Article. Usage guidelines:

* Standalone Articles must be accessed exclusively through Embedded Activation, described below.
* Standalone Articles must not appear in the Help List.


## Header Activation
The standard interaction with contextual help is to click the “Help” link in the Application Header which opens the drawer and displays the Help List for the current url.


## Embedded Activation
If a feature or tool within a page corresponds to a specific Help Article then it can contain an embedded link which opens the drawer directly to the relevant article. This can be either a Standalone Article or one found in the page’s Help List.


## Help Article Formatting
Authors should follow these conventions when writing articles for the contextual help component:

* Articles must be written at the 9th grade reading level.
* Articles must not link out to 24/7 or Online Help System  content.
* Articles must not link to other articles in the contextual help component.
* Articles should link to external assets such as EI guides, Marketing PDFs, Videos, etc. where relevant.
* Articles should not contain tables.
* Articles must follow the formatting guidelines.


### Formatting guidelines

**Titles**  
Every article should have a single title at the top, encoded as an `<h4>` tag.

**Headings**  
Articles should structure their content using `<h5>` and `<h6>` tags.

**Body copy**  
Article body copy must be written at a 9th grade reading level.

**Bold and italics**  
Should be used normally to provide emphasis. The name of interactive elements (i.e. button labels) must be bolded.

**Unordered lists**  
Should be used to organize content. Must not be nested more than two levels.

**Ordered lists**  
Should be used to describe steps in a workflow. Should not exceed 9 items in length.

**Tips**  
Should be used to give handy bits of information more emphasis.

**Warnings**  
Should be used to call attention to tricky or potentially undoable activities.
