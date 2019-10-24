import React from "react";
import { useStream } from "../hooks/use-stream";

export function KeyReactor({ $kstream }) {
  const recents = useStream($kstream);
  const value = recents.join('\n')

  return (
    <>
      <p>Key reactor!</p>
      <small>(up to recent 5 keys)</small>
      <pre>{value}</pre>
    </>
  );
}
