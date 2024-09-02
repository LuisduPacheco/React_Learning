import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsyn debe retornar un heroe', (done) => {
    
    const id = 1;
    getHeroeByIdAsync( id )
      .then( hero => {

        expect( hero ).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
      })
        // Especial para trabajar con Async termina hasta que se ejecute todo porque jest es sincrono
        done();
      });

  })
  

  test('getHeroeByIdAsyn debe de obtener un error si heroe no existe', (done) => {
    
    const id = 100;
    getHeroeByIdAsync( id )
        .catch( error => {
          expect( error ).toBe(`No se pudo encontrar el héroe con id ${id}`)
          done();
        })

  })
})
