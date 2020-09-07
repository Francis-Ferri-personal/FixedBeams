import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("Factory")
export class FactoryEntity {
    @PrimaryGeneratedColumn({
        unsigned: true,
        comment: "Identifier",
        name: "idFactory"
    })
    id: number;

    @Column({
        name: "name",
        type: "varchar",
        length: 45,
        unique: true,
        nullable: false
    })
    name: string;

    @Column({
        name: "description",
        type: "varchar",
        length: 45,
        nullable: false
    })
    description: string;

    // TODO: products
}