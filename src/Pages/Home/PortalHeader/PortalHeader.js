import React from "react";
import { Row, Col } from "react-bootstrap";
import imge from '../../../Images/portalHeader/portalHeader.png';
import imge2 from '../../../Images/portalHeader/points-icon-3.jpg';

const PortalHeader = () => {
  return (
      <div style={{fontFamily: "Arial", margin: "40px 20px 0px 20px"}}>
      <Row>
        <Col xs={6} md={3}>
          <div style={{display: "flex", alignItems: "center", textAlign: "center"}}>
            <div>
                <img style={{width: 300, height: 220}} src={imge} alt=""/>
            </div>
            <div style={{marginLeft: -90}}>
                <h1 style={{fontSize: 20}}>Justin Danko <span style={{backgroundColor: ""}}>$42.5</span></h1>
                <h3 style={{fontSize: 16}}>United Kingdom</h3>
                <div style={{display: "flex"}}>
                    <img style={{width: 20, height: 25, marginRight: 10}} src={imge2} alt=""/>
                    <h5 style={{fontSize: 15}}>268 points</h5>
               </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={3}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={3}>
          xs=6 md=4
        </Col>
      </Row>
      </div>
  );
};

export default PortalHeader;
