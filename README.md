## Purpose

The purpose of this project is to help make building [JS13k](https://js13kgames.com/) projects easier for folks who are familiar with the JavaScript ecosystem but don't want to go through the hassle of setting up a JS13k-specific build environment. The bulk of this project is a [Webpack](https://webpack.js.org/) config that does the following: 

- Transpiles TypeScript (if any)
- Minifies Javascript
- Inlines the Javascript into an `index.html` file (in production)
- Zips the `index.html` file
- Checks that the zip file is under 13k
- Runs `webpack-bundle-analyzer`

## Requirements

The commands assume [Yarn](https://yarnpkg.com/en/docs/install) is installed.

## Commands

### `yarn start`

Starts [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) at `http://0.0.0.0:8080`. You should be able to access the 

### `yarn build`

Builds, minifies, and inlines the game to `./dist/index.html`. This command also runs [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), and places the report in `./dist/report.html`. This report may be handy in figuring out which of your source files is putting you over the edge of 13k.

### `yarn party`

Builds, minifies, inlines, and zips the game to `./zipped/game.zip`. This command finishes with a log message letting you know if the zip file is under 13k.

## Note

This plugin pulls in [this plugin](https://github.com/facebook/create-react-app/blob/edc671eeea6b7d26ac3f1eb2050e50f75cf9ad5d/packages/react-dev-utils/InlineChunkHtmlPlugin.js#L10) from Facebook's [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to inline the JS into the HTML file.
