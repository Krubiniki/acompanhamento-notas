import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    public id:string

    @Column({type:'varchar', length:10})
    public type:string

    @Column({type:'varchar', length:50})
    public nome:string
}

export interface userInterface{
    user_id?:string,
    type?:string,
    user_name?:string
}