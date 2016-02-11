# HTML Starter

HTML Starter helps front-end developers build websites based on advance technologies. Responsive templates including many frequently used UI elements based on HTML5 input types with ARIA roles, styles in SCSS files and JavaScript DOM-based Routing technique.

* Demo: [http://templates.silversite.pl/html-starter/](http://templates.silversite.pl/html-starter/)

## Requirements

| Prerequisite    | How to check         | How to install
| --------------- | -------------------- | ------------- |
| Ruby            | `ruby -v`            | [ruby-lang.org](https://www.ruby-lang.org/en/downloads/)
| Sass >= 3.4.x   | `sass -v`            | `gem install sass` |
| Node.js 0.12.x  | `node -v`            | [nodejs.org](http://nodejs.org/) |
| Grunt >= 0.4.x  | `npm list --depth=0` | `npm install -g grunt-cli` |
| Bower >= 1.3.12 | `bower -v`           | `npm install -g bower` |

## Features

* [Grunt](http://gruntjs.com/) build script that compiles Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files
* [Bower](http://bower.io/) for front-end package management
* [Bootstrap](http://getbootstrap.com/) the most popular HTML, CSS, and JS framework
* [jQuery](http://jquery.com/) JavaScript library

Additional features:

* [SASS](http://sass-lang.com/) CSS extension
* JavaScript [DOM-based Routing](http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/) by Paul Irish
* Google CDN jQuery snippet from [HTML5 Boilerplate](http://html5boilerplate.com/)
* Google Analytics snippet from [HTML5 Boilerplate](http://html5boilerplate.com/)

## Theme development

HTML Starter uses [Grunt](http://gruntjs.com/) as its build system and [Bower](http://bower.io/) to manage front-end packages.

### Install Grunt and Bower

Building the template requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) globally with `npm install -g grunt-cli bower`
2. Navigate to the template directory, then run `npm install`
3. Run `bower install`

You now have all the necessary dependencies to run the build process.

### Available Grunt commands

* `grunt` — Compile and optimize the files in your assets directory
* `grunt watch` — Compile assets when file changes are made
* `grunt dev` — Compile assets for developing (with source maps, without minify).

## License

Code released under the MIT license.
