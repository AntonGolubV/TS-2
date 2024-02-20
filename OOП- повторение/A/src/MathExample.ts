class MathExample {
  private _a: number;
  private _b: number;
  private _result: number;
  private _operation: string;

  constructor(a: number, b: number, operation: string) {
    this._a = a;
    this._b = b;
    this._operation = operation;
    this._result = this.calculateResult();
  }

  public get result(): number {
    return this._result;
  }
  public set result(op: string) {
    this._operation = op;
    this._result = this.calculateResult();
  }
  
  public toString(): string {
    return `${this._a} ${this._operation} ${this._b} = ${this._result}`;
  } 

  public calculateResult(): number {
    switch (this._operation) {
        case '+':
            return this._a + this._b;
        case '-':
            return this._a - this._b;
        case '*':
            return this._a * this._b;
        case '/':
            return this._a / this._b; 
        default: 
        return 0;
    }
  }
}


class Room{
  private _x: number;
  private _y: number;
  private _z: number;
  private _sFloor: number;
  private _sWalls: number;
  private _vRoom: number;

    constructor(x: number, y: number, z: number){
      this._x = x;
      this._y = y;
      this._z = z;
      this._sFloor = this.calcFloor();
      this._sWalls = this.calcWalls();
      this._vRoom = this.calcVRoom();
    }

  public get x(): number {
    return this._x;
  }

  public set x(x: number) {
    this._x = x;
  }

  public get y(): number {
    return this._x;
  }

  public set y(y: number) {
    this._y = y;
  }

  public get z(): number {
    return this._z;
  }

  public set z(z: number) {
    this._z = z;
  }

  public get sFloor(): number {
    return this._sFloor;
  }

  public get sWalls(): number {
    return this._sWalls;
  }

  public get vRoom(): number {
    return this._vRoom;
  }

  public calcFloor(): number{
    this._sFloor = this._x * this._y;
    return this._sFloor;
  }

  public calcWalls(): number{
    this._sWalls = (this._x * this._z + this._y * this._z) * 2;
    return this._sWalls
  }

  public calcVRoom(): number{
    this._vRoom = this._x * this._y * this._z;
    return this._vRoom;
  }

  public toString(): string {
    return `X: ${this._x}; Y: ${this._y}; Z: ${this._z}; sFloor: ${this._sFloor}; sWalls: ${this._sWalls}; vRoom: ${this._vRoom}`;
  } 
}

class Shop {
  private _name: string;
  private _address: string;
  private _description: string;
  private _phone: string;
  private _email: string;

  constructor(name: string, address: string, description: string, phone: string, email: string) {
      this._name = name;
      this._address = address;
      this._description = description;
      this._phone = phone;
      this._email = email;
  }

  public get name(): string {
      return this._name;
  }

  public get address(): string {
      return this._address;
  }

  public get description(): string {
      return this._description;
  }

  public get phone(): string {
      return this._phone;
  }

  public get email(): string {
      return this._email;
  }

  public set name(name: string) {
      this._name = name;
  }

  public set address(address: string)  {
      this._address = address;
  }

  public set description(description: string){
    this._description = description;
  }

  public set phone(phone: string) {
      this._phone = phone;
  }

  public set email(email: string) {
      this._email = email;
  }

  public toString(): string {
      return `Name: ${this.name}; Address: ${this.address}; Description: ${this.description};Phone: ${this.phone}; Email: ${this.email}`
  }
}

// Пример использования класса

export { MathExample, Room, Shop };
