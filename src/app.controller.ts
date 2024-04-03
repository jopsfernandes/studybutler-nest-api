import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from "./dtos/create-user-body"
import { UsersRepository } from './repositories/users-repository';


@Controller()
export class AppController {
  constructor(private usersRepository: UsersRepository) { }


  @Post()
  async getHello(@Body() body: CreateUserBody) {

    const { name, role, email, password } = body

    await this.usersRepository.create(name, role, email, password)

    return
  }



}
