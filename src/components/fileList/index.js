import React from 'react'

export default class FileList extends React.Component {

    renderFiles = () => {
        const {userFiles} = this.props

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

    }

    render() {
        return <>
            {this.renderFiles()}
        </>
    }

}