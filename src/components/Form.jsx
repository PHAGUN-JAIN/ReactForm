import React, {Component} from "react";

export default class Form extends Component {
    render(){
        return(
            <>
            <div>
            <label htmlFor="name">First name:</label> <br />
            <input id="name" type="text" /><br /><br />
            <label htmlFor="lastname">Last Name:</label> <br />
            <input id="lasname" type="text" />
            <br />
            <br />
            <label htmlFor="branch">BRANCH:</label> <br />
            <input id="branch" type="text" />
            <br />
            <br />
            <label htmlFor="sap">SAP Id:</label> <br />
            <input id="sap" type="text" />
            <br />
            <br />
            <label htmlFor="email">Email Id:</label> <br />
            <input id="email" type="email" />
            <br />
            <br />
            <label htmlFor="contact">Contact:</label> <br />
            <input id="contact" type="Number" />
            <br />
            <br />
            </div>
            </>
        );
    }
}