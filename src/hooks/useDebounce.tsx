import React from "react";

export const useDebounce = (input: string): { debouncedValue: string } => {
  const [debouncedValue, setDebouncedValue] = React.useState("");
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 200);
    return () => clearTimeout(timer);
  }, [input]);
  return { debouncedValue };
};
