const axios = require('axios')
const URL = "https://swapi.dev/api/people/?search="

async function getPeople(nome) {
  const url = `${URL}${nome}&format=json`
  const response = await axios.get(url)
  return response.data
}
module.exports = {
  getPeople
}
