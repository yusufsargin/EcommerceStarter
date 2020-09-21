import { Button, Col, Row } from "antd";
import { type } from "os";
import React from "react";
import styled from "styled-components";
import StyledButton from "../Buttons/StyledButton";

export interface ProductCardProp {
  title?: string;
  img?: string | any;
  content?: string;
  size?: string;
  price?: number;
  originalPrice?: number;
  href?: string;
}

const ProductCardImageContainer = styled.img`
  width: 100%;
  border-radius: 10px;
  max-height: 300px;
  object-fit: cover;
`;

export default function ProductCard({ title, img, content, size, price, originalPrice, href }: ProductCardProp) {
  const ProductCardContainer = styled.div`
    box-sizing: border-box;
    min-width: 100px;
    max-width: ${size === "small" ? "100px" : "350px"};
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem;
    border: 1px solid #edeef2;
    box-shadow: 1px 2px 3px #edeef2;
    margin: 1rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),
        0 5px 12px 4px rgba(0, 0, 0, 0.09);
    }
  `;

  return (
    <ProductCardContainer className='productCard'>
      {title && <h5 className='text-center py-1'>{title}</h5>}
      {img && <ProductCardImageContainer src={img} alt={title} />}
      {content && <p className='pt-3 text-muted'>{content} </p>}
      {price && (
        <div className='d-flex justify-content-end'>
          <h5 className='pr-2 font-weight-bold'>{price}</h5>
          {originalPrice && (
            <p
              className='text-muted'
              style={{
                textDecoration: "line-through",
              }}>
              {originalPrice}
            </p>
          )}
        </div>
      )}
      {href && (
        <Row justify='space-around'>
          <Col>
            <StyledButton>
              <a href={href}>View</a>
            </StyledButton>
          </Col>
          <Col>
            <StyledButton color='#ff5d0d' roundSize={10} textColor='white'>
              <a href={href}>Shop Now</a>
            </StyledButton>
          </Col>
        </Row>
      )}
    </ProductCardContainer>
  );
}
