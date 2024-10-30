import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import logo from "../Assesst/Images/image_logo.png";
import linkedin from "../Assesst/Images/linkedin.png";
import facebook from "../Assesst/Images/facebook.png";
import twitter from "../Assesst/Images/twitter.png";
import instagram from "../Assesst/Images/instagram.png";

const footer =()=>{
    return (
        <footer className="footer_bg mt-5">
            <Container>
                <div className="divider"></div>
                <div className="p-2">
            <Row>
                <Col md={3} className="mt-2">
                <img src={logo} alt="logo" className="footer_logo"></img>
                <p className="footer_text">© R Singhania </p>
                </Col>
                <Col md={2} className="mt-2">
                <h3 className="footer_h">Company</h3>
                <ul className="vertical-list">
                    <li className="footer_li">About</li>
                    <li className="footer_li">FAQ</li>
                </ul>
                </Col>
                <Col md={2} className="mt-2">
                <h3 className="footer_h">Terms</h3>
                <ul className="vertical-list">
                    <li className="footer_li">Data Privacy</li>
                    <li className="footer_li">Terms</li>
                    <li className="footer_li">Accessibility</li>
                </ul>
                </Col>
                <Col md={2} className="mt-2">
                <h3 className="footer_h">Related</h3>
                <ul className="vertical-list">
                    <li className="footer_li">Find Buyer</li>
                    <li className="footer_li">Feedback</li>
                </ul>
                </Col>
                <Col md={3}>
                <div className="social_row">
                    <li><img src={linkedin} alt="logo" className="social_icon"></img></li>
                    <li><img src={twitter} alt="logo" className="social_icon"></img></li>
                    <li><img src={facebook} alt="logo" className="social_icon"></img></li>
                    <li><img src={instagram} alt="logo" className="social_icon"></img></li>
                </div>
                </Col>
            </Row>
            
            </div>
            <div className="divider mt-3"></div>
            </Container>
           
            
        </footer>

    );
}
export default footer;