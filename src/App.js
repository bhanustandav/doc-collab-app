import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">

          <div className="sidebar-brand-text mx-3">Doc-Ver-App</div>
        </a>

        <ul className="navbar-nav ml-auto">


          <div className="topbar-divider d-none d-sm-block"></div>


          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle userDropdown" href="#" id="userDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Bhanu</span>
              <img className="img-profile rounded-circle" src="img/user.png"/>
            </a>

            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>

        </ul>

      </nav>
      <div id="wrapper">



        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


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

        <div id="content-wrapper" className="d-flex flex-column">


          <div id="content">



            <div className="container-fluid">



              <div className="mb-4">

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th> Type</th>
                        <th> Created On</th>
                        <th> Modified On</th>

                      </tr>
                      </thead>

                      <tbody>
                      <tr>
                        <td><a href="#">NDA-1.docx</a></td>
                        <td> Document</td>
                        <td> 2hours ago</td>
                        <td> 2hours ago</td>

                      </tr>
                      <tr>
                        <td><a href="#">NDA-1.docx</a></td>
                        <td> Document</td>
                        <td> 2hours ago</td>
                        <td> 2hours ago</td>

                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Zylkar Box 2019</span>
              </div>
            </div>
          </footer>


        </div>


      </div>
    </div>
  );
}

export default App;
