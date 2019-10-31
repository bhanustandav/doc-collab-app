import React from 'react'
// import {createFile} from '../../api/file'
import "./index.css";

export default class FileList extends React.Component {

    constructor(props) {
        super(props);
        this.state={}
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
    openFile = (file) => {
        console.log(file);
        this.props.openFileEvent(file);
    };

    renderFiles = () => {
        const {userFiles} = this.props;

        return <div className="table-responsive">
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
                {userFiles.map((item)=>{
                    return (
                        <tr key={`tr-${Math.random()}`}>
                            <td><span className={`file-link`} onClick={name=>this.openFile(`${item.name}`)}>{item.name}</span></td>
                            <td> {item.type}</td>
                            <td> {item.createdOn}</td>
                            <td> {item.modifiedOn}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    };

    render() {
        return <>
            {this.renderFiles()}
        </>
    }

}
