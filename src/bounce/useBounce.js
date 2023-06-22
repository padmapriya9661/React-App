import { useEffect, useState } from "react";
export function useDebounce(value, any) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    },any);



    return () => {
      clearTimeout(handler);
    };
  }, [value, any]);

  
  return debouncedValue;
}
export default useDebounce;
