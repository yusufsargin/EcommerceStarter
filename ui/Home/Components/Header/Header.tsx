import { Button, Space } from "antd";
import { Col, Row } from "react-bootstrap";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  border-bottom: 1px solid #edeef2;
`;

export default function Header() {
  return (
    <NavContainer className='header p-3'>
      <Row>
        <Col>
          <a className='brand-logo'>
            <Title level={3}>Ecommerce</Title>
          </a>
        </Col>
        <Col>
          <div className='d-flex justify-content-between'>
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
        <Col>
          <Space size={"large"}>
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
          </Space>
        </Col>
      </Row>
    </NavContainer>
  );
}
