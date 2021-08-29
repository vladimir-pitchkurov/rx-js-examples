// noinspection JSDeprecatedSymbols

import {interval} from "rxjs";
import {filter, map, take, scan} from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#first .result');

const people = [
    {name: 'Vladimir', age: 25},
    {name: 'Elena', age: 17},
    {name: 'Ivan', age: 18},
    {name: 'Igor', age: 14},
    {name: 'Lisa', age: 32},
    {name: 'Irina', age: 23},
    {name: 'Oleg', age: 20}
];

//example with interval
btn.addEventListener('click', () => {
    btn.disabled = true;
    let i = 0;
    const adult = [];

    let interval_instance = setInterval(() => {
        if (!people[i]) {
            clearInterval(interval_instance);
            btn.disabled = false;
        }

        if (people[i].age >= 18) {
            adult.push(people[i].name);
            display.textContent = adult.join(', ');
        }
        i++;
    }, 1000);
});

// RXJS example
rxjsBtn.addEventListener('click', _ => {
    rxjsBtn.disabled = true;

    interval(1000)
        .pipe(
            take(people.length),
            filter(index => people[index].age >= 18),
            map(index => people[index].name),
            scan((acc, el) => {
                return acc.concat(el);
            }, [])
        )
        .subscribe(res => {
                display.textContent = res.join(', ');
            },
            null,
            _ => {
                rxjsBtn.disabled = false;
            });
})
