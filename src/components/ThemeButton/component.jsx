import { useEffect, useState } from "react";
import { Button } from "../Button/component"

const LOACL_STORAGE_KEY = "activeTheme";

export const ThemeButton = () => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem(LOACL_STORAGE_KEY) || "light"
    );

    useEffect(()=>{
        localStorage.setItem(LOACL_STORAGE_KEY, theme);
    }, [theme]);

    return (
    <Button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        type = {`btn_theme_${theme}`}
    />);
}