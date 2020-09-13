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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(res, createUserDTO) {
        const addUser = await this.usersService.newUser(createUserDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Usuario Criado com Sucesso!!!",
            addUser
        });
    }
    async getAllUsers(res) {
        const allUsers = await this.usersService.getAllUsers();
        return res.status(common_1.HttpStatus.OK).json(allUsers);
    }
    async getUser(res, userID) {
        const user = await this.usersService.getUser(userID);
        if (!user)
            throw new common_1.NotFoundException('Usuario Não Encontrado!');
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async updateUser(res, userID, createUserDTO) {
        const updatedUser = this.usersService.updateUser(userID, createUserDTO);
        if (!updatedUser)
            throw new common_1.NotFoundException('Usuario Não Encontrado!');
        return res.status(common_1.HttpStatus.OK).json({
            message: "Usuario Atualizado com Sucesso!!!",
            updatedUser
        });
    }
    async deleteUser(res, userID) {
        const deletedUser = this.usersService.deleteUser(userID);
        if (!deletedUser)
            throw new common_1.NotFoundException('Usuario Não Encontrado!');
        return res.status(common_1.HttpStatus.OK).json({
            message: "Usuario Deletado com Sucesso!!!",
            deletedUser
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Get('users'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get('user/:userId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Query('userID')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map