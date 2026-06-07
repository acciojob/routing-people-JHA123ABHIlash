import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "regenerator-runtime/runtime";

export default function UserList() {
    
    const url="https://jsonplaceholder.typicode.com/users";
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    async function fetchData(){
        setLoading(true);
        try {
            const res=await fetch(url);
            const datas=await res.json();
            setData(datas);

        } catch (error) {
            setData([]);
            
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchData()
    },[]);

    console.log(data);
  return (
    <div>
        <h1>User List</h1>

        <ul>
            {loading ? (<div>Loading...</div>):(
                data.map((el)=>{
                return <Link  to={`/users/${el.id}`} key={el.id}><li>{el.name}</li></Link>
            })
            )}
        </ul>
    </div>
  )
}
