import React from "react";

export interface IFilterList {
  category?: string;
  price?: number;
  size?: number;
  sale?: boolean;
}

export interface ITopFilter {
  activeFilter?: IFilterList;
}

export default function TopFilter({ activeFilter }: ITopFilter) {
  return <div></div>;
}
