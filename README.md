In this code base you will find the front end implementation of our positivity app, Uplft. There is also the backend integration that is in place in the JavaScript files.

All nav bar components are located in the components folder. The Navbar.css and SidebarData.js holds the color, shaping, and text font. The Navbar.js holds the navigation between pages.

The pages folder holds the style and functionality of all pages of our App. This includes Login, Home, Leaderboard, Messages, and Shop.
The style files are AllPages.css, PageElements.js, Profile.css, and Shop.css. The other JavaScript files hold the funcitionality that include the backend integration with the Firebase database.

We decided to create a folder, LoginPage, to hold the SignIn, SignUp, and Password reset. This was to make it easier to understand the different pages and not get confused on the login and logout files.

In the src, we have App and index which run the program as a whole.



### To Deploy:

Step 1:

Clone Repo using ```git clone```

Step 2:

Install Dependencies using ```npm install```

Step 3:

Start website or run unit tests:

```npm start``` or ```npm test```

Step 4:

Localhost blocks CORS which doesn't allow our application to access our REST API backend, so you will have to download and enable a google chrome extension to get the website to show real data. 

Link: https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
