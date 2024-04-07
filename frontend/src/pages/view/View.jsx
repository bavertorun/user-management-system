import axios from "axios"
import React, { useEffect, useState } from 'react'
import {useParams, useNavigate,Link} from "react-router-dom"

export default function View() {

    const [user, setUser] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(id){
            viewUser(id)
        }
    },[id])

    const viewUser = async (id) =>{
        try {
            const getUser = await axios.get(`http://localhost:3000/api/users/${id}`);
            if(getUser.status === 200){
                setUser({...getUser.data})
            }
        } catch (error) {
            if (error.response && error.response.data.error) {
               navigate('/')
            }
        }
    }

  return (
    <div className='container'>
        <div className="row col-md-8 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h1>User Info</h1>
                </div>
                <div className="card-body">
                <ul class="list-group">
                  <li class="list-group-item">{user?.name}</li>
                  <li class="list-group-item">{user?.email}</li>
                  <li class="list-group-item">{user?.country}</li>
                  <li class="list-group-item">{user?.contact}</li>
               </ul>
                </div>
                <div className="card-footer d-flex justify-content-around">
                <Link to={`/update/${user?._id}`}>
                <button type="submit" className="btn py-2 px-5 btn-primary">Update</button>
                </Link>
                <Link to="/">
                <button type="submit" className="btn py-2 px-5 btn-secondary">Back</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

