---
title: Writing Component Documentation
section: contribute
layout: article
---

Component design documentation is currently generated and hosted through Github Pages. In order to write documentation for a new component or update existing documentation you'll need to install some command line utilities and become familiar with the basics of contributing to a git repository. Here are a couple of screencasts that will get you up and running even without previous experience.

* TOC
{:toc}

## Getting Started
This video will walk you through the process of installing all the software necessary to create your own component documentation page. Note that you will need sudo access to complete these steps. You can test for sudo access by opening the terminal application and running this command:

```
sudo -v
```

If you get an error message saying that you are not in the sudoers file then you will need to contact your IT group to gain access.

<div class="video-wrapper">
  <iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/ForWm1b6PZk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

### For reference:

- Download [Github Desktop](https://desktop.github.com)
- Clone the [design site repository](www.github.com/Pearson-Higher-Ed/design)
- Make sure you have at least Ruby v2.0.0 by running `ruby --version` at the terminal
- Install bundler by running `gem install bundler`. You will probably need sudo access for this. You may also need to install the command line tools by running `xcode-select --install`.
- Install all the software needed to generate the site by running `gem install` from within the repository you downloaded.
- Review the [Markdown syntax guide](https://guides.github.com/features/mastering-markdown/)
- Download the [Atom text editor](https://atom.io)
- Start Jekyll running by following these steps:
  1. Right click the 'design' repository in the sidebar of Github Desktop and choose 'Open in Terminal'
  2. Run this command: `bundle exec jekyll serve --safe`

## Creating Your First Component
Once you've installed the Github pages software you can start your own component documentation page. This video walks through that process:

<div class="video-wrapper">
  <iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/Sd-RfTITcB4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>
