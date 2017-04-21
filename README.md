# webpack Dev server integration
## prerequisite
>This is continue from master branch where we have done some bundling in dist from src folders. Actually we learned entry, output core concept of webpack.  

## Introduction
>here we ll look into webpack-dev-server which should be used for development only.Use this server for live reloading. we just setup this server just for learning remaining two concept of webpack :) .

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

## Step 2 : Run Webpack server 

```
webpack-dev-server
```

what did you get ? ( when you go to http://localhost:9000/ ). some bundle.js file navigator. if that so , we ll scuessfully up the webpack server.
