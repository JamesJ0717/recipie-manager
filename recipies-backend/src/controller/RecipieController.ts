import { Controller, Mutation, Query } from "vesper";
import { EntityManager } from "typeorm";
import { Recipie } from "../entity/Recipie";

@Controller()
export class RecipieController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  recipies() {
    return this.entityManager.find(Recipie);
  }

  @Query()
  recipiesGet({ id }) {
    return this.entityManager.findOne(Recipie, id);
  }

  @Mutation()
  recipiesSave(args) {
    console.log(args);
    const recipie = this.entityManager.create(Recipie, args);
    return this.entityManager.save(Recipie, recipie);
  }

  @Mutation()
  recipiesUpdate(args) {
    console.log(args);
    return this.entityManager.update(Recipie, args.id, args);
  }

  @Mutation()
  async recipiesDelete({ id }) {
    await this.entityManager.delete(Recipie, { id: id });
    return true;
  }
}
