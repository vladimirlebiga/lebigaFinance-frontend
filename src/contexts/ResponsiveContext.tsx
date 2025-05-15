// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';

// interface ResponsiveContextType {
//     isMobile: boolean;
//     setIsMobile: (mobile: boolean) => void;
// }
// const ResponsiveContext = createContext<ResponsiveContextType>({
//     isMobile: false,
//     setIsMobile: () => {},
// });

// export function ResponsiveProvider({ children }: { children: React.ReactNode }) {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
