var myModule;
(function (myModule) {
    // function definition
    var mul;

    //function body
    mul = function (x, y) {
        return x * y;
    };

    var p = {
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

    var Engine = (function () {
        function Engine(power, type) {
            this.power = power;
            this.type = type;
        }
        return Engine;
    })();
    myModule.Engine = Engine;

    var Car = (function () {
        function Car(engine) {
            this.engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });


        Car.prototype.start = function () {
            console.log("starting " + this.engine.type + this.engine.power + " horse powers");
        };
        return Car;
    })();
    myModule.Car = Car;

    var engine = new Engine(100, 'v8');
    var c = new Car(engine);
    c.start();
})(myModule || (myModule = {}));
//# sourceMappingURL=test.js.map
