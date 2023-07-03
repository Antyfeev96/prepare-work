import {Container} from './styles.ts';
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import {useEffect, useState} from 'react';

const ModeSwitcher = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <Container onClick={toggleTheme}>
            {
                theme === 'light'
                    ? <IoMoonOutline size="14px"/>
                    : <IoMoon size="14px"/>
            }
            <span>{theme} theme</span>
        </Container>
    );
};

export default ModeSwitcher;
