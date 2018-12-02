# Node.js Express Server + Apollo Boilerplate

### About

* This repo is a work-in-progress to design a scalable and modular Node.js Express Server with Apollo (GraphQL)

### Setup
* Install NodeJS/npm: https://nodejs.org/en/download/
    * Linux: `apt-get install nodejs`
    * MacOS: `brew install nodejs`
    * Windows: direct download, or use Bash on Windows 10

* Install Postgres locally (Note: you may also have to install it globally)
         
        $ npm install pg --save

    * Additional download for Postgres.app and its GUI: https://postgresapp.com/

* Install Sequelize CLI globally
         
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
    
        {
  			addUser(username: "test1", password: "test2") {
    			username
    			password
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