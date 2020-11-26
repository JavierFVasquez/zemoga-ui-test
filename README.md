# Zemoga Javier Vasquez UI test

UI test project presented to Zemoga with ❤️ by Javier Vasquez, you can see it running [here](https://jfvr-zemoga-test.web.app/).

## 💼 What's included

You'll find a front end app. The root of the project also includes a `package.json` used to add `eslint` and `prettier` for the app.

This app includes the UI and all the client side related stuff, it's build with:

- [React](https://reactjs.org/): To build the html and user interactions.
- [Redux](https://es.redux.js.org/): To handle data and store it.
- [Redux Persist](https://github.com/rt2zz/redux-persist): To persist and rehydrate redux store.
- [Redux Sauce](https://github.com/jkeam/reduxsauce): To improve readability and handling of redux reducers .
- [i18next](https://www.i18next.com/): To handle i18n.
- [react-router-dom](https://www.i18next.com/): To handle routing.
- [styled-components](https://www.styled-components.com/): It's like SCSS with drugs. it combines the awesomeness of css with React.
- [moment.js](https://momentjs.com/): I had to show a remaining time to close, and how long time ago was created the person card.
- [lodash](https://lodash.com/): I use lodash to efficiently find an index in an array.

- [Firebase](https://firebase.google.com/): I use firebase to deploy the app.

## 🚀 Deployment

```
> yarn
> yarn start
```

Then the app will be running at http://localhost:3000

## 🧪 Test

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): I use React Testing Library
  to do integration tests of the app.

```
> yarn test
```

Then the app will be running at http://localhost:3000

## What am I missing? (Limited Time)

- Animations ( Hero (Slides) , Buttons, animations in general)
- More tests
- Blur effect, I would have done it with css blurr, with the overlay image, the same size as the background
- Redux Sagas, to handle "asynchronous" calls to an API
- Calls to an API
- API made in nodeJS, Express/apollo GraphQL
- More order in general

That's it!. 🎉
