# Webworkers with Create-React-App


A minimal exapmple using [`workerize-loader`](https://github.com/developit/workerize-loader) to load webworkers with
[Create React App](https://github.com/facebook/create-react-app) **without ejecting the app**.

Apparently the magic key to work with CRA is [adding the following comment](https://github.com/developit/workerize-loader/issues/5#issuecomment-357239203) when loading your worker using the `workerize-loader!` import prefix:

```js
// eslint-disable-line import/no-webpack-loader-syntax
```
