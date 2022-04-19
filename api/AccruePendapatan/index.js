const express = require('express')
const app = express();
const pool = require("./db");

app.use(express.json()) // -> req.body

//ROUTES//

//get all todos

//get todo

//create a todo
app.post("/todos", async(req, res) =>{
    try{
        //await
        console.log(req.body);
    } catch(err){
        console.error(err.message);
    }
})
//update a todo

//delete a todo


app.listen(3000, () => {
    console.log("server is listening o port 3000")
})
