import React from 'react'
import Filelist from '../fileList/index'

export default class ContentWrapper extends React.Component {

    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <div className="container-fluid">
                        <div className="mb-4">
                            <div className="card-body">
                                <Filelist/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}