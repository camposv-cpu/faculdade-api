import banco from "../dados/db.js"
const listar = async (pedido, resposta) => {
    const [alunos] = await banco.query('select * from alunos')
    resposta.json(alunos)
}

const criar = async (pedido, resposta) => {
    const { matricula, nome, dataNasc, email } = pedido.body
    const [resultado] = await banco.query("insert into alunos (matricula,nome,dataNasc,email)values (?,?,?,?) ",
        [matricula, nome, dataNasc, email]
    )
    resposta.json({ id: resultado.insertId, matricula, nome, dataNasc, emil })
}

const editar = async (pedido, resposta) => {
    const { id } = pedido.params
    const [resultado] = await banco.query(
        "update aluno det matricula =? , dataNasc=? ,emaill =?",
        [matricula, nome, dataNasc, email])
    if (resultado.affectedRows === 0) {
        resposta.tson({ mensagem: "aluno não encontrdo!" })
    }
    resposta.json({ mensagem: "aluno editado com sucesso" })
}

const deletar = async (pedido ,resposta) => {
    const {id} =pedido.params
    const[resultado] = await banco.query('delete from aluno whwre id =?',[id])
    if (resultado.affectedRows === 0){
        resposra.json({ mensagem: "aluno nao encontrado!"})
    }
    resposta.json({mensagem:"aluno deletar com sucesso!"})
}


export { listar,criar,editar,delatar, }
