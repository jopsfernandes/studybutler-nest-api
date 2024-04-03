import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UsersRepository } from './repositories/users-repository';
import { PrismaUsersRepository } from './prisma/prisma-users-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {
    provide: UsersRepository,
    useClass: PrismaUsersRepository,
  }],
})

export class AppModule { }
