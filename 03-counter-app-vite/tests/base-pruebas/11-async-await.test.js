import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe retornar el URL de la imagen', async() => {
    
    const url = await getImagen();
    expect( typeof url ).toBe( 'string' );
  })

  test('getImagen debe retornar el error si no se encuentra el API Key de la imagen', async() => {
    
    const url = await getImagen();
    expect( typeof url ).toBe( 'No se encontro la imagen' );
  })
  
})
