class Car{
  #brand;//private global variable
  #model;
  speed=0;//ehy speed is not private means private property cannot be accesed in child class in js not support protected 
  isTrunkOpen=false;
  constructor(carDetails){
    this.#brand=carDetails.brand;
    this.#model=carDetails.model;
  }
  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`
    );
  }
  go(){
    if(!this.isTrunkOpen)
    {
        this.speed+=5;
    }
    if(this.speed > 200) {
      this.speed = 200;
    }
  }
  brake(){
    this.speed-=5
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  openTrunk(){
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }
  closeTrunk(){
    this.isTrunkOpen=false;
  }
}
class RaceCar extends Car{
  accleration=0;
  constructor(carDetails){
    super(carDetails);
    this.accleration=carDetails.accleration;
  }

  go(){
    this.speed+=this.accleration;
    if(this.speed>300){
      this.speed=300;
    }
  }
  openTrunk(){
    console.log('Race cars do nat have a trunk.')
  }
  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}





const car1=new Car({
  brand:'Toyato',
  model:'Corolla'
});

const car2=new Car({
  brand:'Testla',
  model:'Model 3'
});

const car3=new Car({
  brand:'Mahindra',
  model:'Thar'
});

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();

car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

car1.openTrunk();
car1.displayInfo();


car2.go();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

// Trunk should open since the car is not moving.
//car2.openTrunk();
// Car should not go since the trunk is open.
car2.go();
//car2.brake();
car2.openTrunk

car2.displayInfo();

/*console.log(car1);
console.log(car2);
console.log(car3);*/

const raceCar=new RaceCar({
  brand:'McLaren',
  model:'F1',
  accleration:20
});


raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();

