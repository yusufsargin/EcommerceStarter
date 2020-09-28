import { Controller, Get, Param, ParseIntPipe, Render } from "@nestjs/common";
import { ProductPageIntialProp } from "../../pages/views/product/[id]";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Render("product/[id]")
  @Get("/:id")
  getProductPage(@Param("id", ParseIntPipe) id: number): ProductPageIntialProp {
    return this.productService.getProductPageData(id);
  }
}
