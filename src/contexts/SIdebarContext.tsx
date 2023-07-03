import React, { useState, createContext, useContext } from "react";

interface SidebarProviderProps {
    children: React.ReactNode;
}

interface SidebarContextInterface {
    isOpen?: boolean;
    handleCloseOpen: () => void;
}

const sidebarContext = createContext<SidebarContextInterface>({
    isOpen: false,
    handleCloseOpen: () => null,
});

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleCloseOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <sidebarContext.Provider value={{ isOpen, handleCloseOpen }}>
            {children}
        </sidebarContext.Provider>
    );
};

export default SidebarProvider;
export const SidebarContext = () => {
    return useContext(sidebarContext);
};
