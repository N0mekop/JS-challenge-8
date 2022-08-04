'use strict';

/* Petit jeu de mot? :) */

const troGaming = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (addition) => {
    return addition > 50 && addition <= 300 ? addition * 0.15 : addition * 0.20;
}

for (let i = 0; i < troGaming.length; i++) {
    tips.push(calcTip(troGaming[i]));
    totals.push(troGaming[i] + tips[i]);
}

console.log(tips);
console.log(totals);

function calcAverage(values) {
    let total = 0;
    for (var i = 0; i < values.length; i++) {
        total = total + values[i];
    }
    let average = total / values.length;
    return average;
}

console.log('Moyenne des pourboires:', calcAverage(tips));
console.log('Moyenne des totaux:', calcAverage(totals));

