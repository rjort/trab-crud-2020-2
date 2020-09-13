import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './interface/user.interface'
import { CreateUserDTO } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec()
  }

  async getUser(userID: String): Promise<any> {
    return await this.userModel.findById(userID).exec()
  }

  async newUser(createUserDTO: CreateUserDTO): Promise<User> {
    return await new this.userModel(createUserDTO).save()
  }

  async updateUser(userID: String, createUserDTO: CreateUserDTO): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userID, createUserDTO, { new: true })
  }

  async deleteUser(userID: String): Promise<any> {
    return await this.userModel.findByIdAndRemove(userID)
  }
}
