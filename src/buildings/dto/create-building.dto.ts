import { ApiProperty } from "@nestjs/swagger";

export class createBuildingDto {
    @ApiProperty({example: 'cool name', description: 'Building name'})
    readonly name: string;
    @ApiProperty({example: '80000', description: 'Dhs'})
    readonly dhs: string;
    @ApiProperty({example: '60000', description: 'Tiket Dhs'})
    readonly tiketDhs: string;
    @ApiProperty({example: '9.25%', description: 'Building yield'})
    readonly yield: string;
    @ApiProperty({example: '150', description: 'Days left'})
    readonly daysLeft: string;
    @ApiProperty({example: '75%', description: 'Sold percent'})
    readonly soldPercent: string;


}