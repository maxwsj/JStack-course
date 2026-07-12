import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}
