# Shopping List

1. Save, Update, and Delete items to/from a database of your choosing.
2. Authenticate users - allowing the same user to be signed in from multiple devices.
3. Allow add, edit, delete, “mark as purchased”, and “unmark as purchased” on each item.
4. Keep the list synced in real time from each device.
5. Accompany your code with a full test suite.
6. Deploy your site to a web host (e.g., on Amazon EC2, Heroku, Netlify, Google AppEngine, etc.).





1) Being able to explain well concepts
2) Understanding what the main libraries you've learned do
3) Being comfortable writing small things with the libraries
4) Being able to talk well about the projects you've done
5) Being comfortable with coding JS problems in general

For (1), the main concepts to review would be:
- What is Node
- What is a backend in general
- What are asynchronous functions, callbacks
- Testing/TDD
- MVC (Model View Controller)
- ORM (Object-Relational Mapping)
- Authentication vs Authorization

For (2) the main libraries would be Jasmine, express, Sequelize and EJS. Using fs as you did in the first modules is also important.

For jasmine you can check this tutorial https://jasmine.github.io/tutorials/your_first_suite and do a general review of the matchers https://jasmine.github.io/api/edge/matchers.html


For express, the getting started section in the website is good ( https://expressjs.com/en/starter/hello-world.html ).
Sequelize's documentation is very messy, but review the main query methods (Model.destroy, create, update, findAll, findByPk/Id, etc) and the main concepts (models, associations, migrations).
I think this all is very good review for (3).

For (4) review your projects and practice talking about that. I think the advice in the "Behavioral Interview" checkpoints helps a lot with this (and with practicing how to explain the concepts in (1) as well).

For (5) you can practice some problems on Codewars (levels 7-6 should be fine).


## Set up Courses

1. Create model
2. Create queries
2. Create controller
3. Create routes

{id: 35, name: 'Binary Search Trees', spotsAvailable: 10, totalSpots: 15, 
                instructor: "Lucy Andersen", UTCDateTime: '2019-11-11T15:27:38Z',
                catagories: ['computer science']},

createdb -U postgres -w grocery-list-dev
createdb -U postgres -w grocery-list-test

sequelize model:create --name Session --attributes name:string,description:string,totalSpots:integer
sequelize model:create --name UserSessions --attributes courseId:integer,userId:integer

sequelize db:migrate
sequelize db:migrate --env test

sequelize db:migrate:undo:all && sequelize db:migrate:undo:all --env test
sequelize db:migrate && sequelize db:migrate --env test

## OLD

const apiURL = 'http://localhost:9000/'


function getUser(userId, cb) {
    fetch(`${apiURL}users/${userId}`)
        .then(res => res.json())
        .then(res => cb(res.user))
        .catch(err => err);
}

function sessions(query, cb) {
    console.log("heer")
    fetch(`${apiURL}sessions`)
        .then(res => res.json())
        .then(res => cb(res.sessions))
        .catch(err => err);
}

function test(cb) {
    cb('dog')
}

export { getUser, sessions };

## Add 

----

// courses: [
          //   {id: 35, name: 'Binary Search Trees', spotsAvailable: 10, totalSpots: 15, 
          //       instructor: "Lucy Andersen", UTCDateTime: '2019-11-11T15:27:38Z',
          //       catagories: ['computer science']},
          //   {id: 36, name: 'Nodejs', spotsAvailable: 10, totalSpots: 15,
          //       instructor: "Jon Smith", UTCDateTime: '2019-12-11T15:27:38Z',
          //       catagories: ['react', 'javascript', 'node.js']
          //   },
          //   {id: 37, name: 'CSS', spotsAvailable: 10, totalSpots: 15,
          //       instructor: "Jon Smith", UTCDateTime: '2019-12-11T15:27:38Z',
          //       catagories: ['react', 'javascript', 'node.js']
          //   },
          //   {id: 38, name: 'Coding Interview', spotsAvailable: 10, totalSpots: 15,
          //       instructor: "Jon Smith", UTCDateTime: '2019-12-11T15:27:38Z',
          //       catagories: ['react', 'javascript', 'node.js']
          //   },
          //   {id: 39, name: 'Behavioral Interview', spotsAvailable: 10, totalSpots: 15,
          //       instructor: "Jon Smith", UTCDateTime: '2019-12-11T15:27:38Z',
          //       catagories: ['react', 'javascript', 'node.js']
          //   }
          // ]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## HEROKU
`heroku create katkinso-open-learning`
`git push heroku master`
process.env.megasecret is not set in our production environment. You can set it by running 
`heroku config:set megasecret="but there are plenty of forks"`



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# -------------------------------------------
## KATE
# -------------------------------------------
### To build css 
/client 
`npm run sass`

### To build client
/client 
`npm start`

### To build api server
/api 
`npm start`


### ToDo
- Handle routing for sending errors & message using history
- Handle storing sessions in redis
- Handle '../config.js'; for local dev
- Handle Cookie httpOnly
- Design 404 Page

var Sequelize = require('sequelize');
const Op = Sequelize.Op;