/* eslint-disable max-len */
/* eslint-disable function-paren-newline */
/* eslint-disable prefer-template */
/* eslint-disable default-case */
/* eslint-disable no-console */
import firebase from '../env/Environments'

export function storageRef() {
    return firebase.storage();
}
export async function uploadPhoto(file: any, callback: any) {
    const uploadTask = storageRef().ref(file.name).put(file);
    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            callback(progress, "")
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error: any) => {
            console.log('error ', error);
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                callback(100, downloadURL)
            });
        }
    );
}
