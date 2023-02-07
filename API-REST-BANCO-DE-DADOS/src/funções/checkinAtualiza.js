const database2 = require('../database/connection2')
const database3 = require('../database/connection3')

class CheckinAtualiza {
     deletaTudo(){
        database3.select("*").table("checkin").then(async tarefas=>{
            for (let i = 0; i < tarefas.length; i++) {
                let id_check=tarefas[i].checkin_id;
                console.log(id_check)
                await database3('checkin').delete(['*']).where({ checkin_id: id_check });
            }
        }).catch(error=>{
            console.log(error)
        })

     }
     atualizarCheckin(){
        console.log("aqui")
        database2.select("*").table("laboratorio").then(async tarefas=>{
            for (let i = 0; i < tarefas.length; i++) {
                let {lab_id, lab_dataentrada, lab_datasaida, lab_turma_fk, lab_disciplina_fk, lab_aluno_fk,lab_check_verifica}=tarefas[i];
                console.log(lab_id)
                await database3('checkin').insert({checkin_id:lab_id,checkin_entry: lab_dataentrada, checkin_exit: lab_datasaida, checkin_status: lab_check_verifica, checkin_classroom_fk: lab_turma_fk, checkin_subject_fk: lab_disciplina_fk, checkin_student_fk: lab_aluno_fk,checkin_valid: lab_check_verifica});
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    

}

module.exports = new CheckinAtualiza() 