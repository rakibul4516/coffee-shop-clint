import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {


    //Register user
    const handleSignUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //Login user
    const handleLogIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    const authInfo = {
        handleSignUp,
        handleLogIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
};

export default AuthProvider;

