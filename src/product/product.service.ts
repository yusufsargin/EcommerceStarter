import { Injectable } from "@nestjs/common";
import { ProductPageIntialProp } from "../../pages/views/product/[id]";

@Injectable()
export class ProductService {
  getProductPageData(id: number): ProductPageIntialProp {
    return {
      id: id,
      breadcrumb: [
        {
          category: "Furniture",
          href: "#",
        },
        {
          category: "Home Furnitre",
          href: "#",
        },
      ],
      price: 100,
      productName: "First Product Test",
      description: "Lorem",
    };
  }
}
