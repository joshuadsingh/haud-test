export const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users').add(user).then(() => {
            dispatch({type: 'CREATE_USER', user});
        }).catch((err) => {
            dispatch({type: 'CREATE_USER_ERROR', err});
        })
    }
}

export const deleteUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(user).delete().then(() => {
            dispatch({type: 'DELETE_USER', user});
        }).catch((err) => {
            dispatch({type: 'DELETE_USER_ERROR', err});
        })
    }
}

export const updateUser = (user, data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(user).set(data).then(() => {
            dispatch({type: 'UPDATE_USER', user});
        }).catch((err) => {
            dispatch({type: 'UPDATE_USER_ERROR', err});
        })
    }
}