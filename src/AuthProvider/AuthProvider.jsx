import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { GiToaster } from "react-icons/gi";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = async (name, photoURL) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      
      // Fetch user profile again to get updated information
      const updatedUser = auth.currentUser;
      
      // Update local user state with updated user information
      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating profile: ", error.message);
    }
  };
  
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const authValue = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    googleLogin,
    githubLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
