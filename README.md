# HTML Starter

HTML Starter helps front-end developers build websites based on advance technologies. Responsive templates including many frequently used UI elements based on HTML5 input types with ARIA roles, styles in SCSS files and JavaScript DOM-based Routing technique.

* Demo: [http://templates.silversite.pl/html-starter/](http://templates.silversite.pl/html-starter/)

## Requirements

| Prerequisite    | How to check | How to install
| --------------- | ------------ | ------------- |
| Node.js 0.12.x  | `node -v`    | [nodejs.org](http://nodejs.org/) |
| gulp >= 3.8.10  | `gulp -v`    | `npm install -g gulp` |
| Bower >= 1.3.12 | `bower -v`   | `npm install -g bower` |

## Features

* [gulp](http://gulpjs.com/) build script that compiles Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files
* [Bower](http://bower.io/) for front-end package management
* [Bootstrap](http://getbootstrap.com/) the most popular HTML, CSS, and JS framework
* [jQuery](http://jquery.com/) JavaScript library

Additional features:

* [SASS](http://sass-lang.com/) CSS extension
* JavaScript [DOM-based Routing](http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/) by Paul Irish
* Google CDN jQuery snippet from [HTML5 Boilerplate](http://html5boilerplate.com/)
* Google Analytics snippet from [HTML5 Boilerplate](http://html5boilerplate.com/)

## Theme development

HTML Starter uses [gulp](http://gulpjs.com/) as its build system and [Bower](http://bower.io/) to manage front-end packages.

### Install gulp and Bower

Building the template requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [gulp](http://gulpjs.com) and [Bower](http://bower.io/) globally with `npm install -g gulp bower`
2. Navigate to the template directory, then run `npm install`
3. Run `bower install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `gulp` — Compile and optimize the files in your assets directory
* `gulp watch` — Compile assets when file changes are made
* `gulp --production` — Compile assets for production (no source maps).

## License

Code released under the MIT license.
