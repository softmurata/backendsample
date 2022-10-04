import { Cat } from "../interface/cat.interface";

export class CreateCatDto implements Cat {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}