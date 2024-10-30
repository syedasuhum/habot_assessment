import React from "react";
import { Container, Button,Row,Col } from "react-bootstrap";
import { FaUserClock } from "react-icons/fa";
import { MdOutlineEditNote,  MdNoteAdd } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";



const suppliers=()=>{
    return(
     <>
        <div className="suppliers_bg mt-5">
            <Container className="supp">
                <h1 className="suppliers_h mt-2">Let Suppliers <span className="supp_line">Find You</span></h1>
                <Button className="verify_btn ms-auto">Get Verification</Button>
            </Container>
        </div>
        <Container className="mt-5">
            <h1 className="work_h">How it works?</h1>
            <p className="work_para">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, 
                and build successful business relationships, sharing valuable feedback.</p>

                <Row className="mt-5" >
                    <Col md={4} className="g-0">
                    <div className="suppliers_bg row_text">
                    <FaUserClock  size={90}/>
                    <p className="icon_para mt-2"> Select Your Role and Sign Up</p>
                    </div>
                    </Col>
                    <Col md={4}  className="g-0">
                    <div className="row_text">
                    <GrNotes  size={90}/>
                    <p className="icon_para mt-2"> Buyers Post Your Requirements</p>
                    </div>
                    </Col>
                    <Col md={4}  className="g-0">
                    <div className="suppliers_bg  row_text">
                    < MdNoteAdd  size={90}/>
                    <p className="icon_para mt-2">  Review, Select, and Contact Us</p>
                    </div>
                    </Col>
                </Row>

                <Row className="" >
                <Col md={4}  className="g-0">
                    <div className="row_text">
                    <MdOutlineEditNote   size={90}/>
                    <p className="icon_para mt-2"> Suppliers Complete your profile and get notified for opportunities</p>
                    </div>
                    </Col>
                    <Col md={4}  className="g-0">
                    <div className="suppliers_bg  row_text">
                    <GiNotebook   size={90}/>
                    <p className="icon_para mt-2">Contact to Buyers and Share your Quote for the service</p>
                    </div>
                    </Col>
                    
                    <Col md={4}  className="g-0">
                    <div className="row_text">
                    <FaHandshakeSimple  size={90}/>
                    <p className="icon_para mt-2">Both the Parties can Connect and Make Business Leave a Feedback</p>
                    </div>
                    </Col>
                </Row>

         </Container>
     </>

    );
}
export default suppliers;
