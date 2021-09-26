import {fromEvent, pairwise, switchMap, takeUntil} from "rxjs";
import {map} from "rxjs/operators";

const canvas_elem = document.getElementById('canvas');
const ctx = canvas_elem.getContext('2d');

function drawLine([from, to]) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
}


const mousemove$ = fromEvent(canvas_elem, 'mousemove')
const mousedown$ = fromEvent(canvas_elem, 'mousedown')
const mouseup$ = fromEvent(canvas_elem, 'mouseup')
const mouseout$ = fromEvent(canvas_elem, 'mouseout')

const points$ = mousemove$.pipe(
    map(({clientX, clientY}) => {
        const {top, left} = canvas_elem.getBoundingClientRect();
        return {
            x: clientX - left,
            y: clientY - top
        }
    }),
    pairwise()
);

mousedown$.pipe(
    switchMap(_ => points$.pipe(
            takeUntil(mouseup$),
            takeUntil(mouseout$)
        )
    ),
).subscribe(drawLine)
