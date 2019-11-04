import { Modal } from "react-bootstrap";
import React from "react";
import "./index.css";

export default class BootModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: this.props.showModal
        };

    }
    render() {
        console.log(this.props);
        return (
            <Modal
                 show={this.state.show}
                 onHide={this.props.modalVisibility}
                 size="lg"
                 dialogClassName="modal-90w"
                 keyboard={false}
                 backdrop={`static`} {...this.props}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
            </Modal>
        )
    }
}
