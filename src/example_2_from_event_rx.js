import {debounceTime, fromEvent} from "rxjs";
import {map, distinctUntilChanged} from "rxjs/operators";
import {getSearchResults, drawResults} from './second_example_tools'


const input_elem = document.getElementById('autocomplete-rx');
const wrapper = document.getElementById('rx_results');
const stream$ = fromEvent(input_elem, 'input');

let subscription = stream$.pipe(
    map(ev => ev.target.value),
    debounceTime(500),
    distinctUntilChanged()
)
    .subscribe(
        data => {
            console.log('RX:', {data});
            const search_results = getSearchResults(data);
            drawResults(wrapper, search_results);
        }
    )


// .subscribe({
//     next(data) {
//         console.log('RX:', {data});
//     },
//     error(err) {
//         console.log('RX error: ', err);
//     },
//     complete() {
//         console.log('subscription completed');
//     }
// })
