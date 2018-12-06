# Node.js Express Server + Apollo Boilerplate

### About

* This repo is a work-in-progress to design a scalable and modular Node.js Express Server with Apollo (GraphQL)

### Setup
* Install NodeJS/npm: https://nodejs.org/en/download/
    * Linux: `apt-get install nodejs`
    * MacOS: `brew install nodejs`
    * Windows: direct download, or use Bash on Windows 10

* Install Heroku CLI and create a Heroku account
        
        $ brew install heroku/brew/heroku
    
* Install Postgres locally (Note: you may also have to install it globally)
         
        $ npm install pg --save

    * Additional download for Postgres.app and its GUI: https://postgresapp.com/

* Optional: Install CRA globally (only if you want to create a react app from scratch)
         
        $ npm install -g create-react-app

* Update the eslint version in the client/frontend to match the eslint in the backend
         
        $ cd frontend
        $ rm -rf node_modules
        $ npm uninstall babel-eslint
        $ npm uninstall eslint
        $ npm install
        $ cd frontend/node_modules/react-scripts
        $ rm -rf node_modules
        $ //go into frontend/node_modules/react-scripts/package.json and change the eslint dependency to be 5.9.0 and the babel-eslint dependency to be 10.0.1
        $ npm install //while still in the react-scripts directory
        $ cd ..
        $ npm uninstall babel-eslint@9.0.0
        $ npm uninstall eslint@5.9.0
        $ npm install babel-eslint@10.0.1

* Install concurrently (https://www.npmjs.com/package/concurrently) to test in development

        $ npm install -g concurrently

* Install Sequelize CLI globally if you don't already have it
         
        $ npm install -g sequelize-cli --save

* Create a local Postgres database called "boilerplate_db"
        
        $ psql CREATE DATABASE boilerplate_db;

    * Ideally, you should not set up a username and password for your local database
    * 'postgres://localhost/boilerplate_db' should point to this database
    * Look at knexfile.js in the root directory to understand how the server accesses your local database 

* Run migrations and seed database
        
        $ sequelize db:migrate
        $ sequelize db:seed:all

* If necessary to reset migrations and seeds 

        $ sequelize db:migrate:undo
        $ sequelize db:seed:undo:all

* Install node dependencies
    
        $ npm install 
        
* To run the linter (to be done before any commit)
    
        $ npm run lint 
   

### Query Examples
* Example of queries the User model with arguments

        {
            user(username: "John") {
            username
            password
            userType{
              id
              isCandidate
              isReference
              isEmployer
            }
          }
        }
        
### Mutation Examples
* Example of mutations to add a User model 

        mutation {
          addUser(username: "asdf", password: "asdf123123123123", email: "email901322@gmail.com", isEmployer: true) {
            token
          }
        }

        mutation {
          signIn(email:"email901322@gmail.com",  password: "asdf123123123123"){
            token
          }
        } 

        Mutation with inputs:
        
        mutation {
          addUser(input: { username: "asdfasdf", password: "asasdfasdfasdfasdf", email: "demo@gmail.com", isEmployer: true})
            {
              token
            }
        }

### References
* https://www.robinwieruch.de/minimal-node-js-babel-setup/
* https://www.robinwieruch.de/graphql-apollo-server-tutorial/
* https://www.apollographql.com/docs/apollo-server/v2/essentials/server.html
* https://medium.com/@xoor/coding-a-graphql-api-with-node-js-c02d617f49f4
* https://www.apollographql.com/docs/apollo-server/v2/essentials/schema.html
* Style - https://www.apollographql.com/docs/apollo-server/v2/essentials/schema.html#style
* https://github.com/apollographql/apollo-client
* Learning Apollo Queries - https://graphql.org/learn/queries/
* Mutations - https://www.apollographql.com/docs/react/essentials/mutations.html, https://graphql.org/learn/queries/#mutations
* Mutations Tutorial - https://blog.apollographql.com/react-graphql-tutorial-mutations-764d7ec23c15
* Sequelize Documentation - http://docs.sequelizejs.com/
* Sequelize models vs migrations - https://www.duringthedrive.com/2017/05/06/models-migrations-sequelize-node/
* Create foreign keys - https://stackoverflow.com/questions/50584682/sequelize-model-migration-file-and-foreign-key-which-one-is-right
* Sequelize transactions - http://docs.sequelizejs.com/manual/tutorial/transactions.html
* React + Apollo Webapp - https://developer.okta.com/blog/2018/10/11/build-simple-web-app-with-express-react-graphql
* Add React to existing Apollo server - https://auth0.com/blog/develop-modern-apps-with-react-graphql-apollo-and-add-authentication/
* Import vs require in JS - https://insights.untapt.com/webpack-import-require-and-you-3fd7f5ea93c0
* Install Babel for package control HTML formatting in Sublime - https://stackoverflow.com/questions/39775860/how-to-fix-sublime-text-highlighting-for-react-tutorial
* Using input types in the frontend - https://medium.com/graphql-mastery/json-as-an-argument-for-graphql-mutations-and-queries-3cd06d252a04
* Apollo Boost set context - https://stackoverflow.com/questions/50211088/cant-set-authentication-header-for-apollo-client
* Apollo Boost migrations - https://github.com/apollographql/apollo-client/blob/master/docs/source/advanced/boost-migration.md
* Apollo update on logout - https://www.apollographql.com/docs/react/recipes/authentication.html#login-logout
* Getting updated data from cache - https://stackoverflow.com/questions/50342116/how-to-get-updated-data-from-apollo-cache/50349323#50349323
* invoking query in graphql - https://stackoverflow.com/questions/45992025/invoking-query-of-graphql-of-apollo-client