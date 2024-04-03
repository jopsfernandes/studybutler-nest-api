export abstract class UsersRepository {

     create(name: string, role: string[], email:string, password:string): Promise<void>{
          throw new Error('Method not implemented')
     }
}