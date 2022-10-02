const express = require('express')
const app = express()

//get, post, delete, put... http methods

app.get('/', (req, res) => {
    console.log('Here')
    res.download("loginPortal.js")
    res.json({message: "Hi", name: "Person"})
})


app.listen(3000)
