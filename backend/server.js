const express = require('express')
const user = require('./routes/user')
require('./db')();

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/users/',user)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
