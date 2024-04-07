import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"

export default function Home(){
  
    const [data,setData] = useState(null)

    useEffect(()=>{
        getUsers()
    },[data])

    const getUsers = async () =>{
        const res = await axios.get('http://localhost:3000/api/users');
        if(res.status == 200){
            setData(res.data)   
        }
    }

    const userDelete = async (id) =>{

      try {
        const userDelete = await axios.delete(`http://localhost:3000/api/users/delete/${id}`);
        
        if(userDelete.status === 200){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User successfully added!",
            showConfirmButton: false,
            timer: 1500
          });
        }

      } catch (error) {
        if(error.response && error.response.data.error){
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.error,
            showConfirmButton: false,
            timer: 1500
          });
        }
        
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
            {data && data.reverse() && data.map(user => (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.contact}</td>
                  <td>
                    <div className="d-flex">
                      <button className="btn btn-sm btn-outline-primary">View</button>
                      <a href={`/update/${user._id}`}><button className="btn btn-sm btn-outline-success mx-2">Edit</button></a>
                      <button onClick={()=>userDelete(user._id)} className="btn btn-sm btn-outline-danger">Delete</button>
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
