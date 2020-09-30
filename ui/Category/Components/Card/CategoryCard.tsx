import React from "react";
import styled from "styled-components";

export interface ICategoryCard {
  title: string;
  price: number;
  originalPrice?: number;
  stars?: number;
  description?: string;
  href: string;
  img?: string | any;
  hasSale?: boolean;
}

const CardContainer = styled.div`
  max-width: 250px;
  padding: 0.5rem;
  margin: 1rem;
  box-sizing: border-box;
  box-shadow: 1px 2px 4px black;
  border-radius: 5px;

  & h5 {
    margin: 0;
    padding: 0;
  }
  & p {
    margin: 0;
    padding: 0;
  }
`;

const SaleText = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  border-radius: 5px;
  background-color: #ff5d0d;
  padding: 0 1rem;
  color: white;
`;

const ImageContainer = styled.div`
  position: relative;
`;

export default function CategoryCard() {
  return (
    <CardContainer>
      <ImageContainer className='image-container'>
        <SaleText>Sale</SaleText>
        <img width='100%' src={require("../../../../public/assets/furniture.jpg")} alt='Furniture' />
      </ImageContainer>
      <h5>Title</h5>
      <p>Test</p>
      <p>100$</p>
      <p>Stars</p>
    </CardContainer>
  );
}
