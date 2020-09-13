import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CreateUserDTO} from './dto/user.dto'
import { UsersService } from './users.service'

@Controller('v1/api')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const addUser = await this.usersService.newUser(createUserDTO)
    return res.status(HttpStatus.OK).json({
      message: "Usuario Criado com Sucesso!!!",
      addUser
    })
  }

  @Get('users')
  async getAllUsers(@Res() res) {
    const allUsers = await this.usersService.getAllUsers()
    return res.status(HttpStatus.OK).json(allUsers) 
  }

  @Get('user/:userId')
  async getUser(@Res() res, @Param('userID') userID) {
    const user = await this.usersService.getUser(userID)
    if(!user) throw new NotFoundException('Usuario Não Encontrado!')
    return res.status(HttpStatus.OK).json(user)
  }

  @Put('/update')
  async updateUser(@Res() res, @Query('userID') userID, @Body() createUserDTO: CreateUserDTO) {
    const updatedUser = this.usersService.updateUser(userID, createUserDTO)
    if(!updatedUser) throw new NotFoundException('Usuario Não Encontrado!') 
    return res.status(HttpStatus.OK).json({
      message: "Usuario Atualizado com Sucesso!!!",
      updatedUser
    })
  }

  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    const deletedUser = this.usersService.deleteUser(userID)
    if(!deletedUser) throw new NotFoundException('Usuario Não Encontrado!')
    return res.status(HttpStatus.OK).json({
      message: "Usuario Deletado com Sucesso!!!",
      deletedUser
    })
  }
}
