import banco from "../dados/db.js"
const listar = async (pedido, resposta) => {
    const [disciplinas] = await banco.query('select * from disciplinas')
    resposta.json(disciplinas)
}

const criar = async (pedido, resposta) => {
    const { matricula, nome, dataNasc, email } = pedido.body
    const [resultado] = await banco.query("insert into disciplinas (nome,codigo.id_curso)values (?,?,?) ",
        [matricula, nome, dataNasc, email]
    )
    resposta.json({ id: resultado.insertId, matricula, nome, dataNasc, emil })
}

const editar = async (pedido, resposta) => {
    const { id } = pedido.params
    const [resultado] = await banco.query(
        "update disciplina det matricula =? , dataNasc=? ,emaill =?",
        [matricula, nome, dataNasc, email])
    if (resultado.affectedRows === 0) {
        resposta.tson({ mensagem: "disciplina não encontrdo!" })
    }
    resposta.json({ mensagem: "disciplina editado com sucesso" })
}

const deletar = async (pedido ,resposta) => {
    const {id} =pedido.params
    const[resultado] = await banco.query('delete from disciplina whwre id =?',[id])
    if (resultado.affectedRows === 0){
        resposra.json({ mensagem: "disciplina nao encontrado!"})
    }
    resposta.json({mensagem:"disciplina deletar com sucesso!"})
}


export { listar,criar,editar,delatar, }