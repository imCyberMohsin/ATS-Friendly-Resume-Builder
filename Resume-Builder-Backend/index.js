const express = require('express')
const cors = require('cors')
const pdf = require('html-pdf')

const app = express()
const port = 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     res.send('working');
// })

app.use(express.static('../Resume-Builder-Frontend/build'))

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})