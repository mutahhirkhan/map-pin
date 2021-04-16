import { auth, firestore, serverTimestamp } from 'src/Firebase/Firebase';
import { REMOVE_USER, SET_USER } from './authConstants';

export var setUser = (user) => ({
    type:SET_USER,
    payload:{
        user,
    }
})

export var removeUser = (user) => ({
    type:REMOVE_USER
})

export var signup = ({email, password, name}) => async (dispatch) => {
    try {
        var {user:{uid}} = await firestore.createUserWithEmailAndPassword(email, password)
        console.log(uid)

        var userInfo={
            name,
            email, 
            createdAt: serverTimestamp()
        }
        await firestore.collection("users").doc(uid).set(userInfo)

    } catch (error) {
        console.log(error)
    }
}

export var signin = ({email, password}) => async (dispatch) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);

    } catch (error) {
        console.log(error)
        
    }
}

export var signout = () => async (dispatch) => {
    try {
        await auth.signOut()
    } catch (error) {
        console.log(error)
        
    }
}


export var authListener = () => async (dispatch) => {
    try {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                var {uid} = user;
                //fetch data from firestore
                var query = await firestore.collection("users").doc(uid).get()
                var {name, email} = query.data()

                var userData = {
                    email, 
                    name,
                    uid
                }
                dispatch(setUser(userData))
            }
            else{
                dispatch(removeUser(userData))
            }
        })
    } catch (error) {
        console.log(error)
        
    }
}