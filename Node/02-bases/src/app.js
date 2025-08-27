const { getAge, getUUID } = require('./plugins');
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const {getUserById} = require('./js-foundation/03-callbacks');
//const { getUserById } = require ('./js-foundation/04-arrow');
//const { buildMakePerson } = require('./js-foundation/05-factory');

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4, ( pokemon ) => {
    console.log({ pokemon });

    
});













// ! Referencia a la funcion factory y uso

//const makePerson = buildMakePerson({ getUUID, getAge });


//const obj = { name: 'Jonh', birthdate: '1985-10-21' };

/* const john = makePerson( obj );

console.log({ john }); */


//console.log(emailTemplate);

