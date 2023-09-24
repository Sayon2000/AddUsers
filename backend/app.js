const express = require('express');
const cors = require('cors')

const app = express();


const sequelize = require('./util/db')
const userRoutes = require('./routes/user')

app.use(express.json())
app.use(cors())

app.use('/user' , userRoutes)



sequelize.sync().then(()=>{
    app.listen(4000)
})
.catch(e => console.log(e))
