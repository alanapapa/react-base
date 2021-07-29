import React from 'react';
import { useTheme } from "../context/ThemeContext";

const Button = (props) => {
    const {theme, setTheme} = useTheme()
    return (
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    );
};

export default Button;