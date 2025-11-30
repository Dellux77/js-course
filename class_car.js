class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.running = false;
  }

  start() {
    this.running = true;
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    this.running = false;
    console.log(`${this.make} ${this.model} stopped.`);
  }
}

// Example
const car1 = new Car("Toyota", "Corolla");
car1.start();
car1.stop();

