import { Controller, Get, Param, ParseIntPipe, Render } from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Render("category/[id]")
  @Get("/:id")
  getCategoryPage(@Param("id", ParseIntPipe) id: number): any {
    return "";
  }
}
