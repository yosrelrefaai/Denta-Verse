import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection ,query ,orderBy,getDoc ,limit, getDocs } from "firebase/firestore";
export default function Leaderbord(){
    const [topUsers, setTopUsers] = useState([]);

useEffect(()=>{
    const fetchscores = async()=>{
        const scores = collection(db ,"challenge");
        const q =query(scores ,orderBy("score","desc"),limit(5));
        const querysnapshot = await getDocs(q);
        const users = querysnapshot .docs.map( doc => ({
            id:doc.id,
            ...doc.data(),
        }));
        setTopUsers(users);
    };
    fetchscores();
},[]);
return (
     <div className="px-24 py-28 bg-slate-100">
      <h2 className="text-2xl font-bold text-center mb-4">🏆 أفضل 5 لاعبين</h2>
      <ul className="space-y-3">
        {topUsers.map((user, index) => (
          <li key={user.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <span className="font-semibold text-lg">#{index + 1} - {user.name}</span>
            <span className="text-teal-600 font-bold text-xl">{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
)
}
