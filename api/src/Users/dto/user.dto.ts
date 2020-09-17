import { IsNotEmpty } from 'class-validator'

export class CreateUserDTO {
  @IsNotEmpty()
  readonly first_name: string
  @IsNotEmpty()
  readonly last_name: string
  @IsNotEmpty()
  readonly email: string
  @IsNotEmpty()
  readonly street: string
  @IsNotEmpty()
  readonly city: string
  @IsNotEmpty()
  readonly state: string
  @IsNotEmpty()
  readonly phone: string
  @IsNotEmpty()
  readonly payment: boolean
  readonly created_at: Date
}