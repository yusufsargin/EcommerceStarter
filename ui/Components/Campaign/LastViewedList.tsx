import React from "react";
import styled from "styled-components";
import ProductCard from "../Cards/ProductCard";
import { CatalogItem, CatalogProp } from "../Catalog/MainCatalog";

const ListContainer = styled.ul`
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  white-space: nowrap;
  margin: 1rem 3rem;

  & li {
    display: inline-block;
  }
`;

export default function LastViewedList({ header, catalogs }: CatalogProp) {
  return (
    <ListContainer>
      {header && (
        <h5
          className='px-2 pt-5'
          style={{
            fontSize: 32,
          }}>
          {header}
        </h5>
      )}
      {catalogs?.map((item: CatalogItem, index: number) => {
        return (
          <li key={index}>
            <ProductCard {...item} />
          </li>
        );
      })}
    </ListContainer>
  );
}
