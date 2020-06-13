import { bootstrap } from "vesper";
import { RecipieController } from "./controller/RecipieController";
import { Recipie } from "./entity/Recipie";

bootstrap({
  port: 4000,
  controllers: [RecipieController],
  entities: [Recipie],
  schemas: [__dirname + "/schema/**/*.graphql"],
  cors: true,
})
  .then(() => {
    console.log("Running at http://localhost:4000");
  })
  .catch((error) => {
    console.error(error.stack ? error.stack : error);
  });
