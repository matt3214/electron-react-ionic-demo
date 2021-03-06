### Welcome to the Ionic-React-Electron Order Tracking Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project contains the structure necessary for a barebones react app hosted in Electron, along with some logic for storing delivery orders.

Ionic is also included in the packages.json file and can be imported and used with React.

The app demonstrates a possible integration of Ionic, React and Electron.

Start by running `yarn` in the root directory to install all packages.

## Electron's Role:

Electron runs alongside the backend web service after the backend web service (React+Ionic) opens the port 3000 on the localhost.

It simply serves the webpage that is gathered from the backend web service.

I was building in local storage, but it didn't get very far, as, to store files locally, I need to set up remote function calls to keep the Electron app secure from running unsafe code served by the development backend (or whoever is serving at port 3000 on localhost)

The Electron front end does reference the actual html when the project is built and packaged (or at least that is the goal), but during development, the Electron app references localhost:3000 for the page. check out `./public/electron.js` for more details.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Opens [http://localhost:3000](http://localhost:3000) in the electron renderer.

The page will reload if you make edits.<br />
You will also see any lint errors in the console. (developer console)

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
