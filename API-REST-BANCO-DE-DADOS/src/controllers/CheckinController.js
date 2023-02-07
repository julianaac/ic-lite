const database2 = require('../database/connection2')
const database3 = require('../database/connection3')

class CheckinController {

     atualizarCheckin(){
        console.log("aqui")
        database2.select("*").table("checkin").then(async tarefas=>{
            for (let i = 0; i < tarefas.length; i++) {
                let {id_check, check_entrada, check_saida, check_status, check_turma, id_disciplina_fk, id_aluno_fk,check_valida}=tarefas[i];
                console.log(id_check)
                await database3('checkin').insert({checkin_entry: check_entrada, checkin_exit: check_saida, checkin_status: check_status, checkin_classroom_fk: check_turma, checkin_subject_fk: id_disciplina_fk, checkin_student_fk: id_aluno_fk,checkin_valid: check_valida});
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    novoCheckin(request, response){
        const {checkin_entry, checkin_exit, checkin_status, checkin_valid, checkin_student_fk, checkin_classroom_fk, checkin_subject_fk} = request.body 

        console.log(checkin_entry, checkin_exit, checkin_status, checkin_valid, checkin_student_fk, checkin_classroom_fk, checkin_subject_fk)

        database3.insert({checkin_entry, checkin_exit, checkin_status, checkin_valid, checkin_student_fk, checkin_classroom_fk, checkin_subject_fk}).table("checkin").then(data=>{
            console.log(data)
            response.json({message: "Checkin criado com sucesso !"})
        }).catch(error=> {
            console.log(error)
        })
    }

    listarCheckins(request, response){
        database3.select("*").table("checkin").then(checkins=>{
            console.log(checkins)
            response.json(checkins)
        }).catch(error=>{
            console.log(error)
        })
        
    }


    listarUmCheckin(request, response){
        const checkin_id = request.params

        database3.select("*").table("checkin").where(checkin_id, checkin_id).then(checkin=>{
            response.json(checkin)
            console.log(checkin)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarCheckin(request, response){
        const id = request.params
        const {checkin_entry, checkin_exit, checkin_status, checkin_valid, checkin_student_fk, checkin_classroom_fk, checkin_subject_fk} = request.body

        database3.where(id,id).update({checkin_entry:checkin_entry, checkin_exit:checkin_exit, checkin_status:checkin_status, checkin_valid:checkin_valid, checkin_student_fk:checkin_student_fk, checkin_classroom_fk:checkin_classroom_fk, checkin_subject_fk:checkin_subject_fk}).table("checkin").then(data=>{
            response.json({message:"Checkin atualizado com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }

    removerCheckin(request, response){
        const checkin_id = request.params

        database3.where(checkin_id,checkin_id).del().table("checkin").then(data=>{
            response.json({message: "Checkin removido com sucesso"})
        }).cath(error=>{
            response.json(error)
        })
    }

    removerTodoDados(request, response){

        database3.del().table("checkin").then(data=>{
            response.json({message: "Checkin removido com sucesso"})
        }).cath(error=>{
            response.json(error)
        })
    }

}

module.exports = new CheckinController() 