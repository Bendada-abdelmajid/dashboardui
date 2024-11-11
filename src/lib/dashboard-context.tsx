"use client";

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useState } from 'react';


type ContextType = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<ContextType | undefined>(undefined);

type ProviderProps = {
    children: ReactNode;
};

export const DashboardProvider = ({ children }: ProviderProps) => {
    const [openMenu, setOpenMenu] = useState(false);
    const pathname = usePathname()

    return (
        <Context.Provider value={{ openMenu, setOpenMenu }}>
            <AnimatePresence key={pathname} mode="wait">
              
                {children}
            </AnimatePresence>
        </Context.Provider>
    );
}

export const useDashboardContext = (): ContextType => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error("useDashboardContext must be used within a DashboardProvider");
    }
    return context;
};
