class Animal{
    protected _name: string;
    protected _age: number;
    protected _sound: string;

    constructor(name: string, age: number, sound: string){
        this._name = name;
        this._age = age;
        this._sound = sound;
    }
    public get name(): string{
        return this._name;
    }
    public set name(name: string){
        if(name.length > 2) this._name = name;
    }
   
    public get age(): number{
        return this._age;
    }

    public set age(age: number){
        this._age = age;
    }

    public get sound(): string{
        return this._sound;
    }

    public set sound(sound: string){
        this._sound = sound;
    }

    public makeSound(): void{
        console.log(this._sound);
    }
}


 

export { Animal };