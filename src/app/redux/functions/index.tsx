import { eventChannel } from "redux-saga";
import firebase from "../env/Environments";

export function getAuthChannel() {
    const authChannel = eventChannel((emit) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => emit({ user }));
        return unsubscribe;
    });
    return authChannel;
}
