import React, { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            Active theme: {theme}
        </div>
    );
};

export default Header;