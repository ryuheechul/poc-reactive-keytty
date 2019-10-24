import { map, scan, multicast } from "rxjs/operators";

import { $keyDown } from "../key-listener";
import { process,print } from "../../core/key-processor";
import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject();
export const $inputKeyStream = $keyDown.pipe(
  map(k => process(k)),
  scan((acc, one) => [...acc, one].slice(-5), []),
  multicast(subject)
);

$inputKeyStream.connect();

export const $inputKeyForDebugStream = $inputKeyStream.pipe(
  map(ks => ks.map(k => print(k)))
)