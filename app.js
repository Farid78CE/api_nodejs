const express = require("express");
const app = express();
const peopleRouter = require("./routes/people.js");

// MiddleWare
app.use(express.urlencoded({extended: false})); // get data via form 
app.use(express.json());                        // get data via javascript
app.use("/api/people", peopleRouter);           // using apis for people model

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
});