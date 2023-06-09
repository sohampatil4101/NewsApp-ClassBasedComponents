import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function navbar() {
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" >
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-brand"><Link className="nav-link"href='/' to="/"> General</Link> </li>
        <li className="nav-item"><Link className="nav-link"href='/' to="/business"> Business</Link> </li>
        <li className="nav-item"><Link className="nav-link"href='/' to="/entertainment"> Entertainment</Link> </li>
        <li className="nav-item"><Link className="nav-link"href='/' to="/health"> Health</Link> </li>
        <li className="nav-item"><Link className="nav-link"href='/' to="/science"> Science</Link> </li>
        <li className="nav-item"><Link className="nav-link"href='/' to="/sports"> Sports</Link> </li>
        <li className="nav-item"><Link className="nav-link"href='/' to="/technology"> Technology</Link> </li>
      </ul>
    </div>
  </div>
</nav>
       <Outlet />
  </>
  )
}


