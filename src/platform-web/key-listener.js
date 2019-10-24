import { fromEvent, BehaviorSubject } from "rxjs";
import { map, multicast } from "rxjs/operators";

const subject = new BehaviorSubject();
export const $keyDown = fromEvent(document, "keydown").pipe(
  map(e => e.key),
  multicast(subject)
);

$keyDown.connect();
