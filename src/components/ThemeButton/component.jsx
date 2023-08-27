import { useEffect, useState } from "react";
import { Button } from "../Button/component"

export const ThemeButton = () => {
    const [theme, setTheme] = useState("light");

    useEffect = (()=>{
        
    }, [])

    return <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Light
        </Button>
}