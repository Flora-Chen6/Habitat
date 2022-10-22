const express = require('express');
const jsforce = require('jsforce');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose')
const PORT = 3001

// connect to mongoDB
// mongoose.connect(process.env.DB_CONNECT ,
// () => console.log('connected to mongoDB!!')
// )

// Import routes
const authRoute = require('./routes/auth');
// routes middlewares
app.use('/api/user', authRoute);


const {SF_LOGIN_URL,SF_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env
const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
})  
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err, userInfo) => {
    if (err){
        console.log(err)
    } else {
        console.log("User ID: "+ userInfo.id)
        console.log("Org ID: " + userInfo.organizationId)
    }
})
// to be passed from front-end
// var email8 = "corliss.brown@atlantahabitat.org.invalid";
var email8 = "corliss.brown@atlantahabitat.org";

records = []

app.get('/', (req,res)=>{
    // conn.query(`SELECT Email, Username, FirstName, LastName FROM User WHERE Email LIKE '${ email8 }'% `, (err, result) => {
    conn.query(`SELECT Email, Username, FirstName, LastName FROM User WHERE Email LIKE '${ email8 }.%' `, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            // console.log("Total Records " + result.totalSize)
            // records = res.json(result.records)
            record8 = res.json(result.records)
        }
    })
    // res.send("salesforce integration testing ")
})

// console.log(typeof records)

app.listen(PORT, ()=> {
    console.log("server running")
})