import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/Firebase-config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { clearCookieFormBrowser } from "../Api/auth";


export const  AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  // setLoading
  const [loading, setLoading] = useState(true);
  // user
  const [user, setUser] = useState(null);
  // crateUser
  const createUser = (email, password)=> {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // signinUser
  const signInUser = (email, password)=> {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  // signout
  const logout = async () => {
    setLoading(true);
    await clearCookieFormBrowser();
    return signOut(auth)
  }

  // singingoogle
   const singInGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  
  
  // update user
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }


  // authstatechange
   useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser=> {
      setUser(currentUser);
      setLoading(false)
    })
    return ()=> {
      unSubscribe();
    }
  },[])

  const authInfo = {
    loading,
    user,
    createUser,
    signInUser,
    logout,
    singInGoogle,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



