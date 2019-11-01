import React from 'react'
import {Navbar} from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import BootModal from "../../components/bootModal";
import ContentWrapper from "../../components/contentWrapper";
import {createFile} from "./../../api/file";
import Filelist from "../../components/fileList";
import moment from "moment";

//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            userFiles: [
                {name:'NDA-1.docx',type:'word',createdOn:this.formatDate(new Date),modifiedOn:this.formatDate(new Date)},
                {name:'NDA-2.docx',type:'word',createdOn:this.formatDate(new Date),modifiedOn:this.formatDate(new Date)}
            ],
            createFileData : {}
        }
    }
    formatDate = (date) => {
        return moment(date).format('MM/DD/YYYY HH:MM')
    };

    openFileEvent = (file) => {
        console.log('open', file);
    };

    editFileEvent = (file) => {

    };

    coeditFileEvent = (file) => {

    };
    openInNewTab = (href) => {
        console.log(href);
        var evLink = document.createElement('a');
        evLink.setAttribute('href',href);
        evLink.setAttribute('target','_blank');
        document.body.appendChild(evLink);
        evLink.click();
        evLink.parentNode.removeChild(evLink);
    };

    createFileEvent = (tab) =>{
        let {createFileData} = this.state;
        // console.log(tab);
        createFile().then(res=>{
            this.setState({createFileData: res.data},()=>{
                if( tab === 'pop' )
                    this.modalVisibility();
                else
                    this.openInNewTab(createFileData['document_url']);
            });
        })
    };

    modalVisibility = () => {
        let {showModal} = this.state;
        this.setState({showModal: !showModal},()=>{
            // console.log(this.state.showModal);
        })
    };

    render() {
        let {createFileData, showModal, userFiles} = this.state;
        return <>
            <Navbar/>
            <div id="wrapper">
                <Sidebar createFileEvent={this.createFileEvent} url={createFileData['document_url']}/>
                <ContentWrapper>
                    {userFiles && <Filelist openFileEvent={this.openFileEvent} {...this.state}/>}

                    {showModal && <BootModal showModal={showModal} modalVisibility={this.modalVisibility}>
                        <iframe scrolling={`no`} width={`100%`} height={`100%`} title={`editor`} src={createFileData['document_url']}/>
                    </BootModal>}
                </ContentWrapper>
            </div>
        </>
    }
}
