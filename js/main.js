function carModel(first) {
    // let sum = 7 ;
    this.name = first;
    this.randomStart = randomSpeed();
    this.coveredDistance = 0;
}

// let a = new carModel('aa')

let map = [];
for (let i = 0; i < 300; i++) {
    map.push('*');
}

function mapDef() {
    let map = [];
    for (let i = 0; i < 300; i++) {
        map.push('*');
    }
    return map;
}

function randomSpeed() {
    return parseInt((Math.random() * 10).toFixed(0))
}

function inputCars() {
    //validation
    let sumCars;
    sumCars = prompt('pleas enter the count of cars for race :') * 1;
    if (Number.isNaN(sumCars)) {
        throw new Error('I told you to enter the number!!!!');
    }
    let arrayCars = [];
    for (let i = 1; i <= sumCars; i++) {
        arrayCars.push(new carModel(prompt(`enter the cars number ${i} :`)));
    }
    return arrayCars;
}
let array = inputCars();
array.sort((a, b) => b.randomStart - a.randomStart)
let indexOfCarsDistance = 0;
let rank = [];
let copy;
while (true) {
    for (let indexOfCars = 0; indexOfCars < array.length; indexOfCars++) {
        array[indexOfCars]['coveredDistance'] = array[indexOfCars]['coveredDistance'] + randomSpeed();
        if (array[indexOfCars]['coveredDistance'] <= 300) {
            indexOfCarsDistance = indexOfCarsDistance + 1;
        }
        for (let i = 0; i < array.length; i++) {
            copy = array[indexOfCars]['coveredDistance'];
            if (array[indexOfCars]['coveredDistance'] === array[i]['coveredDistance']) {
                array[i]['coveredDistance'] = 0;
            }
            array[indexOfCars]['coveredDistance'] = copy;
        }

        if (array[indexOfCars]['coveredDistance'] > 300) {
            rank.push(array[indexOfCars]['name'])
        }
        for (let i = 0; i < array.length; i++) {
            map[array[indexOfCars]['coveredDistance']] = array[indexOfCars]['name'];
        }
    }
    console.log(map);
    map = mapDef();
    if (indexOfCarsDistance === 0) {
        break;
    }
    indexOfCarsDistance = 0;
}
rank = [...new Set(rank)];
console.log(rank);

