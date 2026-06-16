const express = require('express')

const app = express()
app.use(express.json())


const alunos = []

app.get('/alunos', (pedido, resposta) => {
  resposta.json(alunos)
})

app.post('/alunos', (pedido, resposta) => {

  const aluno = {
    id: alunos.length+ 1,
    matricula : pedido.body.matricula,
    nome : pedido.body.nome,
    curso : pedido.body.curso,
    dataNascimento : pedido.body.dataNascimento,
    email : pedido.body.email
  }

  alunos.push(aluno)
  resposta.json(aluno)
})

app.put("/alunos/:id", (pedido, resposta) => {
  const index = alunos.findIndex(aluno => aluno.id == pedido.params.id)
  
  if(index === -1){
    return resposta.json({mensagem: "Aluno naõ encontrado!"})
  }
  
  alunos[index] = { ...alunos[index], ...pedido.body}
  
  resposta.json(alunos[index])
})

app.delete("/alunos/:id", (pedido, resposta) => {
  const index = alunos.findIndex(aluno.id == pedido.parmas.id)
  if (index ===-1){
    return resposta.json({ mensagem: "Alunos nao encontrados!"})
    alunos.splice(index, 1)
    resposta.json({mensagem: "Alunos deletado com eucesso!"})

  }
})





// --------------------------- Check if the API is working --------------------------- 

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

