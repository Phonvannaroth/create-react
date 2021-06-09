import firebase from '../env/Environments'

const db = firebase.firestore();

export function auth() {
    return firebase.auth()
}

export function createId() {
    return db.collection('seller').doc().id;
}
export function sellerRef() {
    return db.collection('seller');
}
export function adminRef() {
    return db.collection('admin');
}
export function userRef() {
    return db.collection('users');
}
