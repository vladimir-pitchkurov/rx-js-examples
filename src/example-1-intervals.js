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