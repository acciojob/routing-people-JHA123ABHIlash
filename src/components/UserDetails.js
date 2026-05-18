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
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
        ))
      }
  

    </div>
  )
}
