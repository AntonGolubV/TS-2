import { MathExample, Room, Shop } from "./MathExample";

function createBlock(innerText: string | number[], classL?: string) {
  let el = document.createElement("h3");
  if (classL) el.classList.add(`${classL}`);
  el.innerText = `${innerText}`;
  document.body.appendChild(el);
}

const rand = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max - min + 1));

//1
let example = new MathExample(1, 2, "*");
createBlock(`1. Result: ${example.result};`)
createBlock(`Object str: ${example.toString()};`);
example.result = "+";
createBlock(`Second result: ${example.result}; ${example.toString()};`);

//2
let room = new Room(10, 10, 3);
room.x = rand(5, 50);
room.y = rand(10, 50);
room.z = rand(2, 4);
createBlock(`2. Площадь пола: ${room.calcFloor()}m^2;`);
createBlock(`Площадь стен: ${room.calcWalls()}m^2;`);
createBlock(`Объём комнаты: ${room.calcVRoom()}m^3;`);
createBlock(room.toString());

let arr: Room[] = [];
let count: number = 0;
function firstFunc(): void{
    for(let i = 0; i < rand(5, 13); i++){
        arr.push(new Room(rand(5, 50), rand(10, 50), rand(2, 4)));
    }
    for(let i = 0; i < arr.length; i++){
            count += arr[i].sFloor;
    }
    createBlock(`2.0 Сумма площадей: ${count} m^2;`);
}
firstFunc();

let max: number = 0;
let index: number;
let count1: number = 0;
function secondFunc(): void{
  for(let i = 0; i < arr.length; i++){
    count1 += arr[i].vRoom;
    if(max < arr[i].vRoom){
      max = arr[i].vRoom;
      index = i;
    }
  }
  createBlock(`2.1 Сумма объёмов: ${count1} m^3`);
  createBlock(`Самая большая комната ${arr[index].toString()}`);
}
secondFunc();

//3
const names: string[] = ['Fantastic Market', 'Awesome Outlet', 'Best Outlet', 'Best Shop', 'Fantastic Store', 'Best Shop', 'Awesome Outlet', 
'Best Outlet', 'Mega Mart', 'Best Mart', 'Super Mart', 'Super Market', 'Fantastic Outlet'];
const address: string[] = ['Maple Street','Oak Street','Pine Street','Cedar Street','Elm Street','Willow Street','Birch Street','Hickory Street','Magnolia Street',
'Sycamore Street','Juniper Street','Cypress Street','Ash Street'];

function newShops(): void{
  let newShops: Shop[] = [];
  for(let i = 0; i < 12; i++){
    
      let newShop = new Shop(names[rand(0, 12)], address[rand(0, 12)], 'none', `${rand(1000, 9999)}-${rand(1000, 9999)}`, "info@myshop.com");
      newShops.push(newShop);
    }
  console.log(newShops);
}
newShops()
