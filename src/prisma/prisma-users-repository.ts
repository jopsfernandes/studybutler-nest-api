import { UsersRepository } from "src/repositories/users-repository";
import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {

     constructor(
          private prisma: PrismaService
     ) { }



     async create(name: string, role: string[], email: string, password: string): Promise<void> {
          await this.prisma.user.create({
               data: { id: randomUUID(), name, role, email, password }
          });
     }
}
