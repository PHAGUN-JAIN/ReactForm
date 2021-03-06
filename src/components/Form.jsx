import React, {Component} from "react";
const input_style = {
    width: "40vw",
    lineHeight: "2rem",
    border: "1px solid purple",
    borderRadius: "4px"
}
const btn_style = {
    width: "12rem",
    padding: "1rem",
    borderRadius:"5px",
    backgroundColor: "purple",
    color: "#ffffff",
    fontWeight: "bold"
}
const div_style = {
    width:"42vw",
    margin: "0 auto",
    padding:"1.2rem",
    border: "1px solid black",
    borderRadius: "15px",
    boxShadow: "5px 6px rgb(43, 114, 221)",
    zIndex: "9px"
}
export default class Form extends Component {
    render(){
        return(
            <>
            <div style={div_style}>
                <h3>Registr Now!</h3> <br />
            <div >
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

            <button type="submit" style={btn_style}>
                SUBMIT
            </button>
            </div>
            </div>
            </>
        );
    }
}