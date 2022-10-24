const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("User")
})

router.get('/new', (req, res)=> {
    res.send("New Form")
})

router.post('/',(req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.params.id
    res.send(`User Get with ID ${req.params.id}`)
})
module.exports = router