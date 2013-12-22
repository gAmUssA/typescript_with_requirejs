module myModule {
    // function definition
    var mul:(x:number, y:number) => number;
    //function body
    mul = (x, y) =>  x * y;


    interface Person {
        firstName: string;
        lastName: string;
        age?: number;
        pets: number;
        myPets: () => number;
        greet: (name:string)=>void;
    }

    var p:Person = {
        firstName: 'Vik',
        lastName: 'Gamov',
        pets: 0,
        myPets: function () {
            if (this.age === undefined) {
                return this.pets * 2;
            } else {
                return this.pets * this.age;
            }

        },
        greet: function (name) {
            console.log("Hi " + name + ". My name is " + this.firstName);
        }
    };

    export class Engine {
        constructor(public power:number, public type:string) {
        }
    }

   export class Car {
        private _engine:Engine;

        constructor(engine:Engine) {
            this.engine = engine;
        }

        get engine():Engine {
            return this._engine;
        }

        set engine(value:Engine) {
            this._engine = value;
        }

        start() {
            console.log("starting " + this.engine.type + this.engine.power + " horse powers");
        }
    }

    var engine = new Engine(100, 'v8');
    var c:Car = new Car(engine);
    c.start();
}