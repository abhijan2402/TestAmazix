const { Client } = require('pg');
require('dotenv').config();
const client = new Client({
    user: 'amezixDB',
    password: process.env.PASSWORD,
    host: process.env.CONNECTIONSTRING,
    database: process.env.DBNANME,
    port: 5432,
});

async function connectDB() {
    try {
        client.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    } catch (error) {
        console.log(error, "Error");
    }
}

module.exports = { connectDB, client };