import { Link, useLocation } from "react-router-dom";
import {useEffect, useState} from "react"

export default function Header(){

    const [active,setActive] = useState("Home");

    const location = useLocation()

    useEffect(()=>{
        if(location.pathname == "/"){
            setActive("Home")
        }else if(location.pathname == "/add"){
            setActive("Add")
        }
    },[location])

    return(
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand fs-4" href="#">User Management System</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link fs-4 ${active == "Home" ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link fs-4 ${active == "Add" ? 'active' : ''}`} to="/add">Add New User</Link>
              </li>
            </ul>
        </div>
      </div>
    </nav>
</>
    )
}