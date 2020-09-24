import { Col, Row } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import StyledButton from "../Buttons/StyledButton";

const CampaignContainer = styled.div`
  padding: 2rem 2rem;
`;

export default function MainCampaign(props: any) {
  const { reverse } = props;
  return (
    <Row className={`d-flex ${reverse && "flex-row-reverse"} justify-content-between align-items-center bg-secondary`}>
      <Col xs={6}>
        <CampaignContainer>
          <h3>Sell online with Furnith</h3>
          <p>TEst test test</p>
          <StyledButton color='#ff5d0d' roundSize={10} textColor='white'>
            Sell on Furniture
          </StyledButton>
        </CampaignContainer>
      </Col>
      <Col xs={6} className='p-0'>
        <img width='100%' src={require("../../../../public/assets/furniture.jpg")} alt='Furniture' />
      </Col>
    </Row>
  );
}
