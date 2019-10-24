import { webToKeytty, toDebugString, KeyttyKeys } from "./keys";

export function process(key: string): KeyttyKeys {
  return webToKeytty(key);
}

export function print(k: KeyttyKeys): string {
  return toDebugString(k);
}
