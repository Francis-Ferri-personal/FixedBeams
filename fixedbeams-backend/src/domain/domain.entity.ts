import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("Domain")
export class DomainEntity {
    @PrimaryGeneratedColumn({
        unsigned: true,
        comment: "Identifier",
        name: "idDomain"
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

}