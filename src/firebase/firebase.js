import * as firebase from 'firebase';

const config = {
   
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID

};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// CHILD_REMOVE

// database().ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// CHILD_CHANGED

// database().ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// CHILD_ADDED

// database().ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// ARRAY SUSCRIPTION

// database().ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: snapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);

//  });




// CREATING ARRAYS WITH UNIQUE ID

// database().ref('expenses').push({
//     description: 'rent',
//     note: 'a note',
//     amount: 234,
//     createdAt: 'sarlanga'
// });




// SUSCRIPTION ON

// database().ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} on ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });


//  database().ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'USA'
// }
// );   

// setTimeout(() => {
//    database().ref('job/company').set('Google Fonts'); 

// }, 5500);


// setTimeout(() => {
//    database().ref('age').set('29'); 
// }, 3500);


// SUSCRIPTION OFF

// setTimeout(() => {
//     database().ref().off('value', onValueChange); 
//  }, 7000);


 
//  setTimeout(() => {
//     database().ref('age').set('48'); 
//  }, 10500);
 



// FETCHING DATA

// database().ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });



// WRITING DATA

// database().ref().set({
//     name: 'Hernán Ripoll',
//     age: 52,
//     location: {
//         city: 'Barcelona',
//         country: 'Spain'
//     },
//     stressLevel: 6,
//     job: {
//         title: 'Web Developer',
//         company: 'Google'
//     },
//     isSingle: true,
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// });



// UPDATING DATA

// database().ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'USA'
// });



// REMOVING DATA

// database().ref('isSingle').remove()
// .then(() => {
//     console.log('Data was removed')
// })
// .catch((e) => {
//     console.log('Data was not removed', e)
// });    
