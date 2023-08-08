import { createContext, useContext, useRef, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({children}) => {
    const [onNav, setOnNav] = useState("navBar")

    const handleNav = () => {
        onNav === "navBar" ? setOnNav("navBar active-responsive") : setOnNav("navBar");
    }

    const value = {
        onNav,
        setOnNav,
        handleNav,
    }

    return (
        <NavContext.Provider value={value}>
            {children}
        </NavContext.Provider>
    )
}

export const NavState = () => {
    return useContext(NavContext)
}