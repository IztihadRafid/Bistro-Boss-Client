import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

    //GOOGLE PROVIDER
    const googleProvider = new GoogleAuthProvider()


    //CREATE USE WITH EMAIL PASSWORD
    const createUser =(email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    //SIGN IN WITH EMAIL AND PASSWORD
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    //GOOGLE signIN
    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //UPDATE PROFILE
    const updateUserProfile =(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

    //LOGOUT 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    //Current User
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser)
                // console.log("Current user: ",currentUser);
                if(currentUser){
                    //get token and store client
                    const userInfo = {email: currentUser.email}
                    axiosPublic.post("/jwt",userInfo)
                    .then(res=>{
                        // console.log(data);
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
                }
                else{
                    //remove token (if token is stored in the client/local storage)
                    localStorage.removeItem('access-token')
                }
                setLoading(false);
            });
            return ()=>{
                return unsubscribe();
            }
        },[axiosPublic])



    //Sending for access 
    const authInfo = {
        user,loading,createUser,signIn,logOut,updateUserProfile,googleSignIn
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;