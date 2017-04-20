# Front End with Web Pack
## prerequisite
>Install node 
>Optional Visual studio code Editor

## Step 1 : Init npm with package.json 
npm is the package manager for Manage our javascript dependencies.
```
npm init 
```

## Step 2 : Configure Webpack
webpack is a module bundler for modern JavaScript applications. 
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

create file webpack.config.js for webpack related configuration. It has Four Core Concepts: entry, output, loaders, and plugins [ref](https://webpack.js.org/concepts/).
Entry - The entry point tells webpack where to start.
output - Where the output file locate
Lets config step3 task in webpack.config.js
```
module.exports = {
  entry: './src/entry.js',
  output: {
    filename: './src/bundle.js'
  }
}
```
> wait ? create bundle.js But you could not create within src. what are missing item ? 