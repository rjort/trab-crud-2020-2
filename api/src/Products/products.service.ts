import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './interface/product.interface'
import { CreateProductDTO } from './dto/product.dto'

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.find().exec()
  }

  async getProduct(productId: String): Promise<any> {
    return await this.productModel.findById(productId).exec()
  }

  async newProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    return await new this.productModel(createProductDTO).save()
  }

  async updateProduct(productId: String, createProductDTO: CreateProductDTO): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(productId, createProductDTO, { new: true })
  }

  async deleteProduct(productId: String): Promise<any> {
    return await this.productModel.findByIdAndRemove(productId)
  }
}
