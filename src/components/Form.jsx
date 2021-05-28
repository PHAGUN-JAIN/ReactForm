import React, {Component} from "react";

export default class Form extends Component {
    render(){
        return(
            <>
            <div>
            <label htmlFor="name">NAME:</label> <br />
            <input id="name" type="text" />
            <br />
            <br />
            <label htmlFor="branch">BRANCH:</label> <br />
            <input id="branch" type="text" />
            <br />
            <br />
            <label htmlFor="sap">SAP ID:</label> <br />
            <input id="sap" type="text" />
            <br />
            <br />
            </div>
            </>
        );
    }
}