const express = require('express');
const routes = require('./routes');
const mongoose = require('./utils/mongoose')
const app = express();


const port = process.env.PORT||8000;

app.use(express.json())
app.use(routes);
app.listen(port,(err) => {
    if(err)
    {
        console.log(err);
    }
    console.log(`app is running at port ${port}`)
})