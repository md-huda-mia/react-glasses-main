import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // google login Provider ======
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // === register user ========
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // === Sign in ==============
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //=== logOut=========
  const logOut = () => {
    return signOut(auth);
  };

  // current user calling objerve
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  console.log(user);
  const authentications = {
    googleLogin,
    createUser,
    singIn,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
