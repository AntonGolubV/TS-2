import { Animal } from "./Animal"

class Cat extends Animal{
    private _color: string;
    constructor(name: string, age: number, sound: string, color: string){
        super(name, age, sound);
        this._color = color;
    }

    public get color(): string{
        return this._color;
    }

    public set color(color: string){
        this._color = color;
    } 

    public meow(): void{
        console.log(`${this._color} ${this._name} мяукает!`);
    }
} 
export { Cat }