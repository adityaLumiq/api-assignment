const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/api')
const express = require('express')
// const { connectToDb, getDb } = require('./db')

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

MONGO_DB_CONNECTION = 'mongodb+srv://aditya:pC2BWmX35JAbVPm@cluster0.o4q5tvx.mongodb.net/api?retryWrites=true&w=majority'
mongoose
  .connect(MONGO_DB_CONNECTION)
  .then(() => app.listen(4000))
  .catch((err) => {
    console.log(err);
  });
mongoose.Promise = global.Promise


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LUMIQ API ASSIGNMENT\'S API DOC',
      version: '0.0.7',
      description: 'This is the api documentation for the api created in the api assignment'
    },
    servers: [
      {
        url: "http://localhost:4000"
      } 
    ]
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options)


const app = express()
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use(bodyParser.json())

app.use('/api', routes)
