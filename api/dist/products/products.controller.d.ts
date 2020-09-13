import { CreateProductDTO } from './dto/product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(res: any, createProductDTO: CreateProductDTO): Promise<any>;
    getAllProducts(res: any): Promise<any>;
    getProduct(res: any, productId: any): Promise<any>;
    updateProduct(res: any, productId: any, createProductDTO: CreateProductDTO): Promise<any>;
    deleteProduct(res: any, productId: any): Promise<any>;
}
