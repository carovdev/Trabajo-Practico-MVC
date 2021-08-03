const express = require('express');
const app = express();
const port = 3000;
const mainRouter = require('./routers/main');

app.use(express.static('public'));

app.use('/',mainRouter);

app.listen(3000, ()=>{
    console.log('Servidor funcionando');

})