import { Document } from 'mongoose'

export interface Product extends Document {
  readonly name: string,
  readonly description: string,
  readonly category: string,
  readonly price: number,
  readonly provider: string,
  readonly amount: number,
  readonly barCode: number,
  readonly created_at: Date
}