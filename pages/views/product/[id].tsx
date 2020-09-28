import { Breadcrumb, Select } from "antd";
import { NextPageContext } from "next";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import BreadcrumbContainer from "ui/Category/Components/BreadcrumbContainer";
import StyledButton from "ui/Home/Components/Buttons/StyledButton";
import Layout from "ui/Layout/Layout";
import ImageSlider from "ui/Product/Components/ImageSlider";

export interface ICategoryItem {
  category: string;
  href: string;
}

export interface IVariantsOptions {
  color: string;
}

export interface ProductPageIntialProp {
  id: number;
  breadcrumb: ICategoryItem[];
  productName: string;
  description?: string;
  price: number;
  stars?: string;
  originalPrice?: number;
  variants?: IVariantsOptions[];
}

const PriceValuesContainer = styled.div`
  position: relative;
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 2.5rem;

  & span {
    font-weight: bold;
  }
`;

const OriginalPriceValue = styled.span`
  font-size: 15px;
  font-weight: bold;
  text-decoration: line-through;
  position: absolute;
  right: 0;
  top: 0;
`;

export default function ProductPage({
  id,
  productName,
  description,
  stars,
  price,
  breadcrumb,
  originalPrice,
  variants,
}: ProductPageIntialProp) {
  return (
    <Layout>
      <Container className='p-5'>
        <BreadcrumbContainer breadcrumb={breadcrumb} />
        <Row>
          <Col className='product-image-container '>
            <ImageSlider />
          </Col>
          <Col className='product-info-container mx-2  align-self-center text-left'>
            {stars && <p className='product-stars'>{stars}</p>}
            <h2>{productName}</h2>
            {description && <p className='description text-wrap'>{description}</p>}
            {variants && (
              <Row className='variants justify-content-end'>
                <Col className='colors' xs={12}>
                  <Select defaultValue='Color' style={{ minWidth: 80 }}>
                    {variants?.map((variant: IVariantsOptions, index: number) => {
                      return (
                        <Select.Option key={index} value={variant.color}>
                          {variant.color}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            )}
            <h5 className='py-3'>
              Price
              <PriceValuesContainer>
                <span className='value text-success'>{price}$</span>
                {originalPrice && <OriginalPriceValue className='text-muted'>{originalPrice}$</OriginalPriceValue>}
              </PriceValuesContainer>
            </h5>
            <div className='d-flex justify-content-start'>
              <div className='pr-2'>
                <StyledButton color='#ff5d0d' roundSize={10} textColor='white'>
                  Buy Now
                </StyledButton>
              </div>
              <div>
                <StyledButton roundSize={10}>Add To Cart</StyledButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

ProductPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;

  console.log(query);

  return { ...query };
};
