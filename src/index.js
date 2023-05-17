const express = require("express");
const { listaTarefas } = require("./services/firebase");
const handlebars = require("express-handlebars").engine

const app = express()

//Declação de variáveis
const portaRede = 8081; //define a porta de rede que será usada
const pageExtensao = "hbs" // define o nome da extensão dos arquivos

app.use(express.static('public'));

//Mudei a localização da pasta views
app.set("views", "./src/views")

// ( "Define a extensão dos arquivos, define o layout padrão ")
app.engine(pageExtensao, handlebars({defaultLayout: "main"}))
app.set("view engine" , pageExtensao)

app.get("/", function(req, res) {
    listaTarefas.get()
    .then((data) => {
        const arr = []
        data.forEach(item => {
            arr.push(item.data())
        })
        console.log(arr);
        res.render("task", {data : arr} )
    })   
})

app.listen(portaRede, function(){
    console.log("[express] WORKING http://localhost:" + portaRede);
})