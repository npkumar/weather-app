import { useEffect, useState } from "react";

export const SM = 576;
export const MD = 768;
export const LG = 992;

const useIsBreakpoint = (size) => {
  const [isGreaterThanSize, setIsGreaterThanSize] = useState(
    window.innerWidth >= size
  );

  useEffect(() => {
    const handleResize = () => setIsGreaterThanSize(window.innerWidth >= size);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return isGreaterThanSize;
};

export default useIsBreakpoint;
