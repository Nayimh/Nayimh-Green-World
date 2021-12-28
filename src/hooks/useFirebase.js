import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firbase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile} from "firebase/auth";




// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // register user
    const registerUser = (email, password,name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
            setAuthError('');
            const newUser = { email, displayName: name };

          setUser(newUser);
            // save user to db
          saveUser(email, name, 'POST');


            // send name to firebase 
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });


            history.replace('/');
       
          })
          .catch((error) => {
          
            setAuthError(error.message)
          
          })
            .finally(() => setIsloading(false));
    }

    // login with email & password
    const login = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
      setAuthError('');
  
  })
  .catch((error) => {
    
    setAuthError(error.message)
  })
           .finally(()=> setIsloading(false));

    }
    // login with google
    const googleSignin = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         
          const user = result.user;
          saveUser(user?.email, user?.displayName, 'PUT');

            const destination = location?.state?.from || '/';
          history.replace(destination);
          

          setAuthError('');
         
         

          }).catch((error) => {
           
            setAuthError(error.message);
           
          })
            .finally(()=> setIsloading(false));
    }


    // observe user
    useEffect(() => {

    const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            
            } else {
                setUser({})
        }
        setIsloading(false);
    });
        return unsubscribe;
    } ,[auth])



    // logout
    const logout = () => {
        setIsloading(true);
        signOut(auth).then(() => {
           
          }).catch((error) => {
            
          })
            .finally(()=> setIsloading(false));
  }
  
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }; 
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user) 
    })
    .then()
  }
  
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data?.admin))
  }, [user?.email])
  




    return {
      user,
      admin,
        registerUser,
        login,
        logout,
        isLoading,
        authError,
        googleSignin

    }
}

export default useFirebase;