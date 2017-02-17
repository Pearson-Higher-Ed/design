# Elements Patternlab V 1
http://159.182.11.87/elements-patternlab/

## Pattern Lab & Elements Boilerplate
This setup will get you started with running a basic Pattern Lab integrated with elements.  Perfect for prototyping HTML and SCSS in an atomic environment. To get started, install all the necessary dependencies and load configuration folders and files.
1. Clone or download this repository.
2. ``` $ npm install ```


## Starting up
The below command uses browser-sync, gulp sass, and other build tools to automate your workflow.  After you run it, you will be able to edit the files and the project and browser will reload with the changes.

1. ``` $ gulp ```

## Editing the SCSS / Styling

1. Elements & Global styles are located in the pattern-lab > scss folder
2. Pattern specific SCSS should be placed in the same folder as the pattern and imported from style.scss


## Editing and creating patterns

1. Pattern creation is done in the pattern-lab > source > _patterns folder.  The files in here will compile and be distributed to the public folder.
2. Only work in the source folder, the public folder is cleaned and rebuilt on save.

For more information on patternlab
1. http://patternlab.io
2. http://patternlab.io/docs/index.html

## Bundle Final Files

1. To export and prepare files for bundling navigate to the patternlab url you would like the html for.  Example if you wanted to export a finished page navigate to: http://localhost:3000/?p=your-page
2. Copy the query immediatley following the p=.  In the above example you would copy 'your-page'
3. Open patternlab-config.json
4. Navigate to line 59
5. Remove any existing items in the array you may not want to export.
6. Paste in the copied query into the empty array.  NOTE if you want to export multiple pages repeat steps 1 -4 and ADD the item to the array.  you can export as many pages as you want.
7. The line should like this:   ```"patternExportPatternPartials": ["your-page"],```
8. Save the file
9. in the command line from the root of the project type: ```$ gulp bundle```
10 The files and your project should now be included in the UI folder
11. NOTE: on occassion you will randomly run into console errors, if this is the case, terminate and run again.  These errors will not harm your files, it will just prevent the export.  We are working on a way to eliminate them.

## Copy files to ftp http://159.182.11.87
1. open up the ftp.js file in the _tasks folder
2. on line 10 replace the project folder name, with a name of your choice, that accurately reflects you project.
3. change ```remotePath: '/home/webroot/elements-patternlab'```  to ```remotePath: '/home/webroot/your-project'```
4. Save
5. sign into VPN
5. from the console run $ gulp ftp
6. when the process is complete your pattern lab will be show up at: http://159.182.11.87/your-project/