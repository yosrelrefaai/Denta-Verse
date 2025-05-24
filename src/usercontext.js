import { createContext ,useState ,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
 export const Authcontext = createContext();
export default function Usercontext({children}){
  const[currentuser , setcurrentuser]=useState(null);
  const[loading , setloading]=useState(true);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth ,(user)=>{
        setcurrentuser(user);
        setloading(false);
    })
    return ()=> unsubscribe();
  },[]);
  return(
    <Authcontext.Provider value={{currentuser}}>
           {!loading && children}
    </Authcontext.Provider>
  )
}
export const useAuth = () => Usercontext(Authcontext);