const express = require ('express');
const  morgan = require ('morgan');
const Service = require ('./src/service.js')

const app = express();
const PORT = 6000;

app.use(morgan('dev'));


app.get("/", (req,res) => {
    res.json({
        message:"Lista de Usuarios",
        body : Service.getUsers(),
    })
})


app.get('/:id',(req,res) => {
    let { params:  { id } } = req;
    let user = Service.getUser(id);
    res.json({
        message: `Usuario ${id}`,
        body : user
})

});

app.post("/", (req, res) => {
    let {body : newUser} = req
    let user = Service.createUser(newUser);
    res.status(201).json({
        message : "Nuevo Usuario Creado",
    })
});



app.listen(PORT, () => console.log(`Servidor Listen in ${PORT}`));