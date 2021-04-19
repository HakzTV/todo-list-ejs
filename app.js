const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname +"/date.js")

const app = express();
const port = process.env.PORT || 3000;


// Defaults for the array
const items = ["Add Task"];
const workItems = [];
// Engine for rendering EJS
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));
// Serving up static files
app.use(express.static("public"))


// Home Route
app.get("/", (req, res)=>{
 let day = date.getDate();

// Dynamic data
  res.render('list', {
    listTitle: day,
      newListItems : items
    })
})

// Work route
app.get("/work", (req, res)=>{
  res.render("list", {
    listTitle : "Work list",
    newListItems: workItems
  })
})

// About route
app.get("/about", (req, res)=>{
  res.render("about");
})

// Handling post requests
app.post("/", (req,res)=>{

  let item = req.body.newItem;
  // Logic to handle post requests when sent from the home or work route
  if(req.body.button === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item)
    res.redirect("/")
  }

})
// handling post request for the work route
app.post("/work", (req, res)=>{
  let item = req.body.newItem
  workItems.push(item);
  res.redirect("/work")
})
//Port listening 
app.listen(port,()=>{
    console.log("Server is running at PORt 3000")
} )