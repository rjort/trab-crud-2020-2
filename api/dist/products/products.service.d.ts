import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { CreateProductDTO } from './dto/product.dto';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getAllProducts(): Promise<Product[]>;
    getProduct(productId: String): Promise<any>;
    newProduct(createProductDTO: CreateProductDTO): Promise<Product>;
    updateProduct(productId: String, createProductDTO: CreateProductDTO): Promise<Product>;
    deleteProduct(productId: String): Promise<any>;
}
