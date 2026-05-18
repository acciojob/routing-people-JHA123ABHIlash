import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default function UserList() {
    const api="https://jsonplaceholder.typicode.com/users";

    const [loading,setLoading]=useState(true);
    const [data,setData]=useState([]);

    async function fetchData(){
        
        try {
            const res=await fetch(api);
             setData(await res.json());

              setTimeout(() => {
            setLoading(false);
        }, 500);

        } catch (error) {
            setData([]);
            console.log(error);
            setLoading(false);
        }
        
        
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div>
        <h1>User List</h1>

        {
            loading ? (<Spinner/>) : (<ul>
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
