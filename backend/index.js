const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require ('cors')

const db = mysql.createConnection({
    connectionLimit: '10',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.post("/insert", (req,res) => {
const firstname = req.body.firstname
const secondname = req.body.secondname

    const sqlInsert = "INSERT INTO my_name (firstname, secondname) VALUES (?,?)";
    db.query(sqlInsert, [firstname, secondname], (err, result) => {
        console.log(err);
    });
});

app.get("/", (req,res)=>{
const id = req.params.id;
 db.query("SELECT * FROM my_name WHERE id = 12", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

app.listen(3001, () =>{
    console.log("Server running in PORT 3001");
})