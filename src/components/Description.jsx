import React, { Component } from "react";
import sample from "./static/a.jpg";

const div_style = {
        width: "1200 px",
        textAlign: "center",
        margin: "0 auto",
        padding: "2rem",
        borderRadius: "20px"
}

const img_style = {
    maxWidth: "70vw"
}
export default class Description extends Component {

    render(){
        return(
            <>
             <div style={div_style}>
                <img src={sample} alt="event-poster" style = {img_style} />
                <h2>
                    Event Name!
                </h2>
                <p>
                    Blah Blah <br />
                    Blah Blah <br />
                    Blah Blah <br />
                </p>
             </div>
            </>
        );
    }
}