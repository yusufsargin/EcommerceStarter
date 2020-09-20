import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import Next from "next";
import { AppController } from "./app.controller";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== "production" })),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
