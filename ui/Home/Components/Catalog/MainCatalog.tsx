import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import ProductCard from "../Cards/ProductCard";

export interface CatalogItem {
  img?: string | any;
  title?: string;
  price?: number;
  originalPrice?: number;
  isSale?: boolean;
  content?: string;
  hasButton?: boolean;
  href?: string;
}

export interface CatalogProp {
  header: string;
  catalogs: CatalogItem[];
  size?: string;
}

const CatalogContainer = styled.div`
  overflow-x: auto;
`;

export default function MainCatalog({ catalogs, header, size }: CatalogProp) {
  return (
    <Container>
      <h5
        className='px-2 pt-5'
        style={{
          fontSize: 32,
        }}>
        {header}
      </h5>
      <Row className='mb-2'>
        {catalogs?.map((item: CatalogItem, index: number) => {
          return (
            <Col key={index}>
              <ProductCard
                size={size}
                title={item.title}
                img={item.img}
                content={item.content}
                price={item.price}
                originalPrice={item.originalPrice}
                href={item.href}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
