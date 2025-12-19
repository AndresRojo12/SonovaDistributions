import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  readonly category: string[];

  @IsString()
  readonly musicPlatform: string[];
  
  @IsString()
  readonly yourSocials: string[];

  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
