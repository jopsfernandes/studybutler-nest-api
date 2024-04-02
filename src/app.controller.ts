import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService, } from './database/prisma.service'
import {randomUUID} from 'node:crypto'
import {CreateUserBody} from "./dtos/create-user-body"


@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }


  @Post()
  async getHello(@Body() body:CreateUserBody){

    const{name, role} = body
     
    const user = await this.prisma.user.create({
      data: {
        id: 123,
        name: 'Capitão Jacksparrow',
        email: 'capitao@gmail.com',
        password: 'qualquersenha123',
      }
    })

    return {
      user,
    }
  }



}
