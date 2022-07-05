import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import imge from "../../../../Images/portalHeader/portalHeader.png";
import imge2 from "../../../../Images/portalHeader/points-icon-3.jpg";
import DonutChartOne from "../DonutChartOne/DonutChartOne";

const PortalHeader = () => {
  return (
    <Container style={{ fontFamily: "Arial", margin: "40px 20px 0px 20px" }}>
      <Row>
        <Col xs={6} md={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <img style={{ width: 300, height: 220 }} src={imge} alt="" />
            </div>
            <div style={{ marginLeft: -90 }}>
              <h1 style={{ fontSize: 20 }}>
                Justin Danko{" "}
                <span
                  style={{
                    backgroundColor: "#2B0F81",
                    color: "#ffff",
                    padding: "3px 10px",
                    borderRadius: 3,
                  }}
                >
                  $42.5
                </span>
              </h1>
              <h3 style={{ fontSize: 16, marginLeft: -50 }}>United Kingdom</h3>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: 20, height: 25, marginRight: 10 }}
                  src={imge2}
                  alt=""
                />
                <h5 style={{ fontSize: 15 }}>268 points</h5>
              </div>
            </div>
          </div>

          <div
            style={{ display: "grid", placeItems: "center", marginLeft: -110 }}
          >
            <h4 style={{ fontSize: 16 }}>Longest Study Session</h4>
            <h4 style={{ fontSize: 16, marginLeft: -56 }}>4 hours 26 min</h4>
            <hr style={{ width: 200, marginLeft: 30 }} />
          </div>
          <div
            style={{ display: "grid", placeItems: "center", marginLeft: -110 }}
          >
            <h4 style={{ fontSize: 16 }}>Longest Study Session</h4>
            <h4 style={{ fontSize: 16, marginLeft: -106 }}>12 days</h4>
          </div>
        </Col>

        <Col xs={6} md={2}>
         <div style={{textAlign: "center", AlignItems: "center"}}>
         <DonutChartOne></DonutChartOne>
         <h5>Completed</h5>
         <p>58 Completed</p>
         </div>
        </Col>
        <Col xs={6} md={2}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={2}>
          xs=6 md=4
        </Col>
      </Row>
    </Container>
  );
};

export default PortalHeader;
