'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ResponsiveContextType {
  isMobile: boolean;
  setIsMobile: (mobile: boolean) => void;
}
const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
  setIsMobile: () => {},
});

export function ResponsiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = (e: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  return useContext(ResponsiveContext);
}
