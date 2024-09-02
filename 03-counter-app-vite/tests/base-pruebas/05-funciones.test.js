import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser()

    expect( testUser ).toStrictEqual( user );

  })
  
  test('getUsuarioActivo debe retornar un objeto', () => {
    
    const name = 'Luis';
    // const getUserActive = ( nombre ) =>({
    //   uid: 'ABC567',
    //   username: nombre
    // })

    const usuarioActivo = getUsuarioActivo(name);

    //expect( getUserActive( name )).toEqual( usuarioActivo );
  
    expect( usuarioActivo ).toEqual( {
      uid: 'ABC567',
      username: name
    })
  })

})
