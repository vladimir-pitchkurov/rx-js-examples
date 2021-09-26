import {getSearchResults, drawResults} from './second_example_tools'

const input = document.getElementById('autocomplete-native');
const native_results_wrapper = document.getElementById('native_results');

let refresh_timer = {
    timer: null,
    last_time: Date.now()
};
let last_value = ''
const time_interval = 500;

input.addEventListener('input', (ev) => {
    const time = Date.now();
    const search_text = ev.target.value;

    if (time - refresh_timer.last_time < time_interval) {
        clearInterval(refresh_timer.timer);
    }

    refresh_timer.last_time = time;

    if (search_text === last_value) {
        return;
    }
    refresh_timer.timer = setTimeout(_ => {
        console.log('getSearchResults');
        last_value = search_text;
        const search_results = getSearchResults(search_text);
        drawResults(native_results_wrapper, search_results)
    }, time_interval)
})
