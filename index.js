const missionExplorer = require('./app/missionExplorer') //<- Llamamos al modulo con require

const cristian = new missionExplorer("Cristian")
console.log(`Mission explorer name: ${cristian.name}`)