const express = require("express");
const app = express();
const { createServer } = require("http");
// const port = process.env.PORT || 4000
const envVariables = require('dotenv');
const connectDB = require("./src/database");

envVariables.config()

const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
const PORT = 4000

httpServer.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    connectDB()
});

// const app = express()
// const PORT = 4000

// app.listen(PORT, () => {
//     console.log(`API listening on PORT ${PORT} `)
// })

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})