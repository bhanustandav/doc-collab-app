import React from 'react'
import {Navbar} from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import BootModal from "../../components/bootModal";
import ContentWrapper from "../../components/contentWrapper";
import {createFileLocal, createFileZoho, docList, editFileZoho} from "./../../api/file";
import Filelist from "../../components/fileList";
import moment from "moment";

//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            userFiles: [],
            fileData : {}
        }
    }

    componentDidMount() {
        this.docListEvent(5);
    }

    openFileEvent = (file) => {
        editFileZoho(file).then(res=>{
            console.log(res.data);
        });
    };

    editFileEvent = (file) => {
        editFileZoho(file).then(res=>{
            this.modalVisibility();
            console.log(res.data);
        });
    };

    coeditFileEvent = (file) => {

    };

    docListEvent = (id) => {
        docList(id).then(res=>{
            this.setState({userFiles: res.data},()=>{
                console.log( this.state.userFiles )
            });
        })
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
        let {fileData} = this.state;
        // console.log(tab);
        let id = Math.floor(Math.random() * 100);
        let data = {
            documentName: "NDA_" + id,
            documentFormat: "docx",
            documentId: id
        };
        createFileZoho(data).then(res=>{
            this.setState({fileData: res.data},()=>{
                createFileLocal({document: res.data,...data});
                if( tab === 'pop' )
                    this.modalVisibility();
                else
                    this.openInNewTab(fileData['document_url']);
            });
        })
    };

    modalVisibility = () => {
        let {showModal} = this.state;
        this.setState({showModal: !showModal},()=>{
            this.docListEvent(5);
            // console.log(this.state.showModal);
        })
    };

    handleClose = () => {
        console.log('modal closed');
    };

    render() {
        let {fileData, showModal, userFiles} = this.state;
        return <>
            <Navbar/>
            <div id="wrapper">
                <Sidebar createFileEvent={this.createFileEvent} url={fileData['document_url']}/>
                <ContentWrapper>
                    {userFiles && <Filelist editFileEvent={this.editFileEvent} openFileEvent={this.openFileEvent} {...this.state}/>}

                    {showModal && <BootModal
                        showModal={showModal}
                        modalVisibility={this.modalVisibility}
                        onExit={this.handleClose}
                        animation={true}>
                        <iframe scrolling={`no`} width={`100%`} height={`100%`} title={`editor`} src={fileData['document_url']}/>
                    </BootModal>}
                </ContentWrapper>
            </div>
        </>
    }
}
