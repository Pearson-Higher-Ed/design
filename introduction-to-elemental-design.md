---
layout: article
title: Introduction to Elemental Design
section: learn
---


In a nutshell, Elemental Design defines a **unified visual voice** for Pearson’s applications and provides a library of components that **makes implementing the voice quick and easy**.


## Goals
**Consistency** and **Efficiency** are the primary objectives of Elemental Design.

Consistency in our product experiences is a prerequisite for meeting the bar set by the consumer software our users already interact with everyday. Regular, predictable design allows us to strengthen Pearson’s brand with a familiar voice and create a desirable platform for learning. A consistent design also implies consistent development effort behind the scenes. An efficient implementation pattern allows sharing and duplication reduction, speeding up the process of designing and developing products.


## Benefits
A consistent and efficient foundation unlocks a variety of benefits which would be difficult or, in some cases, impossible to achieve otherwise.

- Reduced duplication of effort from both design and development
- Deployment of a revised and enhanced brand identity
- Faster time to market for new products, with higher quality implementations
- Leveling up our product experience to become truly desirable

## What
Three puzzle pieces fit together to achieve our goals:

- Universal Style Guidelines that explain globally applicable design principles
- Component Definitions that apply the style guidelines to specific use cases
- Component Implementations that translate the definitions into reusable packages of code

### Universal Style Guidelines
Modern software has been approached with a variety of design philosophies, resulting in an array of personalities. Our first step towards a consistent voice is to create a single design philosophy for Pearson. This will cover high level details such as color theory, animation principles, etc.

### Component Definitions
Components form the heart of Elemental Design and allow for easy consistency and efficient development. A *Component Definition* represents a single member of the component library and includes all the information you need to incorporate it into your design or create a new implementation of it. If you’re looking to include the underlying code in your project check out the corresponding *Component Implementation*.

In general, a definition will document the style and behavior of a component. This covers information such as:

- Purpose of the component, features or modes it may have, usage guidelines, and detailed redlines for implementers.
- An area for discussion where you can raise an issue, propose a change, or ask a question.
- Any dependencies on other components (for example an assignment detail component may depend on the typography component).
- The current version and a changelog explaining any updates.
- Contact information for the team that built and maintains the component.

### Component Implementations
Behind the scenes of a component definition is one or more Component Implementations. These include all the code necessary for a developer to quickly include a component in a project. Currently, all components are implemented with a vanilla JS approach under the Origami specification, but in the future there may be multiple implementations of each component using different technologies (Angular.js, React.js, or Adobe Experience Manager widgets, for example).
