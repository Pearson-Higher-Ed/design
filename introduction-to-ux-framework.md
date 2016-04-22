---
layout: article
title: Introduction to the UX Framework
section: learn
---


In a nutshell, the UX Framework defines a **unified visual voice** for Pearson’s applications and provides a library of components that **makes implementing the voice quick and easy**.


## Goals
**Consistency** and **Efficiency** are the primary objectives of the Framework.

Consistency in our product experiences is a prerequisite for meeting the bar set by the consumer software our users already interact with everyday. Regular, predictable design allows us to strengthen Pearson’s brand with a familiar voice and create a desirable platform for learning. A consistent design also implies consistent development effort behind the scenes. An efficient implementation pattern allows sharing and duplication reduction, speeding up the process of designing and developing products.


## Benefits
A consistent and efficient foundation unlocks a variety of benefits which would be difficult or, in some cases, impossible to achieve otherwise.

- Reduced duplication of effort from both design and development
- Deployment of a revised and enhanced brand identity
- Faster time to market for new products, with higher quality implementations
- Leveling up our product experience to become truly desirable

## What
The UX Framework is composed of two main pieces which together address the design and development of reusable components.

### Elemental Design
Elemental Design represents a single, unified design language for Pearson's next generation products. It currently contains a library of standardized components for everything from typography to a universal header and will be expanded with an overall styleguide in support of the rebranding effort.

Each component in the library has a *Design Definition* that includes all the information you need to incorporate it into your design or create a new implementation of it. In general, a definition will document the style and behavior of a component. This covers information such as:

- Purpose of the component, features or modes it may have, usage guidelines, and detailed redlines for implementers.
- An area for discussion where you can raise an issue, propose a change, or ask a question.
- Any dependencies on other components (for example an assignment detail component may depend on the typography component).
- The current version and a changelog explaining any updates.
- Contact information for the team that built and maintains the component.

### Origami
Each design definition in the library has a corresponding implementation that makes it easy for developers to use components in production applications. These implementations follow the Origami system and leverage Facebook's React library where javascript interactivity is required.
