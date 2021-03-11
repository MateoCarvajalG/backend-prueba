const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const router= require('./routes/index')


const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/',(req,res)=>{
    res.send('hola')
})

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
