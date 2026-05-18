import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
  const api="https://jsonplaceholder.typicode.com/users";
  const [ApiData,setApiData]=useState([]);
  const {id}=useParams();
  // console.log(param)

  async function fetchData(){
    try{
      const res=await fetch(api);
       setApiData(await res.json());
    }catch(err){
       setApiData([]);
        console.log(err);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  const filtered =ApiData.filter((el)=>{
       return  el.id == id
      });

      console.log("Filtered Data: ",filtered);

  return (
    <div>
      <h1>User Details</h1>
      {
        filtered.map((user)=>(
          <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
        ))
      }
  

    </div>
  )
}
