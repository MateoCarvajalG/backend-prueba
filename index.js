const express = require('express');
const morgan = require('morgan');
const cors = require("cors");



const apiRouterProducts= require('./routes/products');
const apiRouterCategories= require('./routes/category')

const app = express();


app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/productos', apiRouterProducts);
app.use('/categorias', apiRouterCategories)

app.get('/',(req,res)=>{
    res.send('hola')
})

app.get('/productos/producto/:id', (req, res) => {
    const id = req.params.id
    ID=res.send(id)
    console.log(ID)
})
const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});

