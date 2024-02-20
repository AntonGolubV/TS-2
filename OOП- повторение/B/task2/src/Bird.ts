import { Animal } from "./Animal";

class Bird extends Animal{
    private _wingspan: number;
    constructor(name: string, age: number, sound: string, wingspan: number){
        super(name, age, sound);
        this._wingspan = wingspan;
    }
    public get wingspan(): number{
        return this._wingspan;
    }

    public set wingspan(wingspan: number){
        this._wingspan = wingspan;
    } 

   /*  public makeSound(): void{
        console.log(this._sound);
    } */

    public fly(): void{
        console.log(`${this._name} летит! Размах крыльев: ${this._wingspan} cm;`);
    }
}

export { Bird }