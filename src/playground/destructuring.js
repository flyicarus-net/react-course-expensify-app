// // OBJECT DESTRUCTURING

// // const person = {
// //     name: 'Hernán',
// //     age: 52,
// //     location: {
// //         city: 'Playa del Carmen', 
// //         temp: 32
// //     }
// // };

// // const name = 'Hernán';
// // const age = 52;


// // console.log( `${name} is ${age},` );

// const book = {
//     name: 'La Cábala Mística',
//     author: 'Dion Fortune',
//     publisher: {
//         name: 'Golden Dawn'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// const { name: bookName } = book;


// if (publisherName) {
//     console.log(publisherName, bookName );
// };



// // ARRAY DESTRUCTURING

const address = [ 'Calle 1 Sur con Diagonal 60', 'Playa del Carmen', 'Quintana Roo', '98100' ];

const [ street, city, state, zip  ] = address

console.log(`You are in ${city}, ${state}.`)



const item = [ 'Coffee (hot)', '52,00', '65,50', '75,00' ];

const [ product, , price] = item

console.log(`A medium ${product} costs ${price}.`);