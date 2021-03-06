import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
