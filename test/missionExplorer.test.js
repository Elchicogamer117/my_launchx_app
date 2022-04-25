//* Prueba basica de Jest
// describe("Esto es una suite de pruebas", () => {
//       test('Caso de prueba 1', () => {
//             const result = 2 + 2 
//             expect(result).toBe(4);
//       });
// })

//* Preba de modulo
const missionExplorer = require('./../app/missionExplorer') //*? 'require' modularizacion con common.js
describe('Unit Test for Mission Explorer Class', () => {
      test('1) Create a mission explorer object', () => {
            const myMissionExplorer = new missionExplorer('Woopa')
            expect(myMissionExplorer.name).toBe('Woopa'); //<- No funciona si utilizas otras comillas
      });
})