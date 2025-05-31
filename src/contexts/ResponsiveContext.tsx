'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ResponsiveContextType {
  isMobile: boolean;
  screenWidth: number;
  setIsMobile: (mobile: boolean) => void;
  setScreenWidth: (width: number) => void;
}

const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
  screenWidth: 0,
  setIsMobile: () => {},
  setScreenWidth: () => {},
});

export function ResponsiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = (e: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setScreenWidth(window.innerWidth);
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);

    // Initial screen width
    setScreenWidth(window.innerWidth);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider
      value={{ isMobile, screenWidth, setIsMobile, setScreenWidth }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  return useContext(ResponsiveContext);
}
