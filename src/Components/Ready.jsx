import React from "react";
import {  Container,Row, Col, Button,Tabs, Tab} from 'react-bootstrap';
import { HiArrowLongRight } from "react-icons/hi2";
import video from "../Assesst/Images/video.jpg";
import youtube from "../Assesst/Images/youtube.png";
import { FaCheckCircle } from "react-icons/fa";


const Ready =()=>{
    return(
        <div className="container mt-5">
            <Container>
                <Row>
                    <Col md={6}>
                    <h2 className="ready_h">Ready to dive into HABOT?</h2>
                    <p className="ready_p mt-3">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock
                         valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                         <Button className="search_btn" style={{alignItems:"flex-start"}}>Signup Today<HiArrowLongRight size={26} style={{marginLeft:"5px"}} />
                         </Button>
                    </Col>
                    <Col md={6}>
                    <Row className="p-5">
                    <Col md={6}>
                        <h4 className="ready_list">Abu Dhabi</h4>
                        <h4 className="ready_list">Sharjah & Ajman</h4>
                        <h4 className="ready_list">Ras AI Khaimah</h4>
                    </Col>
                    <Col md={6}>
                        <h4 className="ready_list">Dubai</h4>
                        <h4 className="ready_list">Fujairah</h4>
                        <h4 className="ready_list">Umm AI Quwain</h4>
                    </Col>
                    </Row>

                    </Col>
                </Row>

                <Row className=" video_page mt-5" style={{backgroundColor:"#072F57"}}>
                    <Col md={6} className=" image-container">
                    <img src={video}  alt="Background" className="background-image"/>
                    <img src={youtube} alt="Overlay" className="overlay-image"/>
                    </Col>

                    <Col md={6}>
                    <Tabs defaultActiveKey="Buyer" id="tab-example" className="mb-3">
                      <Tab eventKey="Buyer" title="Buyer">
                        <ul style={{listStyle:"none"}}>
                          <li className="d-flex"><FaCheckCircle  color="green" className="icon_color" /><p className="tab_list">Post your requirements.</p></li>
                          <li className="d-flex"><FaCheckCircle  color="green" className="icon_color" /><p className="tab_list">Sit back for multiple suppliers </p></li>
                          <li className="d-flex"><FaCheckCircle  color="green" className="icon_color" /><p className="tab_list">Choose among the suppliers </p></li>
                        </ul>
                      </Tab>
                     <Tab eventKey="Supplier" title="Suplier">
                     <ul style={{listStyle:"none"}}>
                          <li className="d-flex"><FaCheckCircle  color="green" className="icon_color" /><p className="tab_list">Post your requirements.</p></li>
                          <li className="d-flex"><FaCheckCircle  color="green" className="icon_color" /><p className="tab_list">Sit back for multiple suppliers </p></li>
                          <li className="d-flex"><FaCheckCircle  color="green" className="icon_color" /><p className="tab_list">Choose among the suppliers </p></li>
                        </ul>
                     </Tab>
        
                    </Tabs>

                    </Col>

                </Row>
            </Container>

        </div>
    );
}
export default  Ready;