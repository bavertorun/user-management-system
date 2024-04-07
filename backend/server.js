const express = require('express');
const cors = require('cors')
const user = require('./routes/user');
require('./db')();

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api/users/',user)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
