/* eslint-disable brace-style */
/* eslint-disable no-else-return */
/* eslint-disable no-tabs */
// import firebase from '../Environments'
import firebase from 'firebase';
// import _ from "lodash";

export function pushToArray(data: firebase.firestore.QuerySnapshot): Array<any> {
	if (data.empty) return [];
	return data.docs.map((m: any) => ({ ...m.data() }));
}

export function pushToObject(snapshot: firebase.firestore.DocumentSnapshot) {
	return { ...snapshot.data(), id: snapshot.id }
}

export function toArray(value: any) {
	if (value === undefined || value === null) {
		return [];
	}
	return value;
}

export function fieldArrayValue(data: any, key: any) {
	if (toArray(data).length === 0) {
		return [key];
	}
	else {
		return null;
	}
}

export function userObject(user: any) {
	const { key, displayName } = user;
	return {
		key, displayName
	}
}

// export function orderByDesc(data: Array<any>, field: string, order: any) {
// 	return _.orderBy(data, [field], [order]);
// }

export function StatusObject() {
	return {
		ACTIVE: { key: 1, text: 'Active' },
		DISABLED: { key: 2, text: 'Disabled' },
		DELETED: { key: 3, text: 'Deleted' },
	};
}
