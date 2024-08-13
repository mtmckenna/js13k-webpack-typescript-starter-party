## Purpose

The purpose of this project is to help make building [JS13k](https://js13kgames.com/) projects easier for folks who are familiar with the JavaScript ecosystem but don't want to go through the hassle of setting up a JS13k-specific build environment. The bulk of this project is a [Webpack](https://webpack.js.org/) config that does the following: 

- Transpiles TypeScript (if any)
- Minifies the resulting JavaScript
- Inlines the JavaScript into an `index.html` file (in production)
- Zips the `index.html` file
- Checks that the zip file is under 13k
- Runs `webpack-bundle-analyzer`

## Requirements

The commands assume [Node and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are installed.

## Commands

### `npm install`

Installs dependencies.

### `npm start`

Starts [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) at `http://0.0.0.0:8080`. You should be able to access the server on your mobile device from your home network by going to your computer's IP address (e.g. `http://192.168.0.2:8080`).

### `npm run build`

Builds, minifies, and inlines the game to `./dist/index.html`. This command also runs [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), and places the report in `./dist/report.html`. This report may be handy in figuring out which of your source files is putting you over the edge of 13k.

### `npm run party`

Builds, minifies, inlines, and zips the game to `./zipped/game.zip`. This command finishes with a log message letting you know if the zip file is under 13k.

## Notes

- Put your TS or JS in `src/index.ts`
- Put your css in `src/index.html`
- Put your images or other assets in `assets/`
- This starter uses [Roadroller](https://github.com/lifthrasiir/roadroller) to pack the js 
