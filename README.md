## Purpose

This project serves as a POC for a campsite reservation search. This project is a command line util currently that accepts a json file and returns campsites that are bookable given a search range.

I wrote this in a structure that should hopefully be easy to convert into an API in the future. `main.js` would become some sort of server bootstrapping as well as the described directory structure below

## Setup

`npm install` to install dependencies
`npm start pathToFile.json` to run the script with a custom file
`npm run start:dev` will run the script with the provided test file

To run tests - `npm test` or `npm run test:watch`

## Directory Structure

- controllers
  This folder would be used to parse a request and return a response accordingly. Currently there is only a `bookings` controller that returns static data, but in the future could be extended to parse search query params and do a database search

- dao
  This folder in the future would act as a way to query databases and return a result. Currently it just takes in a key to look up from the json object

- db
  This folder in the future would handle setting up a database connection. Currently it is only reading the json file and storing it into a variable for access by other methods

## Other Considerations

If I had written this as a web application, I would have put more thought and effort into error handling. Since this is currently just a script, erroring and returning a non 0 exit code seems okay. In a web application I would have more errors (500) for not being able to connect to the database, (400) for making a bad request to the endpoint, etc
