import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className='d-flex bg-dark text-light'>
      <Container>
        <Row className='py-5 footer-container'>
          <Col className='contactUs'>
            <p className='footerTitle'>Contant us</p>
            <p className='footerText'>+90 553 681 0703</p>
            <p className='footerText'>Yusuf Sargın</p>
          </Col>
          <Col className='about ul'>
            <p className='footerTitle'>About</p>
            <ul className='footerList'>
              <li>
                <p className='footerText'>Careers</p>
              </li>
              <li>
                <p className='footerText'>Press</p>
              </li>
              <li>
                <p className='footerText'>Help Center</p>
              </li>
            </ul>
          </Col>
          <Col>
            <p className='footerTitle'>Sell</p>
            <ul className='footerList'>
              <li>
                <p className='footerText'>Sell</p>
              </li>
              <li>
                <p className='footerText'>Team</p>
              </li>
              <li>
                <p className='footerText'>Forum</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
