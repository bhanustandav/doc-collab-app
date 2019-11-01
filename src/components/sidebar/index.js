import React from 'react'

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    clickNew = (tab) => {
        this.props.createFileEvent(tab)
    };

    render() {
        return (
            <>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-file-alt"></i>
                            <span onClick={tab=>this.clickNew('pop')}> New </span>
                        </a>

                        <a className="nav-link" href="#">
                            <i className="fas fa-file-alt"></i>
                            <span className={`nav-link`} onClick={tab=>this.clickNew('tab')}>New [Opens new window]</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider"/>
                    <li className="nav-item">
                        {/*<a className="nav-link" href="#">*/}
                        {/*  <i className="fas fa-upload"></i>*/}
                        {/*  <span>Upload Files</span></a>*/}
                    </li>
                </ul>
            </>
        )
    }
}
