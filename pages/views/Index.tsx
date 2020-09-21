import * as React from "react";
import { NextPage, NextPageContext } from "next";
import Header from "../../ui/Components/Header/Header";
import MainSlider from "ui/Components/MainSlider/MainSlider";
import MainCatalog from "ui/Components/Catalog/MainCatalog";
import ProductCard from "ui/Components/Cards/ProductCard";
import Furniture from "../../ui/Public/assets/furniture.jpg";
import MainCampaign from "../../ui/Components/Campaign/MainCampaign";
import LastViewedList from "ui/Components/Campaign/LastViewedList";

interface Props {
  query: { name?: string };
}

const Index: NextPage<Props> = ({ query }) => {
  return (
    <div>
      <Header />
      <MainSlider
        slider={[
          {
            title: "Yusuf",
            description: "TEST",
            href: "#",
          },
          {
            title: "Yusuf",
            description: "TEST",
            href: "#",
          },
        ]}
      />
      <MainCatalog
        catalogs={[
          {
            title: "Reasporation",
            img: require("../../public/assets/furniture.jpg"),
            price: 100,
            originalPrice: 200,
            href: "#",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste doloremque aperiam neque harum accusamus vel! Quidem dolore harum repellendus ipsam eius dicta perferendis eligendi ex non dolorum esse odio voluptate ab blanditiis amet rem, veritatis aliquam laudantium. Earum, neque?",
          },
          {
            title: "Reasporation",
            img: require("../../public/assets/furniture.jpg"),
            price: 100,
            originalPrice: 200,
            href: "#",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste doloremque aperiam neque harum accusamus vel! Quidem dolore harum repellendus ipsam eius dicta perferendis eligendi ex non dolorum esse odio voluptate ab blanditiis amet rem, veritatis aliquam laudantium. Earum, neque?",
          },
          {
            title: "Reasporation",
            img: require("../../public/assets/furniture.jpg"),
            price: 100,
            originalPrice: 200,
            href: "#",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste doloremque aperiam neque harum accusamus vel! Quidem dolore harum repellendus ipsam eius dicta perferendis eligendi ex non dolorum esse odio voluptate ab blanditiis amet rem, veritatis aliquam laudantium. Earum, neque?",
          },
        ]}
        header='Popular'
      />

      <MainCatalog
        header='Catalog'
        size='small'
        catalogs={[
          {
            content: "Sofa",
            img: require("../../public/assets/furniture.jpg"),
          },
          {
            content: "Sofa",
            img: require("../../public/assets/furniture.jpg"),
          },
          {
            content: "Sofa",
            img: require("../../public/assets/furniture.jpg"),
          },
          {
            content: "Sofa",
            img: require("../../public/assets/furniture.jpg"),
          },
        ]}
      />

      <MainCampaign />
      <LastViewedList
        header='Last Viewed'
        catalogs={[
          {
            title: "test",
            img: require("../../public/assets/furniture.jpg"),
            content: "test",
            price: 200,
            href: "#",
          },
        ]}
      />
      <MainCampaign reverse />
    </div>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  return { query };
};

export default Index;
