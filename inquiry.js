import * as React from "react";
import axios from "axios";

export class Inquiry extends React.Component {
    state = {
        emailInput: "placeholder@domain.io",
    };

    handleInputChange = e => {
        this.setState({
            emailInput: e.target.value,
        });
    };

    postToZohoAPI = () => {
        axios
            .post("/.netlify/functions/zoho", {
                authtoken: process.env.GATSBY_ZOHO_AUTH,
                scope: "creatorapi",
                email: this.state.emailInput,
            })
            .then(resp => console.log(resp));
    };

    render() {
        return (
            <>
                <input
                    name="email"
                    value={this.state.emailInput}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.postToZohoAPI}>test Lambda</button>
            </>
        );
    }
}
