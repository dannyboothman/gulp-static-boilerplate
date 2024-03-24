# Gulp Site Boilerplate

Repo to get started quickly with a nice boilerplate with gulp actions

- SCSS
- Minification
- Includes
- File versioning
- Direct webroot

## Setup Frontend Environment

- Node Version: `v18.9.0`
- NPM Version `8.19.1`
- Gulp:
  - CLI Version `2.3.0`
  - Local Version `4.0.2`

1. Make sure you have the above versions.
2. Run `npm i`
3. Run `gulp`

## Editing

Edit files within the `build` folder.

> Gulp watch will monitor any files within the _build_ folder for changes; it will then automatically compile the front end to the _dist_ folder

> Images, robots files are located in the _dist_ folder

> Include files by using `@@include('includes/FILENAME.html')`

> Pass variables to include files by using `@@include('includes/FILENAME.html', {'name': 'Dan B'})` and then use this within the include file by using `@@name`

> Auto-timestamp files such as CSS by appending {{TIMESTAMP}} to the end of files `xyz.css{{TIMESTAMP}}`

> Link to the local/ prod root by using `@@webRoot/folder/../file.css` _helpful when your root path isn't the main root folder (in this case the root is '/dist')_
# gulp-static-boilerplate
