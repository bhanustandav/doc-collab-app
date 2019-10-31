import React from 'react'
import {Navbar} from "../../components/navbar";
import {Sidebar} from "../../components/sidebar";
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
            createFileData : {
                "session_delete_url": "https://writer.zoho.com/writer/officeapi/v1/session/bbda95e506ae523864b5684c1d7c9bc800011ecebf8d695ee0d3bbb50153431e80387d3019143b0438538e7915409a173afcfcb939d49392abd4f1432250af5c6176368926d8e702bbb2c9e29dd68cb6",
                "save_url": "https://writer.zoho.com/writer/officeapi/v1/document/bbda95e506ae523864b5684c1d7c9bc800011ecebf8d695ee0d3bbb50153431e80387d3019143b0438538e7915409a173afcfcb939d49392abd4f1432250af5c6176368926d8e702bbb2c9e29dd68cb6/save",
                "session_id": "bbda95e506ae523864b5684c1d7c9bc800011ecebf8d695ee0d3bbb50153431e80387d3019143b0438538e7915409a173afcfcb939d49392abd4f1432250af5c6176368926d8e702bbb2c9e29dd68cb6",
                "document_delete_url": "https://writer.zoho.com/writer/officeapi/v1/document/1349",
                "document_id": "1349",
                "document_url": "https://writer.zoho.com/writer/officeapi/v1/document/bbda95e506ae523864b5684c1d7c9bc800011ecebf8d695ee0d3bbb50153431e80387d3019143b0438538e7915409a173afcfcb939d49392abd4f1432250af5c6176368926d8e702bbb2c9e29dd68cb6/open"
            }
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

    createFileEvent = () =>{
        // this.modalVisibility();
        createFile().then(res=>{
            this.setState({createFileData: res.data},()=>{
                this.modalVisibility();
            });
        })
    };
    modalVisibility = () => {
        let {showModal} = this.state;
        this.setState({showModal: !showModal},()=>{
            console.log(this.state.showModal);
        })
    };

    render() {
        let {createFileData, showModal, userFiles} = this.state;
        return <>
            <Navbar/>
            <div id="wrapper">
                <Sidebar createFileEvent={this.createFileEvent}/>
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

