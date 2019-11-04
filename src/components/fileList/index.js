import React from 'react'
import "./index.css";
import moment from "moment";
import BootModal from "../bootModal";

export default class FileList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            currentFile: {}
        }
    }

    componentDidMount() {
        // createFile() .then(function (response) {
        //     //handle success
        //     console.log(response);
        // })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });
    }

    formatDate = (date) => {
        return moment(date).format('llll')
    };

    editFile = (file) => {
        console.log(file);
        this.setState({currentFile:file},()=>{
            this.props.editFileEvent(file);
        });
    };

    modalVisibility = () => {
        let {showModal} = this.state;
        this.setState({showModal: !showModal},()=>{
            // console.log(this.state.showModal);
        })
    };

    renderFiles = () => {
        const {userFiles} = this.props;

        return <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                <tr>
                    <th> Name</th>
                    <th> Type</th>
                    <th> Created On</th>
                    <th> Modified On</th>
                </tr>
                </thead>

                <tbody>
                {userFiles.map((item)=>{
                    return (
                        <tr key={`tr-${Math.random()}`}>
                            <td><span className={`file-link`} onClick={name=>this.editFile(item)}>{item.documentName}</span></td>
                            <td> {item.documentFormat}</td>
                            <td> {this.formatDate(item.createdAt)}</td>
                            <td> {this.formatDate(item.createdAt)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    };

    render() {
        const {showModal, currentFile} = this.state;
        return <>
            {this.renderFiles()}
        </>
    }

}
