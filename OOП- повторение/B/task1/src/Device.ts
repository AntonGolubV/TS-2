class Device{
    static counter: number = 0;

    protected _name: string;
    protected _id: number;
    protected _price: number;
    protected _someInfo: string;

    constructor(name: string, price: number, someInfo: string){
        this._name = name;
        this._id = Device.counter++;
        this._price = price;
        this._someInfo = someInfo;
    }
    public get name(): string{
        return this._name;
    }
    public set name(name: string){
        if(name.length > 2) this._name = name;
    }
    public get id(): number{
        return this._id;
    }
    public get price(): number{
        return this._price;
    }

    public set price(price: number){
        this._price = price;
    }

    public get someInfo(): string{
        return this._someInfo;
    }

    public set someInfo(someInfo: string){
        this._someInfo = someInfo;
    }

    public toString(): string{
        return `Id:${this._id}; Name:${this._name}`;
    }

    public show(): string{
        return this._name;
    }
    
    public desc(): string{
        return this._someInfo;
    }
    public sound(): string{
        return ',bg';
    }
}


 

export { Device };