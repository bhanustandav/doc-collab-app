import {Modal} from "react-bootstrap";
import React from "react";

class BootModal extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <Modal show={this.props.showModal}
                       onHide={this.modalVisibility}
                       size="lg"
                       dialogClassName="modal-90w"
                       keyboard={false}
                       backdrop={`static`}
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
export default BootModal;
