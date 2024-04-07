import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home(){
  
    const [data,setData] = useState(null)

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async () =>{
        const res = await axios.get('http://localhost:3000/api/users');
        if(res.status == 200){
            setData(res.data)
        }
    }

    return (
    <>
    <div className="container mt-5">
        <div className="row col-md-12 mt-5">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Contact</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {data && data.map(user => (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.contact}</td>
                  <td>
                    <div className="d-flex">
                      <a href=''><button className="btn btn-sm btn-outline-primary">View</button></a>
                      <a href=''><button className="btn btn-sm btn-outline-success mx-2">Edit</button></a>
                      <a href=''><button className="btn btn-sm btn-outline-danger">Delete</button></a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}
