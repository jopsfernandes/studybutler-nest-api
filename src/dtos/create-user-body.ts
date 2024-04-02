import { IsNotEmpty, Length } from "class-validator"


export class CreateUserBody {
     @IsNotEmpty({ message: "the username should not be empty" })
     @Length(3, 10)
     name: string

     @IsNotEmpty({ message: "the role should not be empty" })
     role: string
}