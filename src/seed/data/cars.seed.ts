import {v4 as uuid} from 'uuid'
import { Car } from '../../cars/interfaces/car.interface'

export const Cars_Seed: Car[] =[{

    id: uuid(),
    barnd: 'Toyota',
    model:'Coralla'
},
{
    id: uuid(),
    barnd:'Honda',
    model:'Civic'
},
{

    id: uuid(),
    barnd: 'Jeep',
    model:'Cherokee'
},
]