const express = require('express');
const app = express();

const db = require("./db")
const clienteRouter = require('./routes/clientes'); 



app.set('view engine', 'ejs'); 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

app.use('/', clienteRouter);

app.listen(4000, () => {
    console.log("Server up en http://localhost:4000");
})