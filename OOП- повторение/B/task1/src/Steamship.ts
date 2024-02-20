import { Device } from "./Device";

class Steamship extends Device{
    private _capacity: number;
    private _power: number;
    constructor(name: string, price: number, capacity: number, power: number, someInfo: string){
        super(name, price, someInfo);
        this._capacity = capacity;
        this._power = power;
    }
    public get capacity(): number{
        return this._capacity;
    }

    public set capacity(capacity: number){
        this._capacity = capacity;
    } 

    public get power(): number{
        return this._power;
    }

    public set power(power: number){
        this._power = power;
    } 

    public sound(): string{
        return `УУУУУ`;
    }

}
export { Steamship }