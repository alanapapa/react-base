import React from 'react';
import Header from "./Header";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";

const Container = () => {
    const {theme} = useTheme()
    return (
        <div className={`App ${theme}`}>
            <Header/>
            <Button/>
            <hr/>
            <Profile/>
        </div>
    );
};

export default Container;