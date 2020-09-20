import { Card, Col, Row, Space } from "antd";
import React from "react";
import styled from "styled-components";
import ProductCard from "../Cards/ProductCard";

interface CatalogItem {
  img?: string | any;
  title?: string;
  price?: number;
  originalPrice?: number;
  isSale?: boolean;
  content?: string;
  hasButton?: boolean;
  href?: string;
}

interface CatalogProp {
  header: string;
  catalogs: CatalogItem[];
  size?: string;
}

const CatalogContainer = styled.div`
  overflow-x: auto;
`;

export default function MainCatalog({ catalogs, header, size }: CatalogProp) {
  return (
    <div className='container'>
      <h5
        className='px-2 pt-5'
        style={{
          fontSize: 32,
        }}>
        {header}
      </h5>
      <CatalogContainer className='d-flex mb-2'>
        {catalogs?.map((item: CatalogItem, index: number) => {
          return (
            <ProductCard
              title={item.title}
              img={item.img}
              content={item.content}
              price={item.price}
              originalPrice={item.originalPrice}
              href={item.href}
            />
          );
        })}
      </CatalogContainer>
    </div>
  );
}
