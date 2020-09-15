import { IsNotEmpty, IsPositive, IsNumber } from 'class-validator'

export class CreateProductDTO {
  @IsNotEmpty()
  readonly name: string
  @IsNotEmpty()
  readonly description: string
  @IsNotEmpty()
  readonly category: string
  @IsPositive()
  @IsNumber()
  readonly price: number
  @IsNotEmpty()
  readonly provider: string
  @IsPositive()
  @IsNumber()
  readonly amount: number
  @IsPositive()
  @IsNumber()
  readonly barCode: number
  readonly created_at: Date
}