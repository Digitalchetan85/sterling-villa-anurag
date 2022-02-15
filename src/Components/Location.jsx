import React from "react";
import { Col, Container, Ratio, Row } from "react-bootstrap";
// import Image1 from "../images/location.png";

const Location = () => {
  return (
    <div className="py-3 py-md-5" id="location">
      <Container>
        <Row>
          <h2 className="py-3 text-primary text-center">Location</h2>
          {/* <Col md={6} className="align-self-center">
            <Image src={Image1} alt="" className="img-fluid" />
          </Col> */}
          <Col md={12} className="align-self-center">
            <div>
              <Ratio aspectRatio="16x9">
                <embed type="image/svg+xml" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.768631356552!2d77.75974!3d13.011181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1308a2b4e2200eb!2sSterling%20Villa%20Grande!5e0!3m2!1sen!2sin!4v1644065488489!5m2!1sen!2sin" />
              </Ratio>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
