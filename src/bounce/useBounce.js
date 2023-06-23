import { useEffect, useState } from "react";
export function useBounce(value, any) {
  const [debouncedValue, setBouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setBouncedValue(value);
    },any);



    return () => {
      clearTimeout(handler);
    };
  }, [value, any]);

  
  return debouncedValue;
}
export default useBounce;
