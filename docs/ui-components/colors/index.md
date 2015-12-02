---
layout: default
title: Colors
section: Components
permalink: /docs/ui-components/colors/
---

<aside>Under Development</aside>

# Colors

* [Overview](#overview)
* [Light Palette](#light-palette)
* [Dark Palette](#dark-palette)
* [Blue Palette](#blue-palette)


## Overview
Every color used in the Elemental Design library is defined in this component. This makes it easy to see the whole range of color in use and ensures we don't have 3 different versions of the same blue.

> **When to use this component**  
> Only core components such as Buttons or Typography should depend directly on the colors component. Higher level components should get their colors indirectly from the core set of components. This makes it easy to update the color usage across the library.

Colors are organized into *Palettes* which contain *Foreground*, *Background*, and *Accent* colors. Any combination of foreground and background colors from the same palette are guaranteed to have sufficient contrast to meet WCAG 2.0 AA guidelines. Accent colors have no contrast guarantee and can be used for visual decoration (separator lines, for example) but not text.

### Feature summary:

- Single collection of all colors
- Multiple palettes for dark/light themes etc.
- Guaranteed compliance with Accessibility contrast requirements


|   Useful info          |                                       |
|------------------------|---------------------------------------|
|   Version              |    0.1.0                              |
|   Status               |    Active                             |
|   Origami component    |    [Registry link][reg-entry]         |
|   Product owner        |    [Joe Macaluso][jm-contact]         |
|   Designer             |    [Parker Malenke][pm-contact]       |
|   Designer             |    [Ed Zee][ez-contact]               |

[pm-contact]: mailto:parker.malenke@pearson.com
[ez-contact]: mailto:edward.zee@pearson.com
[jm-contact]: mailto:joe.macaluso@pearson.com
[reg-entry]:  https://origami.pearsoned.com/registry/components/o-app-header
[sk]:         ./assets/o-app-header.sketch


## Light Palette

### Foreground Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Pitch          | `#231F20` | ![](http://dummyimage.com/200x40/231F20/231F20) |
| Gray No. 1     | `#565656` | ![](http://dummyimage.com/200x40/565656/565656) |
| Royal Navy     | `#094877` | ![](http://dummyimage.com/200x40/094877/094877) |
| Hyperdrive     | `#0D65A6` | ![](http://dummyimage.com/200x40/0D65A6/0D65A6) |

### Background Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Brightly Lit   | `#E6E6E6` | ![](http://dummyimage.com/200x40/E6E6E6/E6E6E6) |
| Off White      | `#F2F2F2` | ![](http://dummyimage.com/200x40/F2F2F2/F2F2F2) |
| Dirty Ice      | `#F8F8F8` | ![](http://dummyimage.com/200x40/F8F8F8/F8F8F8) |
| White          | `#FFFFFF` | ![](http://dummyimage.com/200x40/FFFFFF/FFFFFF) |
| Highlighter    | `#FDEC2E` | ![](http://dummyimage.com/200x40/FDEC2E/FDEC2E) |

### Accent Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Boring         | `#A6A8AB` | ![](http://dummyimage.com/200x40/A6A8AB/A6A8AB) |
| Sidewalk       | `#B3B3B3` | ![](http://dummyimage.com/200x40/B3B3B3/B3B3B3) |
| Hairline Gray  | `#D0D0D0` | ![](http://dummyimage.com/200x40/D0D0D0/D0D0D0) |


## Dark Palette

### Foreground Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| White          | `#FFFFFF` | ![](http://dummyimage.com/200x40/FFFFFF/FFFFFF) |
| Gray Wash      | `#AEAEAE` | ![](http://dummyimage.com/200x40/AEAEAE/AEAEAE) |

### Background Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Black          | `#000000` | ![](http://dummyimage.com/200x40/000000/000000) |
| Gutenberg Black| `#333333` | ![](http://dummyimage.com/200x40/333333/333333) |
| Full Moon      | `#424242` | ![](http://dummyimage.com/200x40/424242/424242) |

### Accent Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Asphalt        | `#3F3F3F` | ![](http://dummyimage.com/200x40/3F3F3F/3F3F3F) |
| Smoke Gray     | `#545454` | ![](http://dummyimage.com/200x40/545454/545454) |


## Blue Palette

### Foreground Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| White          | `#FFFFFF` | ![](http://dummyimage.com/200x40/FFFFFF/FFFFFF) |

### Background Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Basic Blue     | `#107ACA` | ![](http://dummyimage.com/200x40/107ACA/107ACA) |
| Sea            | `#0C5D99` | ![](http://dummyimage.com/200x40/0C5D99/0C5D99) |

### Accent Colors

| Name           | Hex       | Swatch                                          |
|----------------|-----------|-------------------------------------------------|
| Deep Sea       | `#0A4D80` | ![](http://dummyimage.com/200x40/0A4D80/0A4D80) |
| Sky Blue       | `#9DC0DB` | ![](http://dummyimage.com/200x40/9DC0DB/9DC0DB) |
