const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine" , "handlebars")
app.use(express.static('public'))

app.get("/", function(req, res) {
    res.render("task", {
        style: './css/style.css',
    })
})


app.listen(8081, function(){
    console.log("[server] WORKING http://localhost:8081");
})