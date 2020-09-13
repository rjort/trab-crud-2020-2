import { CreateUserDTO } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(res: any, createUserDTO: CreateUserDTO): Promise<any>;
    getAllUsers(res: any): Promise<any>;
    getUser(res: any, userID: any): Promise<any>;
    updateUser(res: any, userID: any, createUserDTO: CreateUserDTO): Promise<any>;
    deleteUser(res: any, userID: any): Promise<any>;
}
