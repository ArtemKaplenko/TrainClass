  class Wagon {
    /**
     * @constructor
     * @param {number} V 
     * @param {boolean} isOpenType 
     */
    constructor(V, isOpenType) {
      this.V = V;
      this.isOpenType = isOpenType;
      this.cargo = null;
    }
  
    loadCargo(cargo) {
      if(this.cargo === null) {
        this.cargo = cargo;
      } else {
        console.log('В вагоне уже есть груз');
      }
    }
  
    unloadCargo() {
      this.cargo = null;
    }
  }
  

  class Locomotive {
    /**
     * @constructor
     * @param {integer} maxPlaces 
     * @param {string} egineType 
     * @param {number} engineP 
     */
    constructor(maxPlaces, engineType, engineP) {
      this.maxPlaces = maxPlaces;
      this.peoples = [];
      this.engineType = engineType;
      this.engineP = engineP;
      this.isWork = false;
    }
  
    start() {
      if(this.peoples.length > 0) {
        this.isWork = true;
      } else {
        console.log('В кабине нет людей, запуск двигателя не возможен');
      }
    }
  
    addPassenger(passenger) {
        if(this.peoples.length < this.maxPlaces) {
            this.peoples.push(passenger);
        } else {
            console.log('мест нет');
        }
    }
  }


  class Train {
      /**
       * @constructor
       * @param {Locomotive} locomotive is array
       * @param {Wagon} wagons one only
       */
      constructor(locomotive, wagons) {
        this.locomotive = locomotive;
        this.wagons = wagons;
        this.speed = 0;
      }

      aForvard() {
          if(this.locomotive.isWork) {
            this.speed += 5;
          }
      }

      aBack() {
          if(this.locomotive.isWork) {
              this.speed -= 5;
          }
      }

      stop() {
          if(this.speed < 10 && this.speed > -10) {
              this.speed = 0;
              this.locomotive.isWork = false;
          }
      }

      addWagon(wagon) {
          this.wagons.push(wagon);
      }

      forEach(callback) {
          for(let index in this.wagons) {
              callback(this.wagons[index], index, this.wagons);
          }
      }
  }


  const wagon1 = new Wagon(100, true);
  const wagon2 = new Wagon(100, false);
  const locomotive = new Locomotive(2, 'неавтономный', 1000);
  const train = new Train(locomotive, [wagon1, wagon2]);
  
  train.locomotive.start();
  train.locomotive.addPassenger('пассажир1');
  train.locomotive.addPassenger('пассажир2');
  train.locomotive.addPassenger('пассажир3');
  train.locomotive.start();
  train.addWagon(new Wagon(200, true));

  train.forEach((element, index, array) => {
      array[index].loadCargo('уголь');
  });

  train.forEach(element => {
      console.log(element);
  });