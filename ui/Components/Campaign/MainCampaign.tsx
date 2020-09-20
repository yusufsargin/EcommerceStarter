import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import StyledButton from "../Buttons/StyledButton";

const CampaignContainer = styled.div`
  padding: 0 10rem;
`;

export default function MainCampaign(props: any) {
  const { reverse } = props;
  return (
    <div className={`d-flex ${reverse && "flex-row-reverse"} justify-content-between align-items-center bg-secondary`}>
      <CampaignContainer>
        <h3>Sell online with Furnith</h3>
        <p>TEst test test</p>
        <StyledButton color='#ff5d0d' roundSize={10} textColor='white'>
          Sell on Furniture
        </StyledButton>
      </CampaignContainer>
      <img width='50%' src={require("../../../public/assets/furniture.jpg")} alt='Furniture' />
    </div>
  );
}
