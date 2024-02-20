
import { Bird } from "./Bird";
import { Dog } from "./Dog";
import { Animal } from "./Animal";
import { Cat } from "./Cat";

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

const dog = new Dog('Бобик', 3, 'Гав-гав!','Такса'); 
const cat = new Cat('Мурзик', 5, 'Мяу-мяу!','Серый');
const bird = new Bird('Чижик', 2, 'Чик-чирик!', 30);

dog.makeSound();  
cat.makeSound();  
bird.makeSound();

dog.bark(); 
cat.meow(); 
bird.fly();