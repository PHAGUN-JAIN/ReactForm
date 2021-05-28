import React, {Component} from "react";
import logo from "./static/logo.png";
const img_style ={
    width: "12vw"
}
const div_style={
    padding: "1rem",
    marginTop: "1rem",
    textAlign: "center",
    backgroundColor: "#080808"
}
const socio_style={
    textDecoration: "none",
    color:"purple",
    padding: "0.9rem",
}
export default class Footer extends Component {
    render(){
        return(
            <>
            <div style={div_style}>
            <img src={logo} alt="UCD-LOGO" style={img_style} />
            <div style={div_style}>
                  <a  style={socio_style} href="https://www.facebook.com/upes.ucd/?__tn__=%2Cd%2CP-R&eid=ARBFna9ebE8caW_GClw60yI_cWrgbX0FbRATJ6uHbSaLO72G81uK59hgtM_l9IfeKPZupM1qf5UcHt4u"> <i class="fab fa-facebook-f "></i> </a>
                  <a  style={socio_style} href="https://www.instagram.com/ucd.upes/?hl=en"> <i class="fab fa-instagram "></i></a>
                  <a  style={socio_style} href="https://www.linkedin.com/in/upesucd/"> <i class="fab fa-linkedin-in  "></i> </a>
                  <a  style={socio_style} href="https://twitter.com/ucd_upes"> <i class="fab fa-twitter"></i></a>
                </div>
            </div>
          
            </>
        );
    }
}