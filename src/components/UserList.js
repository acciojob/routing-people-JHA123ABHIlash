import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserList() {
    const api="https://jsonplaceholder.typicode.com/users";

    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    console.log(data);

    async function fetchData(){
        
              setLoading(true);
        try {
            const res=await fetch(api);
             setData(await res.json());

        } catch (error) {
            setData([]);
            console.log(error);
        }
        setLoading(false);
        
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div>
        <h1>User List</h1>

        {
            loading ? "Loading..." : (<ul>
         {
            data.map((el)=>(
                <li key={el.id}>
                   <Link to={`/users/${el.id}`}> {el.name}</Link>
                </li>
            ))
         }
       </ul>)
        }

    
    </div>
  )
}
