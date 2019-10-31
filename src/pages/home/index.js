import React from 'react'
import {Navbar} from "../../components/navbar";
import {Sidebar} from "../../components/sidebar";
import ContentWrapper from "../../components/contentWrapper";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }


    createFile


    render() {
        return <><Navbar/>
            <div id="wrapper">
                <Sidebar/>
                <ContentWrapper/>
            </div>
        </>

    }
}