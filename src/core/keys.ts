export enum KeyttyKeys {
  undefinedKey,
  j,
  h,
  k,
  l
}

export enum WebInputKeys {
  h = "h",
  j = "j",
  k = "k",
  l = "l"
}

export function toDebugString(k: KeyttyKeys): string {
  const KTKey = KeyttyKeys[k] as keyof typeof WebInputKeys;

  if (KTKey === undefined || k === KeyttyKeys.undefinedKey)
    return "undefined key";

  const WIKey = WebInputKeys[KTKey];

  return `KeyttyKey${WIKey.toUpperCase()}`;
}

export function webToKeytty(key: string): KeyttyKeys {
  const WIKey = WebInputKeys[key] as keyof typeof KeyttyKeys;

  if (WIKey === undefined) return KeyttyKeys.undefinedKey;

  const KTKey: KeyttyKeys = KeyttyKeys[WIKey];

  return KTKey;
}
