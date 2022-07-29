# HybridAssignment
## Ecommerce store backend
This Project is developed using NodeJS . Access the POSTMAN API docs from [here](https://documenter.getpostman.com/view/10703966/UzXUQEf2)
## Requirements
This project uses MongoDb as primary database.
You can install and run locally from [here](https://www.mongodb.com/docs/manual/installation/) or use an remote mongo altas server
### Environment Variables
* MONGO_URI
* PORT
* JWT_SECRET
Environment variables are loaded from the .env file. Default values are present already. 
If mongodb is not connecting, please cross check the mongo uri beeing set.
## How to run 
```sh
npm i
npm start
```
if everything is good you will see this
```sh
app is running at port 8000
mongodb connection successfull
```
## Features

- Validations are set on API payload
- Proper error  handling

