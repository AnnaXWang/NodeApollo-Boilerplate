# Node.js Express Server + Apollo Boilerplate

### About

* This repo is a work-in-progress to design a scalable and modular Node.js Express Server with Apollo (GraphQL)

### Setup
* Install NodeJS/npm: https://nodejs.org/en/download/
    * Linux: `apt-get install nodejs`
    * MacOS: `brew install nodejs`
    * Windows: direct download, or use Bash on Windows 10
* Install node dependencies
    
        $ npm install 
        
* To run the linter (to be done before any commit)
    
        $ npm run lint 
   

### Query Examples
* Install node dependencies
    
        {
  			user(userTypeId: 2) {
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