import { IsEmail, IsNotEmpty, Length } from "class-validator"


export class CreateUserBody {
     @IsNotEmpty({ message: "the username should not be empty" })
     @Length(3, 10)
     name: string

     @IsNotEmpty({ message: "the role should not be empty" })
     role: string[]

     @IsNotEmpty({ message: "the email should not be empty" })
     @IsEmail()
     email: string

     @IsNotEmpty({ message: "the password should not be empty" })
     password: string

}