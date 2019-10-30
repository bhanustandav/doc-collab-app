import React from 'react'

export const Sidebar = (props) =>  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <li className="nav-item">
        <a className="nav-link" href="#">
            <i className="fas fa-file-alt"></i>
            <span> Create a New file</span>
        </a>

    </li>
    <hr className="sidebar-divider"/>
    <li className="nav-item">
        {/*<a className="nav-link" href="#">*/}
        {/*  <i className="fas fa-upload"></i>*/}
        {/*  <span>Upload Files</span></a>*/}
    </li>
</ul>