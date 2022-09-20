import React from "react";
import image from "../../assets/images/logo-rock-dog-gris.png"
function SideBar() {
  return (
    <React.Fragment>
    		{/*<!-- Sidebar -->*/}
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

          {/*<!-- Sidebar - Brand -->*/}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
              <img className="w-100" src={image} alt="RockDog" />
            </div>
          </a>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider my-0" />

          {/*<!-- Nav Item - Dashboard -->*/}
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - RockDog</span></a>
          </li>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider" />

          {/*<!-- Heading -->}
          <div className="sidebar-heading">Actions</div>

          {/*<!-- Nav Item - Pages -->*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href={`http://localhost:3050/productos`}>
            <i className="fas fa-dog"></i>
              <span>Productos</span>
            </a>
          </li>

          {/*<!-- Nav Item - Charts -->*/}
          <li className="nav-item">
            <a className="nav-link" href={`http://localhost:3050/users/perfiles`}>
              <i className="fas fa-light fa-users"></i>
              <span>Usuarios</span></a>
          </li>

          

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
		    {/*//<!-- End of Sidebar -->*/}
    
    </React.Fragment>
  );
}

export default SideBar;