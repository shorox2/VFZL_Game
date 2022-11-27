const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "example",
    password: "01052005Sf"
})

conn.connect( err => {
    if (err ) {
        console.log(err)
        return err
    } else {
        console.log("DataBase ------ OK!")
    }
})

let query = "SELECT * FROM people"

conn.query(query, (err, result, field) => {
    console.log(err)
    console.log(result)
    // console.log(field)
})


conn.end(err => {
    if (err ) {
        console.log(err)
        return err
    } else {
        console.log("DataBase ------ END!")
    }
})