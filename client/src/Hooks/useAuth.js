import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/config";
import axiosInstance from "../config/axios";


const signInWithGoogle = async () => {
    try {
        const googleProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, googleProvider)
        const user = result.user;
        
        const idToken = await user.getIdToken();
        
        const response = await axiosInstance.post('/user/firebase/login', {idToken});


    } catch (error) {
        console.log(error)
    }
}


export { signInWithGoogle }
