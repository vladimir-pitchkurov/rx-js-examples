import {of, from, Observable} from 'rxjs';

// From values as arguments:
// const stream$ = of(1, 2, 3, 4);

// From values as array:
// const stream$ = from([1, 2, 3, 4]);

// Base Observable class with 3 methods: next, error, complete
const stream$ = new Observable(observer => {
    observer.next('First');
    setTimeout(_ => {
        observer.next('after 1000 ms');
    }, 1000);

    setTimeout(_ => {
        observer.next('after 2000 ms');
        observer.error('ERROR after 2000 ms')
    }, 2000);

    setTimeout(_ => {
        observer.next('after 3000 ms');
        observer.complete();
    }, 3000)
})

// stream$.subscribe(val => {
//     console.log('Val: ', val);
// });

// Two ways of subscribe:
// 1st - 3 callbacks
// stream$.subscribe(val => {
//         // Next
//         console.log('Val: ', val);
//     }, err => {
//         // Error
//         console.error(err);
//     },
//     () => {
//         // Complete
//         console.log('Stream completed');
//     });

// 2nd - object with properties
stream$.subscribe({
    next(val) {
        // Next
        console.log('Val: ', val);
    },
    error(err) {
        // Error
        console.error(err);
    },
    complete() {
        // Complete
        console.log('Stream completed');
    }
});
