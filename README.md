# webpack Dev server integration
## prerequisite
>This is continue from master branch where we have done some bundling in dist from src folders. Actually we learned entry, output core concept of webpack.  

## Introduction
>here we ll look into webpack-dev-server which should be used for development only.Use this server for live reloading. we just setup this server just for learning remaining two concept( loaders and plugins.) of webpack :) .

## Step 1 : Add Webpack server dependency

```
npm install webpack-dev-server --save-dev
```

>note It will be downloaded to node module and added to package.json<br /> check ``` webpack-dev-server ``` cmd is working. if not , install globally ```npm install -g webpack-dev-server```

## Step 2 : Add Webpack server Configuration in webpack-config.js file

```
devServer: {
  contentBase: path.join(__dirname, "'./dist'"),
  compress: true,
  port: 9000
  }
```

>Using this configuration, webpack-dev-server will serve the static files in your dist folder. It’ll watch your source files, and recompile the bundle whenever they are changed. 

## Step 3 : Run Webpack server 

```
webpack-dev-server
```

what did you get ? ( when you go to http://localhost:9000/ ). some bundle.js file navigator. if that so , we ll scuessfully up the webpack server.

## Step 4 : Webpack plugin 
Before go into add some hello message to server up, we ll look into the plugin concept in webpack. The webpack Plugin system is extremely powerful 
( they can register hooks within webpacks build system and access and modify the compiler, so it can perform actions and custom functionality on "compilations" or "chunks" of your bundled modules )and customizable (for third party, u also can create some plugin for webpack).


###  Step 4.1 Adding HtmlWebpackPlugin (Plugin)

HtmlWebpackPlugin is Simplifies creation of HTML files (index.html) to serve your bundles. [more plugin](https://webpack.js.org/plugins/) 

 you just need to require() it and add it to the plugins array in config.js

```
 const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
 ```

Most plugins are customizable via options. Since you can use a plugin multiple times in a config for different purposes, you need to create an instance of it by calling it with new.

```
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhiteSpace: true
            }
        })
    ]
```

>note This plugin copied index html file in src to dist with collapseWhiteSpace

###  Step 4.2 npm install HtmlWebpackPlugin.

We need to install HtmlWebpackPlugin via npm

```
npm install html-webpack-plugin
```

###  Step 4.3 Lets up the server 

```
webpack-dev-server
``` 

check localhost:9000/ we ll get "It works. It works. " message, yehoo!!!

## Step 5 : Webpack Loaders

webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module. Loaders in webpack transform these files into modules as they are added to your dependency graph. It has 'test' and 'use' params
.
 At a high level, they have two purposes in your webpack config.

    Identify what files should be transformed by a certain loader. (test property)
    Transform that file so that it can be added to your dependency graph (and eventually your bundle). (use property)

###  Step 5.1 baber Integerate with webpack


Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support. so it is converted new version of javascript to browser supported javascript.

###  Step 5.2 install baber with webpack
We need to install babel-loader via npm

```
npm install --save-dev babel-loader babel-core babel-preset-env webpack
``` 

###  Step 5.3 add baber as Webpack Loaders

```
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: '/node_modules/', use: 'babel-loader'}
    ]
  }
  ``` 

>note : test and use are explained in step 5. exclude file scanning to node_modules. those module conatins lot of dependencies js. 

###  Step 5.4 .babelrc

with this param 
```
{ "presets": ["env"] }
```

>we can use tons of preset (like es20XX etc..) . we already install env preset. 'env' includes transforms for all features that have landed in the spec. so it  works like es2015, es2016, es2017 all together. babel-preset-react is the set of transformations needed to convert React/Facebook-related syntax extensions like Flowtype and React's JSX.

###  Step 5.6 add some es6 syntax to entry.js 
```
  let sayHello = () => {
    document.write("es6 sysntac");  
  }
  sayHello();
```

and run webpack server and get the es6 sysntac message 