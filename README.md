Base front
=========
This is integration project.

Requirements
------------
* npm
* gulp.js

Install
-------
On first install run this command:
```shell
npm install
```
_More details see: [package.json](/package.json)_

Where put my files ?
--------------------
Don't put files in `/dist` folder because files are compiled here. You have to work only on `/src` folder.

Compile
-------
2 mods :
* dev : compile in `/dist`  folder without compress CSS & JS. You can easily read compiled (not minified) version of SCSS and JS files.
* prod : compile in `/dist` folder with all minification and uglification for a production use.
```shell
npm run dev
[OR]
npm run prod
```

Optional
---------
* [LiveReload](http://livereload.com/extensions/) extention

When the project is watching `npm run watch`, the CSS/JS files will now refresh automatically.


.editorconfig files
-------------------
To keep consistency between different editors EditorConfig is used. If you are using [Sublime text editor](https://github.com/sindresorhus/editorconfig-sublime#readme) or [PhpStorm](https://plugins.jetbrains.com/plugin/7294) you need to install plugin, you can download it from EditorConfig official website http://editorconfig.org/


Git
---
Try to use [git-flow branching model](http://nvie.com/posts/a-successful-git-branching-model/)

Font-icon
---------
_cf:_ [src/fonts/ao-icon-*/README.md](src/fonts/ao-icon-agenceo/README.md)
