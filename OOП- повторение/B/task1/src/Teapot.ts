import { Device } from "./Device";

class Teapot extends Device{
    private _volume: number;
    private _power: number;
    constructor(name: string, price: number, volume: number, power: number, someInfo: string){
        super(name, price, someInfo);
        this._volume = volume;
        this._power = power;
    }
    public get volume(): number{
        return this._volume;
    }

    public set volume(volume: number){
        this._volume = volume;
    } 

    public get power(): number{
        return this._power;
    }

    public set power(power: number){
        this._power = power;
    } 

    public sound(): string{
        return `Свист`;
    }
}

export { Teapot }