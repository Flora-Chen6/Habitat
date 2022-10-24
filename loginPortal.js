const express = require('express')
const app = express()
console.log('1111')
//get, post, delete, put... http methods
app.set("view engine", "ejs")

var sf = require('jsforce')

var conn = new sf.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
   loginUrl : 'https://atlhabitat--emory.sandbox.my.salesforce.com/'
});


var records = [];


var username = 'anna.liu@emory.edu'
var password = 'TeamHabitat666EsokC0hRYy0VbT4jszf5ZC3v'
conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...

    /*
  conn.query("SELECT Id, Name, Suffix FROM User", function(err, result) {
    if (err) { return console.error(err); }
    console.log("total : " + result.totalSize);
    console.log("fetched : " + result.records.length);
    records = result.records
    records = result.records

  });
  */
  conn.query("SELECT Email, Username, FirstName, LastName FROM User WHERE Email = 'corliss.brown@atlantahabitat.org.invalid'", function(err, result) {
    if (err) { return console.error(err); }
    console.log("total : " + result.totalSize);
    console.log("fetched : " + result.records.length);
    records = result.records
    console.log(records[0].Email)

  });


  });


  console.log('1111')


app.get('/', (req, res) => {
    //console.log('Here')
    //console.log('1')
    //console.log(records.records)
    //let recor = []
    //for (let i = 0; i < records.length; i++){
      //recor[i] = records[i].Name
     // console.log(1)
    //}
    console.log("Hahaha")
    /*
    var recor = []
    console.log(records.length)
    for(let i = 0; i < records.length;i++){
      recor[i] = records[i].Name
    }
    */
    res.render('hello', { Username:records[0].Username, LastName: records[0].LastName, FirstName: records[0].FirstName, Email: records[0].Email  });

    
    //res.json({message: "Hi", name: "Person"})
    //res.render("hello", {text: "jack", sentence1: "Yes, he is jack"})
})

console.log('1111')

const userRouter = require('./routes/users')

app.use('/users', userRouter)
app.listen(3000)
