import { useEffect, useState } from "react";

export function useStream($tream) {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const subs = $tream.subscribe({
      next: v => setValue(v),
      complete: () => console.log("stream completed in useStream"),
      error: e => console.error(e)
    });
    return () => subs.unsubscribe();
  });

  return value;
}
