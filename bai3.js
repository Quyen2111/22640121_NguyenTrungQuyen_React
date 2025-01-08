console.log('Code challenge 3');

var minAvg = 100;

// Data 1
const Dolphin1 = [96, 108, 89];
const Koalas1 = [88, 91, 110];

// Calculate average
const Avg = (score) => score.reduce((a, b) => a + b, 0) / score.length;

const AvgDolphin1 = Avg(Dolphin1);
const AvgKoalas1 = Avg(Koalas1);



if (AvgDolphin1 >= minAvg && AvgKoalas1 >= minAvg) {
    if (AvgDolphin1 > AvgKoalas1) {
        console.log(`Dolphins win with score (${AvgDolphin1.toFixed(1)})!`);
    } else if (AvgKoalas1 > AvgDolphin1) {
        console.log(`Koalas win with score (${AvgKoalas1.toFixed(1)})!`);
    } else {
        console.log(`Draw with score (${AvgDolphin1.toFixed(1)})!`);
    }
} else {
    console.log('No team wins');
}

// data bonus 1
const Dolphinbonus1 = [97, 112, 101];
const Koalasbonus1 = [109, 95, 123];

const AvgDolphinbonus1 = Avg(Dolphinbonus1);
const AvgKoalasbonus1 = Avg(Koalasbonus1);



if (AvgDolphinbonus1 >= minAvg && AvgKoalasbonus1 >= minAvg) {
    if (AvgDolphinbonus1 > AvgKoalasbonus1) {
        console.log(`Dolphins win with score (${AvgDolphinbonus1.toFixed(1)})!`);
    } else if (AvgKoalasbonus1 > AvgDolphinbonus1) {
        console.log(`Koalas win with score (${AvgKoalasbonus1.toFixed(1)})!`);
    } else {
        console.log(`Draw with score (${AvgDolphinbonus1.toFixed(1)})!`);
    }
} else {
    console.log('No team wins');
}


// data bonus 2
const Dolphinbonus2 = [97, 112, 101];
const Koalasbonus2 = [109, 95, 106];

const AvgDolphinbonus2 = Avg(Dolphinbonus2);
const AvgKoalasbonus2 = Avg(Koalasbonus2);



if (AvgDolphinbonus2 >= minAvg && AvgKoalasbonus2 >= minAvg) {
    if (AvgDolphinbonus2 > AvgKoalasbonus2) {
        console.log(`Dolphins win with score (${AvgDolphinbonus2.toFixed(1)})!`);
    } else if (AvgKoalasbonus2 > AvgDolphinbonus2) {
        console.log(`Koalas win with score (${AvgKoalasbonus2.toFixed(1)})!`);
    } else {
        console.log(`Draw with score (${AvgDolphinbonus2.toFixed(1)})!`);
    }
} else {
    console.log('No team wins');
}