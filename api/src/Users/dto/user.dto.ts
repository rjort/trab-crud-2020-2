import { IsNotEmpty, IsEmail, IsNumberString, IsBoolean } from 'class-validator'

export class CreateUserDTO {
  @IsNotEmpty()
  readonly first_name: string
  @IsNotEmpty()
  readonly last_name: string
  @IsNotEmpty()
  @IsEmail()
  readonly email: string
  readonly genre: string
  @IsNotEmpty()
  readonly street: string
  @IsNotEmpty()
  readonly city: string
  @IsNotEmpty()
  readonly state: string
  @IsNotEmpty()
  @IsNumberString()
  readonly phone: string
  @IsBoolean()
  readonly payment: boolean
  readonly created_at: Date
}