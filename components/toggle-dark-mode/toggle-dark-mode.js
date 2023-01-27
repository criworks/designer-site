import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ToggleDarkmode = ({ iconA, iconB, changeBrandIsotype }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        setTheme(isDarkMode ? 'light' : 'dark')
        setTheme(resolvedTheme === "light" ? "dark" : "light")
        changeBrandIsotype()
    }

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <figure className='button-icon-box'>
                <a
                    onClick={handleDarkMode}
                >
                    {isDarkMode ? iconB : iconA}
                </a>
            </figure>
        </>
    )
}

export default ToggleDarkmode