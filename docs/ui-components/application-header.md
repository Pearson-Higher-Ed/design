---
layout: default
title: Application Header
section: UI Components
permalink: /docs/ui-components/application-header/
---

# Application Header (o-app-header)

#### Description
The application header provides consistent navigation and user administration controls across all Pearson Higher Ed applications. It appears at the top of the page and contains **site-oriented** content. It *may* contain **page-oriented** content&mdash;for example, a search box&mdash;provided that such content has potential use in any product. The application header may also display page-oriented navigation that will be rendered in the mobile collapsible menu. In general, however, page-oriented content should be rendered outside of the application header.

#### Design Contacts
Interaction Design:  Web [Parker Malenke](mailto:parker.malenke@pearson.com)
Visual Design: [Meredith Williamson](meredith.williamson@pearson.com)

#### Current Status
[DUX-71](http://jira.pearsoncmg.com/jira/browse/DUX-71)

## Contents
* [Structure](#structure)
* [Interaction](#interaction)
* [Visual Spec](#visual)
* [Prototype](#prototype)
* [User Assistance](#ua)
* [Screenshots](#screenshots)
* [Accessibility Audit](#accessibility)
* [Research Findings](#research)

## Component Design

### <a id="structure"></a>Structure
![Application Header - Desktop]({{ site.baseurl }}/img/application-header/1-structure-desktop.png)

The application consists of four basic elements:

* Pearson Logo
* Help
* Username (when a user is not signed in, this will show the 'Sign In' text)
* Help (optional depending on specific application needs)

![Application Header - Mobile]({{ site.baseurl }}/img/application-header/2-structure-mobile.png)

The mobile version of the header is similar but has one distinct difference to account for smaller mobile screen widths.

* 'Username' is replaced with 'Menu' and includes course related navigation, 'My Account', and 'Sign Out'

### <a id="interaction"></a>Interaction

#### Breakpoints

|   Size   |   Pixels   |
|   ---   |   ---   |
|   Large   |    > 1024px   |
|   Medium   |   768px - 1023px   |
|   Small   |   480px - 767px   |
|   Extra Small   |   320px - 479px   |

#### Large Header (> 1024px)
This is the default desktop header for screen widths greater than 1024px.  Beyond this width we can show the entire name string.
![Application Header - Large]({{ site.baseurl }}/img/application-header/visual/3-large.png)

#### Medium Header (768px - 1023px)
##### Default desktop header
![Application Header - Medium]({{ site.baseurl }}/img/application-header/visual/4-medium.png)
* Revel can inject their search bar component as needed
* Names exceeding 40+ characters will be truncated with ellipses to 22 characters at this breakpoint

##### Desktop profile menu
![Application Header - Medium Profile Menu]({{ site.baseurl }}/img/application-header/visual/4-medium-menu-open.png)
* 'All Courses' link provides a secondary method of returning home
* 'About REVEL' can be injected here as well

##### Desktop help menu
![Application Header - Medium Help Menu]({{ site.baseurl }}/img/application-header/visual/4-medium-help-open.png)
* In Console 'Help' will activate the drawer
* In REVEL this can open a dropdown on the relevant pages

#### Small Header (480px - 767px)
##### Default, closed header
![Application Header - Small]({{ site.baseurl }}/img/application-header/visual/5-small.png)

##### Open menu on Console
![Application Header - Small]({{ site.baseurl }}/img/application-header/visual/5-small-menu-open.png)
* At this breakpoint we still use the full menu, but visually it doesn't span the full page width

#### Extra Small Header (320px - 479px)
##### Default, closed header
![Application Header - Extra Small]({{ site.baseurl }}/img/application-header/visual/6-xsmall-signedout-default.png)

##### Open menu on Console
![Application Header - Extra Small Console Menu]({{ site.baseurl }}/img/application-header/visual/6-xsmall-menu-console.png)
* This will include a list of courses (shown here with two courses)

##### Open menu on REVEL
![Application Header - Extra Small REVEL Menu]({{ site.baseurl }}/img/application-header/visual/6-xsmall-menu-revel.png)
* The list of courses is replaced with an 'All Courses' link that returns to Console home
* The current course remains with the local navigation displayed beneath it
* 'About REVEL' is appended near the bottom

##### Open help on REVEL
![Application Header - Extra Small REVEL Help]({{ site.baseurl }}/img/application-header/visual/6-xsmall-help-revel.png)
* On REVEL, help may open a dropdown
* In Console, the help option activates the side drawer

##### Signed out and anonymous states
![Application Header - Extra Small Signed Out]({{ site.baseurl }}/img/application-header/visual/6-xsmall-signedout-default.png)
![Application Header - Extra Small Help Only]({{ site.baseurl }}/img/application-header/visual/6-xsmall-anon-helponly.png)
![Application Header - Extra Small Always Learning]({{ site.baseurl }}/img/application-header/visual/6-xsmall-anon-always.png)
* These can be used in different circumstances depending on whether you want to present the 'Sign In' and 'Help' options
* At least one of these may be used by Exchange for the LMS pair course flow

### <a id="visual"></a>Visual Spec
#### Desktop header
![Application Header - Desktop Redline]({{ site.baseurl }}/img/application-header/visual/7-desktop-redline.png)
|   Height   |   54px   |
|   Background   |   #000000   |
|   Logo, label text, caret   |   #FFFFFF   |
|   Vertical separating pipe   |   #EFEFEF   |
|   Font   |   15px, Helvetica Neue Light   |

##### Signed Out Header
![Application Header - Signed Out]({{ site.baseurl }}/img/application-header/visual/7-desktop-signedout.png)

##### Anonymous Header with Help
![Application Header - Anonymous Header with Help]({{ site.baseurl }}/img/application-header/visual/7-desktop-anon-help.png)

##### Anonymous Header
![Application Header - Anonymous Header]({{ site.baseurl }}/img/application-header/visual/7-desktop-anon.png)

#### Desktop menu
![Application Header - Desktop Menu Redline]({{ site.baseurl }}/img/application-header/visual/7-desktop-menu-redline.png)
|   Menu background   |   #333333   |
|   Menu top bar   |   #545454   |
|   Menu item separating line   |   #3F3F3F   |
|   Menu item font color   |   #AAAAAA   |

Deprecated Menu Customization
|   Custom menu item color   |    #FFFFFF   |
|   Custom menu item separating line   |   #1E1E1E   |

Deprecated Help Dropdown
![Application Header - Deprecated Help Dropdown]({{ site.baseurl }}/img/application-header/visual/4-medium-help-open.png)

#### Mobile Header
![Application Header - Mobile Redline]({{ site.baseurl }}/img/application-header/visual/8-mobile-redline.png)
|   Height   |   44px   |
|   Background   |   #000000   |
|   Logo, label text, caret   |   #FFFFFF   |
|   Vertical separating pipe   |   #EFEFEF   |
|   Font   |   15px, Helvetica Neue Light   |

##### Signed Out Header
![Application Header - Signed Out]({{ site.baseurl }}/img/application-header/visual/6-xsmall-signedout-default.png)

##### Anonymous Header with Help
![Application Header - Anonymous Header with Help]({{ site.baseurl }}/img/application-header/visual/6-xsmall-anon-helponly.png)

##### Anonymous Header
![Application Header - Anonymous Header]({{ site.baseurl }}/img/application-header/visual/6-xsmall-anon-always.png)

#### Mobile Menu
![Application Header - Mobile Menu Redline]({{ site.baseurl }}/img/application-header/visual/8-mobile-menu-redline.png)
|   Menu background   |   #333333   |
|   Menu top bar   |   #545454   |
|   Menu item separating line   |   #3F3F3F   |
|   Menu item font color   |   #AAAAAA   |
|   Course item font   |   18px, Helvetica Neue Regular   |
|   Course item font color   |    #FFFFFF    |
|   Course item separating line   |   #1E1E1E   |

Deprecated Mobile Menu Customization
![Application Header - Mobile Deprecated Menu Redline]({{ site.baseurl }}/img/application-header/visual/8-mobile-deprecated-menu-redline.png)
|   Course background   |   #424242   |
|   Course item font   |   18px, Helvetica Neue Regular   |
|   Course item font color   |    #FFFFFF    |
|   Course item separating line   |   #1E1E1E   |
|   Course subnavigation item font   |   15px, Helvetica Neue Light   |
|   Course subnavigation item font color   |   #FFFFFF   |
|   Course subnavigation selected item font   |   15px, Helvetica Neue Medium   |
|   Course subnavigation selected item font color   |   #808080   |

#### Light Mode (Variant for Reader Mode)
REVEL can activate a light colored variant for it's reader mode.

##### Desktop Header Light
![Application Header - Desktop Light]({{ site.baseurl }}/img/application-header/visual/9-desktop-light.png)
|   Background   |   #F2F2F2   |
|   Logo, label text, caret   |   #333333   |
|   Vertical separating pipe   |   #333333   |

##### Desktop Menu Light
![Application Header - Desktop Menu Light]({{ site.baseurl }}/img/application-header/visual/9-desktop-menu-light.png)
|   Menu background   |   #E6E6E6   |
|   Menu top bar   |   #A6A8AB   |
|   Menu item separating line   |   #B3B3B3   |
|   Menu item font color   |   #666666   |

Deprecated Desktop Menu Light Customization
|   Custom menu item color   |    #333333   |
|   Custom menu item separating line   |   #B3B3B3   |

Deprecated Help Dropdown
![Application Header - Deprecated Help Dropdown]({{ site.baseurl }}/img/application-header/visual/9-desktop-help-light.png)

##### Mobile Header Light
![Application Header - Mobile Light]({{ site.baseurl }}/img/application-header/visual/10-mobile-light.png)
|   Background   |   #F2F2F2   |
|   Logo, label text, caret   |   #333333   |
|   Vertical separating pipe   |   #333333   |

Mobile Menu Light
![Application Header - Mobile Menu Light]({{ site.baseurl }}/img/application-header/visual/10-mobile-menu-light.png)
|   Menu background   |   #E6E6E6   |
|   Menu top bar   |   #A6A8AB   |
|   Menu item separating line   |   #B3B3B3   |
|   Menu item font color   |   #666666   |
|   Course item font color   |    #231F20    |
|   Course item separating line   |   #B3B3B3   |

Mobile Deprecated Menu Light
![Application Header - Mobile Menu Light]({{ site.baseurl }}/img/application-header/visual/10-mobile-deprecated-menu-light.png)
|   Course background   |   #CCCCCC   |
|   Course item font color   |    #231F20    |
|   Course subnavigation item font color   |   #231F20   |
|   Course subnavigation selected item font color   |   #777777   |

### <a id="prototype"></a>Prototype
TBD

### <a id="ua"></a>User Assistance
TBD

### <a id="screenshots"></a>Screenshots
TBD

### <a id="accessibility"></a>Accessibility Audit
TBD

### <a id="research"></a>Research Findings
TBD