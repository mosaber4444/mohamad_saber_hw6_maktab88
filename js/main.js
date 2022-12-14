function carModel(first) {
// let sum = 7 ;
    this.name = first;
    this.randomStart = randomSpeed();
    this.coveredDistance = 0;
    this.copyForLog = 0;
}

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
    sumCars = prompt('pleas enter the count of cars for race :');
    if (Number.isNaN(sumCars)) {
        throw new Error('I told you to enter the number!!!!');
    }
    let arrayCars = [];
    for (let i = 1; i <= sumCars; i++) {
        arrayCars.push(new carModel(prompt(`enter the cars number ${i}: `)));
    }
    return arrayCars;
}

let array = inputCars();
array.sort((a, b) => b.randomStart - a.randomStart)
let indexOfCarsDistance = 0;
let rank = [];
let copy;
for (let step = 1; true; step++) {
    for (let indexOfCars = 0; indexOfCars < array.length; indexOfCars++) {
        array[indexOfCars]['copyForLog'] = randomSpeed()
        array[indexOfCars]['coveredDistance'] = array[indexOfCars]['coveredDistance'] + array[indexOfCars]['copyForLog'];
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
            console.log(`${array[indexOfCars]['name']} win `)
            rank.push(array[indexOfCars]['name'])
        }
        for (let i = 0; i < array.length; i++) {
            map[array[indexOfCars]['coveredDistance'] - 1] = array[indexOfCars]['name'];
        }
    }
    console.log(`step = ${step}`)
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]['name']}: ${array[i]['copyForLog']}`)
    }
    console.log(map.join().replaceAll(',', ""));
    map = mapDef();
    if (indexOfCarsDistance === 0) {
        break;
    }
    indexOfCarsDistance = 0;
}
rank = [...new Set(rank)];
for (let i = 0; i < rank.length; i++) {
    console.log(`rank ${i + 1} : ${rank[i]}`)
}