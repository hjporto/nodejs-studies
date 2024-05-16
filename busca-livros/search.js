
const dados = require('./database.json')


function getData(author) {
  const saida = []
  for (i in author.livros) {
    saida.push(JSON.stringify(author.livros[i].titulo))
  }
  return saida
}
const result = getData(dados)
console.log(result)
