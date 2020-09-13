import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './interface/user.interface'
import { CreateUserDTO } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec()
    return users
  }

  async getUser(userID): Promise<any> {
    const user = await this.userModel.find(userID).exec()
    return user
  }

  async newUser(createUserDTO: CreateUserDTO): Promise<User> {
    const addUser = await new this.userModel(createUserDTO)
    return addUser.save()
  }

  async updateUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userID, createUserDTO, { new: true })
    return updatedUser
  }

  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID)
    return deletedUser
  }
}
