# Star Wars Heroes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the [Typescript template](https://create-react-app.dev/docs/adding-typescript/), and configured with [eslint](https://eslint.org/), [`jsx-a11y` plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) for accessibility rules check, [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) to test accessibility issues in development time, and [prettier](https://prettier.io/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn prettier`

Runs [prettier](https://prettier.io/) command across the entire application, using by default the configurations described in file `.prettierrc` & `.prettierignore`.

&nbsp;

##### Notes

- The use of `redux` in this project was a deliberate choice to showcase a different approach to the implementation. An easier and more applicable solution, given the size of the project, would have been setting a state in `HomeComponent` to hold the results of the request, prop drilling a callback to set said state into `SearchForm` and then into `useSearchHero` and then calling it in the `useEffect` of the latter.
- The commit log for this project does not represent a historical evolution of the application (my bad), but rather groups together features/parts of its implementation.
