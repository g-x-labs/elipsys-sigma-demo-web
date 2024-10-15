"use client";

import { useAtom } from "jotai";
import { isScreenSupportedAtom } from "@/atoms/common/screenSizeAtom";
import { useEffect } from "react";
import ElipsysIcon from "@/assets/icons/elipsys-large.svg";

interface ScreenSizeWrapperProps {
  children: React.ReactNode;
}

const ScreenSizeWrapper: React.FC<ScreenSizeWrapperProps> = ({ children }) => {
  const [isScreenSupported, setIsScreenSupported] = useAtom(
    isScreenSupportedAtom,
  );

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsScreenSupported(screenWidth >= 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsScreenSupported]);

  return isScreenSupported ? (
    <>{children}</>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-5 text-white">
      <ElipsysIcon className="w-[180px]" />
      <p className="text-sb1">
        Unsupported screen size. Please use a larger screen.
      </p>
    </div>
  );
};

export { ScreenSizeWrapper };
