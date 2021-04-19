const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Defaults for the array
let items = ["Add Task"];
// Engine for rendering EJS
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));
// Serving up static files
app.use(express.static("public"))


// Home Route
app.get("/", (req, res)=>{

  let today = new Date();

// Option for date format
  let options = {
      weekday: 'long',
      day: "numeric",
      month:"long"
  }

  let day = today.toLocaleDateString("en-US",options)
// Dynamic data
  res.render('list', {
      kindOfDay : day,
      newListItems : items
    })
})

// Handling post requests
app.post("/", (req,res)=>{
   item = req.body.newItem;
    items.push(item)
    res.redirect("/")

})

//Port listening 
app.listen(port,()=>{
    console.log("Server is running at PORt 3000")
} )