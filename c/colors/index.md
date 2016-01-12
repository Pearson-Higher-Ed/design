---
layout: component
title: Colors
section: Components
redirect_from: /docs/ui-components/colors/
version: 1.0.0-beta.1
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
implementations:
  - type: Origami
    link: https://origami.pearsoned.com/registry/components/o-color
---


* TOC here
{:toc}

## Overview
<div markdown="1" class="tagline">
Every color used in the Elemental Design library is defined in this component.
</div>

<div markdown="1" class="description">
This makes it easy to see the whole range of color in use and ensures we don't have 3 different versions of the same blue. Colors are organized into *Palettes* which contain *Foreground*, *Background*, and *Accent* colors. Any combination of foreground and background colors from the same palette are guaranteed to have sufficient contrast to meet WCAG 2.0 AA guidelines. Accent colors have no contrast guarantee and can be used for visual decoration (separator lines, for example) but not text.
</div>

<div markdown="1" class="feature_list">
- Single collection of all colors
- Multiple palettes for dark/light themes etc.
- Guaranteed compliance with Accessibility contrast requirements
</div>

<div markdown="1" class="usage">
Only core components such as Buttons or Typography should depend directly on the colors component. Higher level components should get their colors indirectly from the core set of components. This makes it easy to update the color usage across the library.
</div>


## Light Palette

<div class="color_swatches" markdown="1">
### Foreground Colors

| Pitch          | `#231F20` | ![](http://dummyimage.com/200x40/231F20/231F20) |
| Gray No. 1     | `#565656` | ![](http://dummyimage.com/200x40/565656/565656) |
| Royal Navy     | `#094877` | ![](http://dummyimage.com/200x40/094877/094877) |
| Hyperdrive     | `#0D65A6` | ![](http://dummyimage.com/200x40/0D65A6/0D65A6) |

</div>

<div class="color_swatches" markdown="1">
### Background Colors

| Brightly Lit   | `#E6E6E6` | ![](http://dummyimage.com/200x40/E6E6E6/E6E6E6) |
| Off White      | `#F2F2F2` | ![](http://dummyimage.com/200x40/F2F2F2/F2F2F2) |
| Dirty Ice      | `#F8F8F8` | ![](http://dummyimage.com/200x40/F8F8F8/F8F8F8) |
| White          | `#FFFFFF` | ![](http://dummyimage.com/200x40/FFFFFF/FFFFFF) |
| Highlighter    | `#FDEC2E` | ![](http://dummyimage.com/200x40/FDEC2E/FDEC2E) |

</div>


<div class="color_swatches" markdown="1">
### Accent Colors

| Boring         | `#A6A8AB` | ![](http://dummyimage.com/200x40/A6A8AB/A6A8AB) |
| Sidewalk       | `#B3B3B3` | ![](http://dummyimage.com/200x40/B3B3B3/B3B3B3) |
| Hairline Gray  | `#D0D0D0` | ![](http://dummyimage.com/200x40/D0D0D0/D0D0D0) |

</div>

## Dark Palette

<div class="color_swatches" markdown="1">
### Foreground Colors

| White          | `#FFFFFF` | ![](http://dummyimage.com/200x40/FFFFFF/FFFFFF) |
| Gray Wash      | `#AEAEAE` | ![](http://dummyimage.com/200x40/AEAEAE/AEAEAE) |

</div>

<div class="color_swatches" markdown="1">
### Background Colors

| Black          | `#000000` | ![](http://dummyimage.com/200x40/000000/000000) |
| Gutenberg Black| `#333333` | ![](http://dummyimage.com/200x40/333333/333333) |
| Full Moon      | `#424242` | ![](http://dummyimage.com/200x40/424242/424242) |

</div>

<div class="color_swatches" markdown="1">
### Accent Colors

| Asphalt        | `#3F3F3F` | ![](http://dummyimage.com/200x40/3F3F3F/3F3F3F) |
| Smoke Gray     | `#545454` | ![](http://dummyimage.com/200x40/545454/545454) |

</div>

## Blue Palette

<div class="color_swatches" markdown="1">
### Foreground Colors

| White          | `#FFFFFF` | ![](http://dummyimage.com/200x40/FFFFFF/FFFFFF) |

</div>

<div class="color_swatches" markdown="1">
### Background Colors

| Basic Blue     | `#107ACA` | ![](http://dummyimage.com/200x40/107ACA/107ACA) |
| Sea            | `#0C5D99` | ![](http://dummyimage.com/200x40/0C5D99/0C5D99) |

</div>

<div class="color_swatches" markdown="1">
### Accent Colors

| Deep Sea       | `#0A4D80` | ![](http://dummyimage.com/200x40/0A4D80/0A4D80) |
| Sky Blue       | `#9DC0DB` | ![](http://dummyimage.com/200x40/9DC0DB/9DC0DB) |

</div>
