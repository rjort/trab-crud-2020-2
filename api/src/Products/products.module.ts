import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}