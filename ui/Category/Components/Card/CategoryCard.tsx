import React from "react";

export interface ICategoryCard {
  title: string;
  price: number;
  originalPrice?: number;
  stars?: number;
  description?: string;
  href: string;
  img: string | any;
  hasSale?: boolean;
}

export default function CategoryCard() {
  return <div></div>;
}
