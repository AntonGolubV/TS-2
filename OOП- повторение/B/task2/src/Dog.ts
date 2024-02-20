import { Animal } from "./Animal";

class Dog extends Animal{
    private _breed: string;

    constructor(name: string, age: number, sound: string, breed: string){
        super(name, age, sound);
        this._breed = breed;
    }
    public get breed (): string{
        return this._breed ;
    }

    public set breed (breed : string){
        this._breed  = breed ;
    } 

    /* public makeSound(): void{
        console.log(this._sound);
    }
 */
    public bark(): void{
        console.log(`${this._breed} ${this._name} лает`);
    }
}
export{ Dog };