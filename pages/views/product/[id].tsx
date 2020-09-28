import { Breadcrumb, Select } from "antd";
import { NextPageContext } from "next";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import StyledButton from "ui/Home/Components/Buttons/StyledButton";
import Layout from "ui/Layout/Layout";
import ImageSlider from "ui/Product/Components/ImageSlider";

export const BreadCrumbContainer = styled.div`
  & ul {
    list-style: none;
    padding: 0;
  }
  & ul li {
    display: inline-block;
    padding-left: 0.5rem;
  }
`;

export interface ICategoryItem {
  category: string;
  href: string;
}

export interface ProductPageIntialProp {
  id: number;
  breadcrumb: ICategoryItem[];
  productName: string;
  description?: string;
  price: number;
  stars?: string;
}

export default function ProductPage({ id, productName, description, stars, price, breadcrumb }: ProductPageIntialProp) {
  return (
    <Layout>
      <Container className='p-5'>
        {breadcrumb && (
          <Breadcrumb className='py-2'>
            <Breadcrumb.Item>
              <a href='/'>Home</a>
            </Breadcrumb.Item>
            {breadcrumb.map((category: ICategoryItem, index: number) => {
              return (
                <Breadcrumb.Item key={index}>
                  <a href={category.href}>{category.category}</a>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        )}

        <Row>
          <Col className='product-image-container '>
            <ImageSlider />
          </Col>
          <Col className='product-info-container mx-2  align-self-center text-right'>
            {stars && <p className='product-stars'>{stars}</p>}
            <h2 className='text-right'>{productName}</h2>
            {description && <p className='description text-wrap'>{description}</p>}
            <Row className='variants justify-content-end'>
              <Col className='colors' xs={12}>
                <Select defaultValue='Color' style={{ minWidth: 80 }}>
                  <Select.Option value='red'>Red</Select.Option>
                </Select>
              </Col>
            </Row>
            <h5 className='py-3'>
              Product Price: <span className='value text-success'>{price}$</span>
            </h5>
            <div className='d-flex justify-content-end'>
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
