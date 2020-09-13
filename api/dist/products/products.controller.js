"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const product_dto_1 = require("./dto/product.dto");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async createProduct(res, createProductDTO) {
        const addProduct = await this.productsService.newProduct(createProductDTO);
        return res.status(common_1.HttpStatus.OK).json(addProduct);
    }
    async getAllProducts(res) {
        const allProducts = await this.productsService.getAllProducts();
        return res.status(common_1.HttpStatus.OK).json(allProducts);
    }
    async getProduct(res, productId) {
        const product = await this.productsService.getProduct(productId);
        if (!product)
            throw new common_1.NotFoundException('Produto Não Encontrado!');
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async updateProduct(res, productId, createProductDTO) {
        const updatedProduct = await this.productsService.updateProduct(productId, createProductDTO);
        if (!updatedProduct)
            throw new common_1.NotFoundException('Produto Não Encontrado!');
        return res.status(common_1.HttpStatus.OK).json(updatedProduct);
    }
    async deleteProduct(res, productId) {
        const deletedProduct = await this.productsService.deleteProduct(productId);
        if (!deletedProduct)
            throw new common_1.NotFoundException('Produto Não Encontrado!');
        return res.status(common_1.HttpStatus.OK).json({ message: "Produto Deletado com Sucesso!!!" });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    common_1.Get('/:productId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
__decorate([
    common_1.Put('/:productId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    common_1.Delete('/:productId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = __decorate([
    common_1.Controller('api/v1/products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map