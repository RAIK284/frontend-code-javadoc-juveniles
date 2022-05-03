In this code base you will find the front end implementation of our positivity app, Uplft. There is also the backend integration that is in place in the JavaScript files.

All nav bar components are located in the components folder. The Navbar.css and SidebarData.js holds the color, shaping, and text font. The Navbar.js holds the navigation between pages.

The pages folder holds the style and functionality of all pages of our App. This includes Login, Home, Leaderboard, Messages, and Shop.
The style files are AllPages.css, PageElements.js, Profile.css, and Shop.css. The other JavaScript files hold the funcitionality that include the backend integration with the Firebase database.

We decided to create a folder, LoginPage, to hold the SignIn, SignUp, and Password reset. This was to make it easier to understand the different pages and not get confused on the login and logout files.

In the src, we have App and index which run the program as a whole.



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
