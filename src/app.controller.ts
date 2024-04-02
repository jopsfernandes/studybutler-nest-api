import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService, } from './database/prisma.service'


@Controller()
export class AppController {
  constructor(private prisma: PrismaService){}
 

  @Post()
  async getHello(){
    const user = await this.prisma.user.create({
      data:{
        id: 231,
        name: 'Capitão Jacksparrow',
        email: 'capitao@gmail.com',
        password: 'qualquersenha123',
      }
    })

    return{
      user,
    }
  }
  

  
}
