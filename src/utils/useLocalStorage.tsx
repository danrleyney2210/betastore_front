import { useCallback, useState } from "react";

interface IUseLocalStorageProps {
  storageKey: string;
  initialValue?: string;
}

export const useLocalStorage = ({ storageKey, initialValue }: IUseLocalStorageProps) => {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(storageKey);
      return storageValue ? JSON.parse(storageValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: string) => {
      try {
        setState(value);
        localStorage.setItem(storageKey, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    },
    [storageKey]
  );

  return [state, setValue] as const;
};