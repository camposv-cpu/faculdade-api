import banco from "../dados/db.js"
const listar = async (pedido, resposta) => {
    const [professores] = await banco.query('select * from professores')
    resposta.json(professores)
}

const criar = async (pedido, resposta) => {
    const { matricula, nome, dataNasc, email } = pedido.body
    const [resultado] = await banco.query("insert into professores (matricula,nome,dataNasc,email)values (?,?,?,?) ",
        [matricula, nome, dataNasc, email]
    )
    resposta.json({ id: resultado.insertId, matricula, nome, dataNasc, emil })
}

const editar = async (pedido, resposta) => {
    const { id } = pedido.params
    const [resultado] = await banco.query(
        "update professor det matricula =? , dataNasc=? ,emaill =?",
        [matricula, nome, dataNasc, email])
    if (resultado.affectedRows === 0) {
        resposta.tson({ mensagem: "professor não encontrdo!" })
    }
    resposta.json({ mensagem: "professor editado com sucesso" })
}

const deletar = async (pedido ,resposta) => {
    const {id} =pedido.params
    const[resultado] = await banco.query('delete from professor whwre id =?',[id])
    if (resultado.affectedRows === 0){
        resposra.json({ mensagem: "professor nao encontrado!"})
    }
    resposta.json({mensagem:"professor deletar com sucesso!"})
}


export { listar,criar,editar,delatar, }
