import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2'


export default function AddEdit() {

    const initialState = {
        name: "",
        email: "",
        country: "",
        contact: ""
    }

    const [data,setData] = useState(initialState);
    const {name,email,country,contact} = data;

    const createUser = async (data) => {
        try {
          const res = await axios.post("http://localhost:3000/api/users/create", data);
          if (res.status === 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User successfully added!",
              showConfirmButton: false,
              timer: 1500
            });
            reload(1500)
          }
        } catch (error) {
          if (error.response && error.response.data.error) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: error.response.data.error,
              showConfirmButton: false,
              timer: 1500
            });
            reload(1500)
        }
        }
      }; 
    const handleSubmit = (e) =>{
        e.preventDefault()
        createUser(data)
    }
    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setData({...data,[name]:value})
    }
    const reload = (timeout) =>{
      setTimeout(() => {
          window.location.reload()
      }, timeout);
    }

  return (
<div className='container mt-5'>
    <div className="col-md-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h1>Add New User Form</h1>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='name' className="form-control" onChange={handleInputChange} value={name} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" onChange={handleInputChange} value={email} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Country</label>
                <input type="text" name='country' className="form-control" onChange={handleInputChange} value={country} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Contact</label>
                <input type="number" name='contact' className="form-control" onChange={handleInputChange} value={contact} required/>
            </div>
            <button type="submit" className="btn btn-primary w-100">Add User</button>
        </form>
            </div>
        </div>
    </div>
</div>

  )
}
