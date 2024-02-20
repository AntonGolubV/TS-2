import { Device } from "./Device";

class Car extends Device{
    private _distance: number;
    private _power: number;
    constructor(name: string, price: number, distance: number, power: number, someInfo: string){
        super(name, price, someInfo);
        this._distance = distance;
        this._power = power;
    }
    public get distance(): number{
        return this._distance;
    }

    public set distance(distance: number){
        this._distance = distance;
    } 

    public get power(): number{
        return this._power;
    }

    public set power(power: number){
        this._power = power;
    } 

    public sound(): string{
        return `Врррр`;
    }
}
export{ Car };