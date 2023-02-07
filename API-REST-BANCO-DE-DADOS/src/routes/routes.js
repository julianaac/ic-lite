const connection = require('../database/connection')
const connection3 = require('../database/connection3')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')
const CheckinController = require('../controllers/CheckinController')

router.post('/novaTarefa', TaskController.novaTarefa)
router.get('/tarefas', TaskController.listarTarefas)
router.get('/tarefa/:id', TaskController.listarUmaTarefa)
router.put('/atualizar/tarefa/:id',TaskController.atualizarTarefa)
router.delete('/delete/tarefa/:id',TaskController.removerTarefa)


/*ROTAS DE CHECKIN*/
router.post('/novoCheckin', CheckinController.novoCheckin)
router.get('/checkins', CheckinController.listarCheckins)
router.get('/checkin/:checkin_id', CheckinController.listarUmCheckin)
router.put('/atualizar/checkin/:checkin_id', CheckinController.atualizarCheckin)
router.delete('/delete/checkin/:checkin_id', CheckinController.removerCheckin)
router.delete('/deletetudo/checkin', CheckinController.removerTodoDados) 

module.exports = router 