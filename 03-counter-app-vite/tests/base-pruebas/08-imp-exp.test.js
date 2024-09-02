import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Haciendo pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById( id );

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById( id );

    // Evalua null, false o undefined, cuidado al utilizarlo
    expect( hero ).toBeFalsy();
  })

  test('getHeroesByOwner debe retornar un arreglo con héroes de DC', () => {
    const owner = 'DC';
    const heroesTest = getHeroesByOwner( owner );
    //console.log(heroes)
    expect( heroesTest ).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])

    expect( heroesTest ).toEqual(heroes.filter( (heroe) => heroe.owner === owner) )
  })

  test('getHeroesByOwner debe retornar un arreglo de longitud 3 para heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );
    expect( heroes.length ).toEqual( 3 );
  })
  
  test('getHeroesByOwner debe retornar un arreglo de longitud 2 para heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );
    expect( heroes.length ).toEqual( 2 );
  })
  
  
})
