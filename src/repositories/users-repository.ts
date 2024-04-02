export abstract class UsersRepository {
     abstract create(name: string, role: string): Promise<void>
}