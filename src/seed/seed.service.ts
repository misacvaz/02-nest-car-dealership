import { Injectable } from '@nestjs/common';
import { Cars_Seed } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import {  Brands_Seed } from './data/brands.seed';


@Injectable()
export class SeedService {

 constructor(  
  private  readonly carsService:CarsService,
  private readonly brandsService:BrandsService
  ){}
  
  populateDB(){

   

  
    this.carsService.fillCarsWithSeedData(Cars_Seed)
    this.brandsService.fillBrandsWithSeedData(Brands_Seed)

    return 'Seed executed'
  }
}
