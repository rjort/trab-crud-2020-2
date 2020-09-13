import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CreateUserDTO} from './dto/user.dto'
import { UsersService } from './users.service'

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const addUser = await this.usersService.newUser(createUserDTO)
    return res.status(HttpStatus.OK).json(addUser)
  }

  @Get()
  async getAllUsers(@Res() res) {
    const allUsers = await this.usersService.getAllUsers()
    return res.status(HttpStatus.OK).json(allUsers) 
  }

  @Get('/:userId')
  async getUser(@Res() res, @Param('userId') userId) {
    const user = await this.usersService.getUser(userId)
    if(!user) throw new NotFoundException('Usuario Não Encontrado!')
    return res.status(HttpStatus.OK).json(user)
  }

  @Put('/:userId')
  async updateUser(@Res() res, @Param('userId') userId, @Body() createUserDTO: CreateUserDTO) {
    const updatedUser = await this.usersService.updateUser(userId, createUserDTO)
    if(!updatedUser) throw new NotFoundException('Usuario Não Encontrado!') 
    return res.status(HttpStatus.OK).json(updatedUser)
  }

  @Delete('/:userId')
  async deleteUser(@Res() res, @Param('userId') userId) {
    const deletedUser = await this.usersService.deleteUser(userId)
    if(!deletedUser) throw new NotFoundException('Usuario Não Encontrado!')
    return res.status(HttpStatus.OK).json({ message: "Usuario Deletado com Sucesso!!!" })
  }
}
