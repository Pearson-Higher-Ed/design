---
layout: article
title: Compound Creation Guide
section: contribute
---

**Contribution**:

-   **Technical Governance**

    -   **Generic**

        -   **A11y**

            -   Rendered HTML must be valid (pass validation, we'll link
                 to validators).

            -   Keyboard and touch can operate as much as mouse can.

            -   Keyboard operation of complex widgets follow Aria
                 Authoring Guideline. (add link).

            -   Component should work if the browser is
                 zoomed/text-enlarged up to 200%.

            -   The component should pass accessibility test.

        -   **Responsive**

            -   Responsive Web Design allows web pages to correctly
                 format on any screen size. The application must
                 balance the rich functionality associated with desktop
                 usage with the ability to function on less powerful
                 mobile devices.

            -   **Principles for Responsive Web Design**

                -   A flexible, grid-based layout: This allows the
                     layout to reflow to the screen size of any device.
                     Uses relative sizing of grids. Allows grid layout
                     to adjust to viewport size.

                -   Flexible images and media: This allows the images
                     and videos to reflow with the layout.

	        -   **Browser and Device support**

	            -   The components should adhere to pearson standard browser
                 policy and device support. The outline of current
                 Pearson supported browsers are depicted in the chart
                 below.
             -    For more details on the browser compatibility and device support
				     please visit the following link: [*Pearson browser and device
				     compatibility*](https://sites.google.com/a/pearson.com/compatibility/home)

![]({{site.baseurl}}/../img/image2.png)




-   **Internationalization (i18N)**

    -   **Internationalization** (I18n) : Internationalization is the
         process of designing a software application or product so that
         it can be adapted to various languages and regions without
         engineering changes.

        -   Externalization of strings

        -   Extended Character set

        -   Javascripts errors with international styles

        -   Testing of long string when localized.

    -   **Localization** (L10n): Localization is the process of adapting a
         product or application to a specific international language or
         culture so it seems natural to that particular region. It can
         entail customization related to:

        -   Numeric, date and time formats

        -   Use of currency

        -   Keyboard usage

        -   Collation and sorting

        -   Symbols, icons and colors

-   **Testing tools**

    -   Unit / Functional testing

        -   Karma - Test Runner

        -   Mocha - Testing framework

        -   Chai - Assertion Library

-   **Performance requirements**

    -   Caching: Fetching resources over the network is both slow and
         expensive: the download may require multiple round trips
         between the client and server, which delays processing and may
         block rendering of page content, and also incurs data costs
         for the visitor. All components should specify a caching
         policy to help the client determine if and when it can reuse a
         previously fetched response

    -   Avoid Render-Blocking Javascript: Before the browser can render
         a page it has to build the DOM tree by parsing the
         HTML markup. During this process, whenever the parser
         encounters a script it has to stop and execute it before it
         can continue parsing the HTML. In the case of an external
         script the parser is also forced to wait for the resource to
         download, which may incur one or more network roundtrips and
         delay the time to first render of the page.

-   **Data fetching policy**

    -   Components should not call a backend service directly to
         get data. The architecture is designed for the components to
         be loosely coupled from the service to provide highly reusable
         front end components. The components would need data in a
         certain expected format. It is the responsibility of the
         client application to call the service, get data and provide
         it to the component in the format expected.

-   **Readme**

    -   All teams are expected to add a readme file with
         their component. It is expected for the team to add an
         introduction and brief overview of the component. The
         following items are useful to be added in the readme file:

        -   Introduction

        -   Installation

        -   Versions

        -   User Guide

        -   Implementation

        -   Testing

        -   Related Resources

-   **Scaffolding Template**

    -   All teams are expected to use the scaffolding template to create
         their component. The scaffolding template will help the teams
         with sample npm scripts, live reload, CI Integration etc. See
         below for more details.

-   **Reusing available elements and compounds**

    -   All teams are expected to re-use available elements and
         compounds in the npm registry. When developing a new component
         it is required to check the npm registry to ensure if a
         similar component already exists. If one exists it is
         necessary to reach out to the team and discuss potential
         updates to the original component before trying to create
         your own.

    -   When creating a new component it is recommended to use existing
         sub components and element required to create a new component.
         The key idea behind this is to reuse components
         wherever applicable.



-   **CompoundSDK and other standalone Origami components**

    -   **ReactJS & ES6**

        -   The react components developed for the compound SDK will be
             developed using ES6. The most common difference when
             creating a react component using ES6 is to use the class
             definition syntax as opposed to using React.createClass
             method to define a component. We can use an ES6 class that
             extends React.Component like:

						 // The ES5 way
						 var Origami = React.createClass({
						
						 function1: function(e) { … },
							 render: function() { … },
						 });
						
						 // The ES6 way\
						 class Origami extends React.Component {
							 function1(e) { … }
							 render() { … }
						 }

-   **Setting up development environment**


    -   Install nodejs version 5.0. To see instructions on how to
         install node js and npm please click the following link.
         [*Installing nodejs and
         npm*](https://docs.npmjs.com/getting-started/installing-node).



    -   The following template can be used for creating an Origami
         React component. As described above the component will be
         written in ReactJS using ES6 style. The main module for the
         component is called main.js and a sample package.json file is
         provided with scripts to be used for developing, building and
         publishing the component. Details on the development, building
         and publishing the component are outlined in the
         sections below. [*Sample ReactJS component
         template*](https://github.com/Pearson-Higher-Ed/compounds/tree/v0/src/sample).
         Install the sample react component as a starting point by
         running the following command: npm install
         pearson-react-sample in the directory where you want to
         develop your component.


-   **Developing the component and auto reload**

    -   As part of the npm script provided by the sample template there
         is a ‘dev’ script which the developer can run to auto reload
         the component in the browser after making a change to the
         code file. On save of the file the browser will automatically
         refresh the component. This makes development and
         testing faster. The ‘dev’ script in the package.json file can
         be customized to add additional steps for building, linting
         and testing if desired. To set up auto reload in your project
         just run the following command: **‘npm run dev’**.

-   Unit Testing

    -   All components need to have test scripts. Tests should be part
         of the build process. It is highly recommended to run all test
         scripts with 100% code coverage as part of your build process.
         Unit test should be written with Chai and Mocha. Minimum 80%.
         npm run test

	-	 Karma can be used to run the tests. Karma is a test runner. Karma uses
		 your test framework to run tests in various environments of your
		 choice.

-   **Webpack**
	 
![](../img/image2.png?raw=true)
![]({{site.baseurl}}/../img/image1.png)
	
	-   Webpack is a "module bundler", which allows users to take a given
	     set of modular JavaScript files, and compile them down into a
	     single (or multiple) file(s). Not only that, but it also allows us
	     to bundle in other file formats such as CSS and HTML via the use
	     of [module loaders](https://webpack.github.io/docs/loaders.html).
	     This effectively allows us to represent the whole application as a
	     single, pre-built, minified file, assets and all.

	-   Webpack can be run using a command line with parameters to the entry
	     file (main.js) and the output file (bundle.js).
	
	-   It is recommend to create a webpack.config.js file to store all
	     config settings for webpack including the entry and the
	     bundle file.



-   **Npm Registry**

    -   Components will be published to npm instead of the proprietary
         registry used earlier by Origami. With Continuous Integration
         and npm script the component will be tested, build and pushed
         to npm automatically using a script.

-   **Continuous Integration**

    -   As part of the sample component a travis.yml is provided. The
         purpose of this file is to trigger a build whenever the master
         branch in github is tagged. This will trigger the test script,
         run the build and release the component to npm. The publishing
         to npm will use a admin id which is part of the Pearson
         Organization in npm with the scope @pearson-components.

-   **Npm Scoped Packages (default private)**

    -   The component will be automatically published under the Pearson
         scope @pearson-components in npm. The access to the component
         will be public by default. The publisher can change the access
         to private if desired.

    -   Public components can be accessed by anyone in npm. Private
         components can only be installed by members of the Pearson
         Organization in npm.

-   **Steps to integrate github with travis**

    -   First go to [https://travis-ci.org]() and sign in with your
         GitHub account.

    -   In the upper right corner click on your name (or
         choose Accounts) to open your Travis-ci profile.

    -   You'll be presented with the list of your GitHub projects (only
         the ones where you have administrative authority)

    -   Toggle the switch on one of your projects and then click on
         little wrench icon to open the project's Service Hooks page
         on GitHub.

    -   On the Service Hooks page scroll down to Travis and you'll
         notice that the hook is already activated.

    -   Open the root of your GitHub project and create a new file
         named .travis.yml.

    -   That's the file that will contain your Travis configuration for
         the repo. YML extension stands for [YAML] (http://en.wikipedia.org/wiki/YAML) (YAML Ain't Markup
         Language), which is basically a specification for data
         exchange format, similar to JSON.

    -   According to the programming language of your project, fill in
         the Travis settings in your newly created .travis.yml file.
         Use the following [Travis sample
         file](http://about.travis-ci.org/docs/user/getting-started/)
         to get started on a default YAML file.

-   **Governance/Validation:**

    -   Component development requires a high standard of developers who
         make components for use by others, but many of these same
         rules are just good practices for anyone that builds websites
         using the web technologies of HTML, CSS and JavaScript. If you
         are building a reusable component , please use the following
         checklist for up to date guidance on the best practices you
         should be following in your web development.

    -   In addition to the rules below, the [*Google Web Fundamentals
         documentation*](https://developers.google.com/web/fundamentals)
         is a good resource for developing best practices.

    -   **Design:** Although you may spend most of your time on your own
         product, remember that our readers move from one Pearson
         product to another all the time, and we need to make their
         life as easy as possible by offering a **consistent brand
         experience**. Consider the following points when you are
         making your product:

        -   Are there elements of your site for which there is a
             standard Pearson design expressed? Search the Pearson
             components registry to find out. If so, you should be
             matching that style exactly, ideally by using
             the component. This includes things like
             [*fonts*](http://registry.origami.ft.com/components/o-fonts),
             [*typography*](http://registry.origami.ft.com/components/o-typography),
             colors etc.

        -   Are you using standard brand assets like the Pearson logo,
             icons, or font files? You must use the correct versions of
             these, available from the repos in Github.

    -   **Images:** There are a number of best practices to observe on
         the use of images:

    -   Make sure you use an appropriate format (typically JPEG for
         photographs, PNG for illustrations, SVG for icons - see below)

    -   Support screens with a high pixel density by creating images at
         a pixel density of 2, and trade off higher compression to
         achieve the same file size. For example, if you want to
         display a 400x400 image, consider creating an 800x800 image
         and turning up the compression until the file size
         is acceptable. Studies suggest the sharper but more compressed
         image works equally well on high and low density screens.

    -   Use an optimisation tool such as
         [*ImageOptim*](https://imageoptim.com/) to remove unnecessary
         metadata and colour profiles.

    -   Scale image containers with viewport size so that images do not
         cause pages to scroll horizontally on small screens.
	-   **Performance:**            Use Google’s [*PageSpeed
             Insights*](http://developers.google.com/speed/pagespeed/insights)
             service to analyse your page and try to score at least 80
             on both the mobile and desktop categories. This will cover
             off a wide variety of performance related best practices,
             including minification and concatenation of assets, image
             sizing and avoiding subresource requests that
             block rendering.

    -   **Security**

        -   **Don’t collect data on insecure pages:**

		 When prompting the user for personal data such as email address,
		 username, password or payment information, always serve the page with
		 the form on it using HTTPS, and send the form submission to an HTTPS
		 URL.
		
		 It’s often considered OK to serve forms on insecure pages as long as
		 the form posts to a secure destination. This is not acceptable,
		 because an attacker can modify the page that serves the form, to
		 simply change the form post destination.

-   **HTML**

    -   **Use UTF-8**

 Character encoding can cause problems, especially on sites that are
 predominantly in English with a few foreign characters here and there,
 where issues with character encoding can easily go unnoticed.

 Ensure that your pages are **UTF-8** encoded, using both an HTTP
 response header **and** an HTML meta tag: &lt;meta charset="UTF-8"
 /&gt;. Place this as the first tag within the &lt;head&gt; section of
 the page, before &lt;title&gt;, since it’s important that the browser
 knows the right character set to use before it gets to any content.

	-   **Use correct viewport sizing**
	
	 By default, most mobile devices assume your site won’t fit on a small
	 screen so will pretend to be 900px wide and zoom out so that that fits
	 on the screen. Add the following viewport meta tag to the &lt;head&gt;
	 of your page to make sure that the viewport is zoomed to 100% and the
	 width is the same as the width of the device in both portrait and
	 landscape orientation.

-   **JavaScript**

    -   **Lint your code** Consider running
         [*ESLint*](http://www.eslint.org/) over your JavaScript. The
         syntax standards used by sample react component are a good set
         of rules to use.





