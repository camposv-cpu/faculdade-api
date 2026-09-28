import banco from "../dados/db.js"
const listar = async (pedido, resposta) => {
    const [cursos] = await banco.query('select * from cursos')
    resposta.json(cursos)
}

const criar = async (pedido, resposta) => {
    const { nome,codigo,qtd_semestres } = pedido.body
    const [resultado] = await banco.query("insert into cursos (nome,codigo,qtd_semestres)values (?,?,?) ",
        [matricula, nome, dataNasc, email]
    )
    resposta.json({ id: resultado.insertId, nome,codigo,qtd_semestres})
}

const editar = async (pedido, resposta) => {
    const { id } = pedido.params
    const [resultado] = await banco.query(
        "update curso det nome =? , codigo=? ,qtd_semestres =?",
        [nome,codigo,qtd_semestres])
    if (resultado.affectedRows === 0) {
        resposta.tson({ mensagem: "curso não encontrdo!" })
    }
    resposta.json({ mensagem: "curso editado com sucesso" })
}

const deletar = async (pedido ,resposta) => {
    const {id} =pedido.params
    const[resultado] = await banco.query('delete from curso whwre id =?',[id])
    if (resultado.affectedRows === 0){
        resposra.json({ mensagem: "curso nao encontrado!"})
    }
    resposta.json({mensagem:"curso deletar com sucesso!"})
}


export { listar,criar,editar,delatar, }
