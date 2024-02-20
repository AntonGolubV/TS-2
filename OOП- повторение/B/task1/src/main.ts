
import { Teapot } from "./Teapot";
import { Car  } from "./Car";
import { Microwave } from "./Microwave";
import { Steamship } from "./Steamship";
import { Device } from "./Device";


const rand = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max - min + 1));

function makeString(): string {
  let outString: string = '';
  let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 10; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }
  return outString;
}

function showObj(){
  let arr: Device[] = []
  let car = new Car(`${makeString()}`, rand(200, 100000), rand(200, 100000), rand(130, 1000), `Предназначен для предвижения по земле`);
  let steamship = new Steamship(`${makeString()}`, rand(99999999, 99999999), rand(9999, 99999), rand(10000, 10000), `Предназначен для предвижения по воде`);
  let teapot = new Teapot(`${makeString()}`, rand(20, 1000), rand(1.5, 4), rand(500, 3000), `Предназначен для подогрева воды`);
  let microwave = new Microwave(`${makeString()}`, rand(20, 1000), rand(1, 10), rand(1000, 5000), `Предназначен для подогрева еды`);
  arr.push(car);
  arr.push(steamship);
  arr.push(teapot);
  arr.push(microwave);
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i].desc());
    console.log(arr[i].sound());
    console.log(arr[i].show());
  }
}
showObj();