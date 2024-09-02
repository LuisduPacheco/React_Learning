const activo = true;

// const message = ( activo ) ? 'Activo' : 'Inactivo';

const message = !activo && 'Activo';

console.log(message)