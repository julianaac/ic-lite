const express = require('express')
const cors = require('cors')


const router = require('./src/routes/routes')
const { atualizarCheckin, deletaTudo } = require('./src/funções/checkinAtualiza')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000, ()=>{
    console.log("Aplicação rodando na porta 4000")
})


app.get('/', (request, response)=>{
    deletaTudo();
    atualizarCheckin();
    response.send("hello world")
})