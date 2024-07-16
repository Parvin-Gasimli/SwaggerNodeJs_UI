import  {isNotEmpty} from "class-validator";

export  class UserDto{
    @isNotEmpty
    name;
    @isNotEmpty
    email;
    @isNotEmpty
    password;

}