This is the source code for a Github pages site that documents Elemental Design. Visit https://pearson-higher-ed.github.io/design to read the documentation.

## Contributing
If you would like to add an article, component definition, or make another change you will need to check out the repository locally, make changes in a new branch, then push back to github and open a pull request to merge into the `gh-pages` branch.

### Component Definitions

#### Template
Component definition articles are structured YAML documents which help provide the advanced formatting and layout features.

Please see the [Component Definition Template](./_component_definition_template.yml) for more details. If you have any questions feel free to [open an issue](https://github.com/Pearson-Higher-Ed/design/issues/new).

You should be able to get along fine by following the template and looking at existing component definitions for reference, but if you want more detail about YAML you can [read this guide](https://learnxinyminutes.com/docs/yaml/). The main point is that if you want to include a multi-line string you'll need to demarcate with the pipe character (`|`) and tabs like so:

```
key: |
  I can include as many indented lines here as I want.

  This is all going under the `key` identifier.

  - even list
  - and things
```

#### Directory Structure
Each component article will live in it's own subfolder of the `/c` directory. Name this subfolder with the desired URL fragment for the component. Within the component subfolder you will write the definition in an `index.md` file and can include any image, design files, or other resources in an `/assets` folder. The complete structure should look like:

```
root
|_c
  |_component-name
  | |_index.md
  | |_assets
  |   |_redlines.png
  |   |_mockup.psd
  |
  |_other-component
  | |_...
  |
  ...
```

#### Updating Definitions
All old versions of a component definition should be kept around for reference. Before you make any changes to a component, first create a new folder with the current version number inside the component directory (with a 'v' in front, so version 2.3.4 would be a folder named `v2.3.4`). Then copy the `index.md` file and `assets` folder into the version folder you just created. This way all the old docs are available by visiting `/design/c/component-name/v2.3.4`

Example folder structure:

```
component-name
|_v1.1.2
| |_index.md
| |_assets
|   |_redlines.png
|
|_index.md
|_assets
  |_redlines.png
  |_mockup.psd
```

#### Beta releases
If you want to push a component definition up to the website without replacing the current version (to gather feedback from your team, for example) simply publish your `index.md` and `assets` into a `beta` subfolder, like so:

```
component-name
|_beta
| |_index.md
| |_assets
|   |_redlines.png
|
|_index.md
|_assets
  |_redlines.png
  |_mockup.psd
```

Now you can access your work at `/design/c/component-name/beta`.

### General Articles

Articles about Elemental Design in general (Intro, quickstart, etc.) follow a more standard jekyll format. Simply add them at the repository root level and include the following YAML frontmatter keys:

```YAML
layout: article
title: {{ Article Title }}
section: learn | use | contribute
```
