import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne } from "typeorm";
import { UserEntity } from "../users/users.entity";

@Entity('notas')
export class NotasEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    public id:string

    @Column({type:'float'})
    public nota:number

    @ManyToOne(()=> UserEntity, (user) => user.id)
    @JoinTable()
    public user_id:UserEntity
}

export interface notasInterface{
    user_id?:string,
    nota_id?:string,
    nota?:number,
    user_name?:string
}
