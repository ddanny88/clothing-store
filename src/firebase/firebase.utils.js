import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5i-NcdnGaiRnE6DX_iFQu0Soa2qs5KZE",
    authDomain: "crown-db-e089c.firebaseapp.com",
    databaseURL: "https://crown-db-e089c.firebaseio.com",
    projectId: "crown-db-e089c",
    storageBucket: "",
    messagingSenderId: "562487591139",
    appId: "1:562487591139:web:ae05c8bdb72d8f11"
};

// the query reference object does not have the actual data of the collection or document. It instead has properties that tell us details about it, or the method to get the snapshot object which gives us the data we are looking for.

// the snapshot will simply let you know if the document is present in the collection, or if the collection exists. It will procide additional data for your use. The snap shot will let you know if the document exists, if not, you can plan your code accordinly.


// this function is responsible for getting a documentReference which will then get a snapshot from the database.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`); // documentReference
    // console.log('reference', userRef);
    const snapShot = await userRef.get(); // documentSnapshot
    // console.log('snapshot',snapShot)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
           await userRef.set({
               displayName,
               email,
               createAt,
               ...additionalData
           })
        } catch(error) {
            console.log('error creating user',error)
        }
    }
    return userRef;
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit();
}









firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

