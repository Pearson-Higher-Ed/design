---
title: Mobile Guide
layout: side-toc
section: use
order: 3

blocks:
  - type: main section
    content: Introduction

  - type: content
    content: |
      Yadda yadda yadda...

  - type: secondary section
    content: Goals

  - type: content
    content: |
      - Lean UX
      - Intuitive Design
      - Follows industry standards
      - Cohesive branding and visual design

  - type: secondary section
    content: Principles

  - type: content
    content: |
      - Follow Material Design guidelines for Android applications
      - Follow Apple Human Interface Guidelines for iOS applications

  - type: secondary section
    content: Approach  

  - type: content
    content: |
      tba

  - type: main section
    content: Components

  - type: secondary section
    content: Account
  - type: content
    content: |
      The user account screen is designed to reveal user account details, allow sign out, and provide information about the application version and build.

      iOS specs: <https://zpl.io/Z1n7GLS>
    images:
      - type: ios image
        src: ./assets/ios/account_ios.png
        caption: this is a caption

  - type: secondary section
    content: Annotations
  - type: content
    content: |
      The annotation engine provides users to highlight selected text with three predefined colors, and append notes to help contexualize their highlight.

  - type: secondary section
    content: Assessments - Feedback
  - type: content
    content: |
      The quiz item screen is used within ILP to view and answer questions within a REVEL quiz. Features:
      - current question number indicator
      - total question number indicator
      - point value
      - problem statement (can contain text, audio, video, and/or images)
      - question correctness
      - identified correct answer
      - identified incorrect answer (when answered incorrectly)
      - question navigation
      - primary action (next question, try again)

      mcq_fb_incorrect: <https://zpl.io/2oVjNU>

      mcq_fb_correct: <https://zpl.io/Be6YP>

    images:
      - type: ios image
        src: ./assets/ios/mcq_fb_incorrect.png
        caption: incorrect
      - type: ios image
        src: ./assets/ios/mcq_fb_correct.png
        caption: correct

  - type: secondary section
    content: Assessments - Frontmatter
  - type: content
    content: |
      The quiz frontmatter screen is used within ILP to view and access specific quizzes for a particular course. Features:
      - assignment date
      - due date
      - assignment title
      - number of questions
      - question point value
      - number of questions answered (current / total)
      - assignment status (unavailable, completed, not started, in-progress, overdue)
      - scoring policy
      - primary action (start, continue, review)
    images:
      - type: ios image
        src: ./assets/ios/frontMatter_ios_unavailable.png
        caption: unavailable assignment
      - type: ios image
        src: ./assets/ios/frontMatter_ios_new.png
        caption: new (unaccessed) assignment
      - type: ios image
        src: ./assets/ios/frontMatter_ios_continue.png
        caption: in-progress assignment
      - type: ios image
        src: ./assets/ios/frontMatter_ios_pastDue.png
        caption: past due assignment
      - type: ios image
        src: ./assets/ios/frontMatter_ios_complete.png
        caption: completed assignment

  - type: secondary section
    content: Assessments - Item
  - type: content
    content: |
      The quiz item screen is used within ILP to view and answer questions within a REVEL quiz. Features:
      - current question number indicator
      - total question number indicator
      - point value
      - problem statement (can contain text, audio, video, and/or images)
      - answer options
      - question navigation
      - primary action (submit answer)

      mcq_unselected_ios: <https://zpl.io/Z22Yksn>

      mcq_selected_ios: <https://zpl.io/Z1OOMHs>

    images:
      - type: ios image
        src: ./assets/ios/mcq_unselected_ios.png
        caption: no answer selected
      - type: ios image
        src: ./assets/ios/mcq_selected_ios.png
        caption: selected answer  

  - type: secondary section
    content: Assessments - Results
  - type: content
    content: |

      The quiz results screen is used within ILP to view and access the results of a specific quiz for a particular course. Features:
      - assignment date
      - due date
      - number of questions
      - question point value
      - number of attempts per question
      - number of questions answered (current / total)
      - assignment status (unavailable, completed, not started, in-progress, overdue)
      - scoring policy
      - primary action (close)

      mcq_results_inprogress_ios: <https://zpl.io/ZE4i64>

      mcq_results_completed_ios: <https://zpl.io/ZE4i8b>

    images:
      - type: ios image
        src: ./assets/ios/mcq_results_inprogress_ios.png
        caption: in-progress assignment
      - type: ios image
        src: ./assets/ios/mcq_results_completed_ios.png
        caption: completed assignment

  - type: secondary section
    content: Assignment List
  - type: content
    content: |
      To be added.

      iOS specs: <https://zpl.io/1Xe0r>
    images:
      - type: ios image
      - src: ./assets/ios/assignment_list_ios.png

  - type: secondary section
    content: Assignment Module
  - type: content
    content: |
      To be added.

      iOS specs: <https://zpl.io/4Y1wH>
    images:
      - type: ios image
      - src: ./assets/ios/assignment_list_ios.png

  - type: secondary section
    content: Bookshelf
  - type: content
    content: |
      To be added.

  - type: secondary section
    content: Contents
  - type: content
    content: |
      To be added.

      toc_ios: <https://zpl.io/1bO4sX>

      toc_noImage_ios: <https://zpl.io/ZwuahL>
    images:
      - type: ios image
      - src: ./assets/ios/toc_ios.png
      - type: ios image
      - src: ./assets/ios/toc_noImage_ios.png

  - type: secondary section
    content: Courses
  - type: content
    content: |
      The course screen is used within ILP to download, access, update, and delete course data.

      If no courses are available, the user is prompted to register for their course, with a link to Pearson support provided. Once a course is made available, the user may tap "Download Course" to retrieve the course data to be stored locally on the device.

      Once the course data has been downloaded, the data is made available to the user in the course card. If the course content is updated, a refresh banner is displayed for the user which will action the content update.

      Tapping on the information icon will bring up the details for that course. The user can delete course content from here. If the course is no longer available to the user, it will appear inaccessible.
    images:
      - type: ios image
      - src: ./assets/ios/courses_empty_ios.png
      - type: ios image
      - src: ./assets/ios/courses_download_ios.png
      - type: ios image
      - src: ./assets/ios/courses_ios.png
      - type: ios image
      - src: ./assets/ios/courses_update_ios.png
      - type: ios image
      - src: ./assets/ios/courses_details_ios.png
      - type: ios image
      - src: ./assets/ios/courses_expired_ios.png

  - type: secondary section
    content: Keyboards
  - type: content
    content: |
      To be added.

  - type: secondary section
    content: Loading
  - type: content
    content: |
      To be added.

      iOS specs: <https://zpl.io/23oyI7>
    images:
      - type: ios image
      - src: ./assets/ios/loading_ios.png

  - type: secondary section
    content: Login
  - type: content
    content: |
      The mobile login screen features the Pearson iterrobang logo, username field, and password field. A "need help" link leads to pearsonhighered.com/support/.

      Once the user has entered a valid username and password, the Sign In button becomes active. Unrecognized credentials will trigger a warning modal to the user.

      - iOS empty specs: <https://zpl.io/Z1xy2c6>

      - iOS inactive specs: <https://zpl.io/Z2tuh0V>

      - iOS active specs: <https://zpl.io/Z1DpGj1>

      - iOS Invalid credentials specs: <https://zpl.io/bvQpj>
    images:
      - type: ios image
      - src: ./assets/ios/login_ios.png
      - type: ios image
      - src: ./assets/ios/login_ios_inactive.png
      - type: ios image
      - src: ./assets/ios/login_ios_active.png
      - type: ios image
      - src: ./assets/ios/login_ios_invalid.png

  - type: secondary section
    content: Onboarding
  - type: content
    content: |
      To be added.

      iOS specs: <https://zpl.io/ZvCyGI>

    images:
      - type: ios image
      - src: ./assets/ios/onboarding_ios.png

  - type: secondary section
    content: Performance
  - type: content
    content: |
      Features overall score displayed in points and percentage value, performance by assignment bar chart with paging across date ranges, performance by assignment list view with vertical scroll, time on task.

      iOS specs: <https://zpl.io/Z1erOcW>
    images:
      - type: ios image
      - src: ./assets/ios/performance_ios.png

  - type: secondary section
    content: Search
  - type: content
    content: |
      To be added.

      search_ios_new: <https://zpl.io/1xonn7>

      search_ios_results: <https://zpl.io/Z1BhHOf>

      search_ios_noresults: <https://zpl.io/Z1BhHQj>
    images:
      - type: ios image
        src: ./assets/ios/search_ios_new.png
        caption: empty state
      - type: ios image
        src: ./assets/ios/search_ios_results.png
        caption: results listing
      - type: ios image
        src: ./assets/ios/search_ios_noresults.png
        caption: no results found

  - type: secondary section
    content: Settings
  - type: content
    content: |
      To be added.

      settings_ios: <https://zpl.io/29a1Aq>

      settings_ios_alerts: <https://zpl.io/LWaxg>
    images:
      - type: ios image
        src: ./assets/ios/settings_ios.png
        caption: user settings screen
      - type: ios image
        src: ./assets/ios/settings_ios_alert.png
        caption: alert frequency

  - type: secondary section
    content: TabBar
  - type: content
    content: |
      To be added.

      login_ios: <https://zpl.io/23oyI7>
    images:
      - type: ios image
        src: ./assets/ios/tabBar_ios.png
        caption: iOS tab bar in REVEL

  - type: secondary section
    content: Typography
  - type: content
    content: |
      To be added.

      typography_ios_size: <https://zpl.io/2rOYbE>

      typography_ios_color: <https://zpl.io/Z11BVqT>
    images:
      - type: ios image
        src: ./assets/ios/typography_ios_size.png
        caption: typography sizes for iOS
      - type: ios image
        src: ./assets/ios/typography_ios_color.png
        caption: typography colors for iOS
---
