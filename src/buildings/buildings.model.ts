import { Column, DataType, Model, Table } from "sequelize-typescript";
import { BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { ApiProperty } from "@nestjs/swagger";

interface BuildingCreationAttrs {
    name: string;
    dhs: string;
    tiketDhs: string;
    yield: string;
    daysLeft: string;
    soldPercent: string;
    img: string;
}

@Table({tableName: 'buildings'})
export class Building extends Model<Building, BuildingCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique ID'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number;
    @ApiProperty({example: 'Cool name', description: 'Building name'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;
    @ApiProperty({example: '80000', description: 'Dhs'})
    @Column({type: DataType.STRING, allowNull: false})
    dhs: string;
    @ApiProperty({example: '60000', description: 'Tiket Dhs'})
    @Column({type: DataType.STRING, allowNull: false})
    tiketDhs: string;
    @ApiProperty({example: '9.25%', description: 'Building yield'})
    @Column({type: DataType.STRING, allowNull: false})
    yield: string;
    @ApiProperty({example: '150', description: 'Days left'})
    @Column({type: DataType.STRING, allowNull: false})
    daysLeft: string;
    @ApiProperty({example: '75%', description: 'Sold percent'})
    @Column({type: DataType.STRING, allowNull: false})
    soldPercent: string
    @ApiProperty({example: 'img.jpg', description: 'Building image'})
    @Column({type: DataType.STRING, allowNull: false})
    img: string
}