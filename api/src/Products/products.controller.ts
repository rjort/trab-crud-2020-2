import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CreateProductDTO} from './dto/product.dto'
import { ProductsService } from './products.service'

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const addProduct = await this.productsService.newProduct(createProductDTO)
    return res.status(HttpStatus.OK).json(addProduct)
  }

  @Get()
  async getAllProducts(@Res() res) {
    const allProducts = await this.productsService.getAllProducts()
    return res.status(HttpStatus.OK).json(allProducts) 
  }

  @Get('/:productId')
  async getProduct(@Res() res, @Param('productId') productId) {
    const product = await this.productsService.getProduct(productId)
    if(!product) throw new NotFoundException('Produto Não Encontrado!')
    return res.status(HttpStatus.OK).json(product)
  }

  @Put('/:productId')
  async updateProduct(@Res() res, @Param('productId') productId, @Body() createProductDTO: CreateProductDTO) {
    const updatedProduct = await this.productsService.updateProduct(productId, createProductDTO)
    if(!updatedProduct) throw new NotFoundException('Produto Não Encontrado!') 
    return res.status(HttpStatus.OK).json(updatedProduct)
  }

  @Delete('/:productId')
  async deleteProduct(@Res() res, @Param('productId') productId) {
    const deletedProduct = await this.productsService.deleteProduct(productId)
    if(!deletedProduct) throw new NotFoundException('Produto Não Encontrado!')
    return res.status(HttpStatus.OK).json({ message: "Produto Deletado com Sucesso!!!" })
  }
}
