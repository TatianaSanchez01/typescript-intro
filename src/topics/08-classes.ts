export class Person {
    constructor(
        protected firstName:string, 
        private lastName: string,
        protected address: string = 'No Address') {
    }
}

export class Hero {
    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public person: Person,
        ){
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero("IronMan", 45, 'Tony', tony);

console.log(ironman)