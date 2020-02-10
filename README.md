# Webworkers with Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and used webworkers loaded with [workerize-loader]

Apparently the magic key to work with CRA is [adding the following comment](https://github.com/developit/workerize-loader/issues/5#issuecomment-357239203) when you load your wirker using the `workerize-loader!` import prefix:

```js
// eslint-disable-line import/no-webpack-loader-syntax
```
