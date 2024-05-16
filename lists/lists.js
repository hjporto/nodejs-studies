const service = require("./service")

async function persons(heroes) {
  try {
    console.time()
    const result = await service.getPeople(heroes)
    //result.then(data => console.log(data.results[0].name))

    for (let i in result.results) {
      console.log(`Personagem => ${result.results[i].name} `)
    }
    console.timeEnd()
  } catch (error) {
    console.log("Falhouuuu", error)
  }
}
persons("")
