import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDTO } from './dto/user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<User[]>;
    getUser(userID: any): Promise<any>;
    newUser(createUserDTO: CreateUserDTO): Promise<User>;
    updateUser(userID: any, createUserDTO: CreateUserDTO): Promise<User>;
    deleteUser(userID: any): Promise<any>;
}
