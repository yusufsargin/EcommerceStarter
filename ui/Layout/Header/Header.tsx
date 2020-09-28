import { Button } from "antd";
import { Col, Row } from "react-bootstrap";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import styled from "styled-components";

export const NavContainer = styled.div`
  border-bottom: 1px solid #edeef2;
`;

export default function Header() {
  return (
    <div
      className='header p-3'
      style={{
        borderBottom: "1px solid #edeef2",
      }}>
      <Row className='align-items-center'>
        <Col lg={2}>
          <a className='brand-logo' href='/'>
            <Title level={3}>Ecommerce</Title>
          </a>
        </Col>
        <Col lg={6}>
          <div className='d-flex justify-content-around'>
            <Text>
              <a>Furniture</a>
            </Text>
            <Text>
              <a>Furniture</a>
            </Text>
            <Text>
              <a>Furniture</a>
            </Text>
            <Text>
              <a>Furniture</a>
            </Text>
          </div>
        </Col>
        <Col lg={4}>
          <div className='d-flex justify-content-around align-items-center'>
            <a>Set On Ecommerce</a>
            <Button
              type='primary'
              style={{
                backgroundColor: "#ff5d0d",
                borderRadius: 20,
                borderColor: "#ff5d0d",
              }}>
              Sign In
            </Button>
            <a href='#'>
              <i className='fas fa-heart'></i>
            </a>
            <a href='#'>
              <i className='fas fa-shopping-bag'></i>
            </a>
            <a href='#'>
              <i className='fas fa-search'></i>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
