import {Container, Input, Inputs, SendFormButton, Title} from './styles';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

function AuthForm() {
    const navigate = useNavigate()
    const login = () => navigate('/home')

    const onKeyDown = (e: KeyboardEventInit) => {
        if (e.key === 'Enter') {
            login()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    return (
        <Container>
            <Title>Форма авторизации</Title>
            <Inputs>
                <Input placeholder="Login"/>
                <Input placeholder="Password"/>
            </Inputs>
            <SendFormButton
                type="button"
                onClick={login}
            >
                Войти
            </SendFormButton>
        </Container>
    );
}

export default AuthForm;
