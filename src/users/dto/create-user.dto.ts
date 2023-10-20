import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'email@gmail.com', description: 'Email'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;
    @ApiProperty({example: 'password', description: 'Password'})
    @Length(6, 18, {message: 'Password must contain from 6 to 18 symbols'})
    readonly password: string;
}