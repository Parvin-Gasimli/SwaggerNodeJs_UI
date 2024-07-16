import  {isNotEmpty} from "class-validator";

export class  BlogDto{
    @isNotEmpty
    title;
    @isNotEmpty
    content;
    @isNotEmpty
    author;

}
