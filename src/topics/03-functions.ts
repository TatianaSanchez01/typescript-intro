function addNumbers(number1: number, number2: number): number{
    return number1 + number2
}

const addNumbersArrow = (a: number, b:number):string =>{
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number{
    return firstNumber * base
}

const sum: number = addNumbers(1, 2);
const sumArrow: string = addNumbersArrow(5, 7);
const multiplyResult: number = multiply(5);

console.log({sum, sumArrow, multiplyResult});


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}

const strider: Character = {
    name: 'Strider',
    hp: 90,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 6);
healCharacter(strider, 87);
healCharacter(strider, 652);

strider.showHp();


export {}