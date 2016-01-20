This is the source code for a Github pages site that documents Elemental Design. Visit https://pearson-higher-ed.github.io/design to read the documentation.

## Contributing
If you would like to add an article, component definition, or make another change you will need to check out the repository locally, make changes in a new branch, then push back to github and open a pull request to merge into the `gh-pages` branch.

### Component Definition Template
Component definition articles have a few unique customizations which help present metadata and image in a more consumable fashion. These include:

- More details YAML front matter (including sections for version, people, implementations, and downloads)
- Custom content sections (such as taglines, usage guidelines, wide and narrow images, etc.)

Please see the [Component Definition Template](./_component_definition_template.md) for more details. If you have any questions feel free to [open an issue](https://github.com/Pearson-Higher-Ed/design/issues/new).

The following core YAML keys should always be included in the frontmatter:

```YAML
layout: component
section: Components
```

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


### General Articles

Articles about Elemental Design in general (Intro, quickstart, etc.) follow a more standard jekyll format. Simply add them at the repository root level and include the following YAML frontmatter keys:

```YAML
layout: article
title: {{ Article Title }}
section: learn | use | contribute
```
