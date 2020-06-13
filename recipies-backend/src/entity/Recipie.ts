import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Recipie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  recipie: string;
}
