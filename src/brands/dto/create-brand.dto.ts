import { IsString } from "class-validator"

export class CreateBrandDto {

    @IsString()
    name:string
    createdAt:number
  

}
