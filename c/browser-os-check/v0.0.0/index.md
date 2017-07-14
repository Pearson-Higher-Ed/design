---
layout: component-yaml
title: OS/Browser Check
section: Components
sdk: stand_alone
redirect_from: /docs/ui-components/os-browser-check/
version: 0.0.0
status: active
implemented: true
people:
  - role: Product Owner
    name: Joe Liner
    email: joe.liner@pearson.com
  - role: Lead Designer
    name: Frank Coleman
    email: frank.coleman@pearson.com
  - role: Lead Developer
    name: Madhu Kumara Matakere
    email: madhukumara.matakeresiddegowda@pearson.com
implementation: https://bitbucket.pearson.com/projects/PEGS/repos/checkermodule/browse

tagline: |
  Provide warning to users if their OS and browser combination isn't supported by an application.
description: |
  This component makes it easy to sniff out which browser and OS a user is using and provide a visual indicator if their OS and browser combination isn't supported.  
  This visual indicator appears as a modal-like alert with configurable messages.
features:
  - Easy implementation with minimal involvement from the development team.
  - Customizable messages including tokens to allow detected OS and Browser names to be inserted into messages easily.
  - Can be activated on page load or through function invocation.
usage_guidelines: |
  Only core components such as Buttons or Typography should depend directly on the colors component. Higher level components should get their colors indirectly from the core set of components. This makes it easy to update the color usage across the library.

changelog:
  - version: 0.0.0
    changes: Initial version
---
