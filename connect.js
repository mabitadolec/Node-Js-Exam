const mysql = require('mysql');
const express = require('express');
const app = express();

var mysqlConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "test"
    });
    
mysqlConnection.connect((err) => {
    if(!err)
    console.log('DB connection succeed.');
    else
    console.log('DB connection failed \n Error:' + JSON.stringify(err,undefined,2));
});

app.listen(3001,() => {
    console.log('Express Server is running at port: 3001')
});

app.get("/mother", (req,res) => {
    mysqlConnection.query('SELECT * FROM family where member = "Mother"', (err, rows) => {
        if(err) {
        console.log(err);
        } else {
        res.send(rows);
        }
    })
});

app.get("/father", (req,res) => {
    mysqlConnection.query('SELECT * FROM family where member = "Father"', (err, rows) => {
        if(err) {
        console.log(err);
        } else {
        res.send(rows);
        //console.log(rows);
        }
    
    })
});


app.get("/baby", (req,res) => {
    mysqlConnection.query('SELECT * FROM family where member = "Baby"', (err, rows) => {
        if(err) {
        console.log(err);
        } else {
        res.send(rows);
        //console.log(rows);
        }
    
    })
});