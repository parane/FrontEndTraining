# Front End with Web Pack
## prerequisite
>Install node 
>Optional Visual studio code Editor

## Step 1 : Init npm with package.json 
npm is the package manager for Manage our javascript dependencies.<br />
```
npm init 
```

## Step 2 : Configure Webpack
webpack is a module bundler for modern JavaScript applications. <br />
install webpack globally
```
npm install webpack -g
```

## Step 3 : Webpack Checking functionalitities

```
webpack ./src/entry.js ./src/bundle.js
```

check bundle.js create in src folder and open index html file with welcome message. so webpack create combined bundle.js with entry.js.(Packs many modules into a few bundled assets for decrease file size and increase the performance. 

## Step 4 : Webpack configure with webpack.config.js

create file webpack.config.js for webpack related configuration. It has Four Core Concepts: entry, output, loaders, and plugins [ref](https://webpack.js.org/concepts/).<br />
Entry - The entry point tells webpack where to start.<br />
output - Where the output file locate<br />
Lets config step3 task in webpack.config.js<br />
```
module.exports = {
  entry: './src/entry.js',
  output: {
    filename: './src/bundle.js'
  }
}
```

run in a project dir.
```
wepback
```

> wait ? create bundle.js But you could not create within src. what are missing item ? 

## Step 5 : output file location

```
var path = require('path');


module.exports = {
  entry: './src/entry.js',
  output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
  }
}
```

>bundle.js(output file ) copied to dist folder

## Step 6 : Adding webpack dependency to the project !!  

```
npm install --save-dev webpack
```
It will be define webpack into package.json, add webpack module into the node_modules(git ignore)
so if user excute ``` npm install``` downloaded.

## Step 7 : Using webpack with npm

Given it's not particularly fun to run webpack from the CLI this way, we can set up a little shortcut. Adjust package.json like this

```
{
  ...
  "scripts": {
    "build": "webpack"
  },
  ...
}
```

You can now achieve the same(Step 5) as above by using ``` npm run build```