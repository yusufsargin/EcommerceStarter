import { NextPageContext } from "next";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "ui/Category/Components/Card/CategoryCard";
import TopFilter from "ui/Category/Components/Filter/TopFilter";
import Layout from "ui/Layout/Layout";

export default function CategotyPage() {
  return (
    <Layout>
      <Container>
        <TopFilter />
        <CategoryCard />
      </Container>
    </Layout>
  );
}

CategotyPage.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;

  console.log(query);

  return { ...query };
};
