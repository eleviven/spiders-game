import { useEffect } from "react";

interface IUseTimer {
  value: number;
  behaviour?: "+" | "-";
  duration?: number;
  skip?: boolean;
  onUpdate?: (val: number) => void;
}

export default function useTimer({
  value,
  behaviour = "+",
  duration = 1000,
  skip,
  onUpdate,
}: IUseTimer): { value: IUseTimer["value"] } {
  useEffect(() => {
    if (skip) {
      return;
    }
    const handler = () => {
      if (behaviour === "+") {
        value++;
      } else {
        value--;
      }
      onUpdate?.(value);
    };
    const interval = setInterval(handler, duration);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  return { value };
}
