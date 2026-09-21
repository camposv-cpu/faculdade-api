import banco from "../dados/db.js"
const listar = async (pedido ,resposta) => {
    const [aluno] = await banco.query ('select * from alunos')
    resposta .json (alunos)
}

const criar = async (pedido, resposta) =>{
const {matricula, nome, dataNasc ,email}= pedido.body
const [resultado]=banco.query("insert into alunos (matricula,nome,dataNasc,email)values (?,?,?,?) ",
    [matricula,nome,dataNasc,email]
)
resposta.json({id: resultado.insertId,matricula ,nome,dataNasc,emil})
}

export {listar}
