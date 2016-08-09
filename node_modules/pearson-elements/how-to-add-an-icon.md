# How to add a new icon

1. Create a new feature branch or fork just for this icon so we can test it before merging into master.

2. Go to the IcoMoon app (https://icomoon.io/app).

    You can import the current  `selection.json` back to the IcoMoon app using the *Import Icons* input (or via Main Menu → Manage Projects) to retrieve your icon selection. It'll be called "icomoon" even though we're using Font-Awesome. If only IcoMoon icons are shown on the page, scroll down to the link "Add Icons from Library" and choose Font-Awesome ("Add" button).

    * To select from Font-Awesome, make sure the "select" button at the top of the page is selected (it looks like a mouse arrow in a box, has an invisible name of "select") 
    * click on icons you'd like to add. Selected icons get an orange border and white background. 
    * go back to your "icomoon" group and *de-select* the whole set, so your new icons are the only selected icons on the whole page. 
    * Click the stripey bar (button with the invisible name of "Menu") to show a submenu, and choose "Copy selection to set." 
    * Now re-select  *all* the icons in your "icomoon" group (the new ones and the original ones). 
    * The sticky menu at the bottom of the screen has a link "Generate Font" which will give you both new font files and a new `selection.json` in a .zip file.

3. Move the zip file to this directory (/misc/icomoon/).

4. Run `icomover.sh` script with the zip file as the argument.

    If you can't run the shell script, it:
    * unpacks the zip file
    * takes the new `selection.json` and moves it to replace the current one in `/misc/icomoon/`.
    * renames the `icomoon.*` fonts to `pearson-fa.*` and moves those to replace the current fonts in `/assets/fonts/`.

5. Update the `/docs/elements/icons.md` page with the new icon, and update `/scss/_icons.scss` with the new style.

    If you run `git status` you should see the following files (if not, it means you missed one):

    * `/misc/selection.json` * `/assets/fonts/pearson-fa.(svg,woff,eot,ttf versions)`
    * `/docs/elements/icons.md`
    * `/scss/_icons.scss`

  Remove the icomoon.zip if everything was successful.

6. When you PR the new icon, state in your PR message the Unicode code point for your icon (this can be found on the Font-Awesome website. Example: the bell icon is `\f0f3`.
