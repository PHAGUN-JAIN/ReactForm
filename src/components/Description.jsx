import React, { Component } from "react";
import sample from "./static/a.jpg";

const div_style = {
        width: "1200 px",
        textAlign: "center",
        margin: "10px auto"
}

const img_style = {
    maxWidth: "500px"
}
export default class Description extends Component {

    render(){
        return(
            <>
            <div style={div_style}>
                <img src={sample} alt="event-poster" style = {img_style} />
                <h3>
                    Event Name!
                </h3>
                <p>
                    Blah Blah <br />
                    Blah Blah <br />
                    Blah Blah <br />
                </p>
                <br />
                <br />
                <br />
            </div>
            </>
        );
    }
}