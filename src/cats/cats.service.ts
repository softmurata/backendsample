import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    private id: number = 0

    create(cat: Cat){
        this.cats.push(cat)
        this.id += 1
    }

    findAll(): Cat[]{
        return this.cats
    }

    findOne(id: string): Cat{
        return this.cats[Number(id)]
    }

}
