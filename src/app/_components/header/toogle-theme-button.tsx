'use client'

import { useTheme } from 'next-themes';
import React from 'react'

const ToogleThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => {
                if (theme === "dark") {
                    setTheme("light");
                } else {
                    setTheme("dark");
                }
            }}
            className="btn-primary"
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
    )
}

export default ToogleThemeButton