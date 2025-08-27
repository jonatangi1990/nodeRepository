

const getPokemonById = async( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;


    const response = await fetch( url );
    const pokemon = await response.json();

    //throw new Error( 'El pokemon no existe');

    return pokemon.name;

    //return fetch( url )
        //.then( ( response ) => response.json())
        //.then( () => { throw new Error(' El pokemon no existe') })
        //.then( ( pokemon ) => pokemon.name );


}



module.exports = getPokemonById;