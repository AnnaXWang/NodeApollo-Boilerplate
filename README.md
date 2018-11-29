# Node.js Express Server + Apollo Boilerplate

### About

* This repo is a work-in-progress to design a scalable and modular Node.js Express Server with Apollo (GraphQL)

### Setup
* Install NodeJS/npm: https://nodejs.org/en/download/
    * Linux: `apt-get install nodejs`
    * MacOS: `brew install nodejs`
    * Windows: direct download, or use Bash on Windows 10
* Install Knex (Note: you may also have to install it globally)
        
        $ npm install knex --save

* Install Objection.js (Note: you may also have to install it globally)
        
        $ npm install objection --save
      
* Install Postgres locally 
    * For Postgres.app and its GUI: https://postgresapp.com/
    * OR (Note: I chose to download Postgres.app instead of using the command line)
         
        $ npm install pg --save

* Create a local Postgres database called "boilerplate_db"
    * Ideally, you should not set up a username and password for your local database
    * 'postgres://localhost/boilerplate_db' should point to this database
    * Look at knexfile.js in the root directory to understand how the server accesses your local database       

        $ psql CREATE DATABASE boilerplate_db;

* Install node dependencies
    
        $ npm install 
        
* To run the linter (to be done before any commit)
    
        $ npm run lint 
   

### Query Examples
* Example of queries the User model with arguments
    
        {
  			user(userTypeId: 2) {
    			username
    			password
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
* Objection.js + Knex + Postgres - https://dev.to/aspittel/objection--knex--painless-postgresql-in-your-node-app--6n6
* Knex + Bookshelf - https://travishorn.com/what-did-i-learn-this-week-knex-js-bookshelf-js-95d3490e3a6f
* Postgres on Mac - https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb
* Objection.js - https://vincit.github.io/objection.js/#introduction