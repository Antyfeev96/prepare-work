import {Container, Input, Inputs, SendFormButton, Title} from './styles';
import {useNavigate} from 'react-router-dom';

function AuthForm() {
    const navigate = useNavigate()
    const login = () => navigate('/home')

    return (
        <Container>
            <Title>Форма авторизации</Title>
            <Inputs>
                <Input placeholder="Login"/>
                <Input placeholder="Password"/>
            </Inputs>
            <SendFormButton type="button" onClick={login}>Войти</SendFormButton>
        </Container>
    );
}

export default AuthForm;
