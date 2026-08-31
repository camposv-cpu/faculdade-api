import {diciplinas}from "../dados/db.js"


const listar = ((pedido, resposta) => {
    resposta.json(diciplinas)
})
const criar = ( (pedido, resposta) => {
    
    const diciplina = {
        id:diciplinas.length + 1,
        nome:pedido.body.nome,
        codigo:pedido.body.codigo
    }
    diciplinas.push(diciplina)
    resposta.json(diciplina)
})
const editar = ( (pedido,resposta)  => {
    const index = diciplinas.findIndex(diciplina => diciplina.id == pedido.params.id)
    if(index == -1) {
        return resposta.json({mensagem:"diciplina não encontrado!"})
    }
    diciplinas[index] = {...diciplinas[index], ...pedido.body}
    resposta.json(diciplinas[index])
})
const deletar = ((pedido, resposta) => {
    const index = diciplinas.findIndex(diciplina => diciplina.id == pedido.params.id)
    if (index === -1) {
        return resposta.json({mensagem:"diciplina não encontrado"})
    }
    diciplinas.splice(index,1)
    resposta.json({mensagem:"diciplina deletado com sucesso"})

})

export { listar, criar , editar , deletar }