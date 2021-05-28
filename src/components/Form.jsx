import React, {Component} from "react";
const input_style = {
    width: "30rem",
    lineHeight: "1.6rem"
}
export default class Form extends Component {
    render(){
        return(
            <>
            <div>
            <label htmlFor="name">First name:</label> <br />
            <input id="name" type="text" style={input_style}/><br /><br />
            <label htmlFor="lastname">Last Name:</label> <br />
            <input id="lasname" type="text" style={input_style} />
            <br />
            <br />
            <label htmlFor="branch" >BRANCH:</label> <br />
            <input id="branch" type="text" style={input_style}/>
            <br />
            <br />
            <label htmlFor="sap">SAP Id:</label> <br />
            <input id="sap" type="text" style={input_style}/>
            <br />
            <br />
            <label htmlFor="email">Email Id:</label> <br />
            <input id="email" type="email"style={input_style} />
            <br />
            <br />
            <label htmlFor="contact">Contact:</label> <br />
            <input id="contact" type="Number" style={input_style} />
            <br />
            <br />
            </div>
            </>
        );
    }
}