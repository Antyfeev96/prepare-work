import {Container, Input, Inputs, SendFormButton, Title} from './styles';
import {useNavigate} from 'react-router-dom';
import {FormEvent} from 'react';

function AuthForm() {
    const navigate = useNavigate()
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };
        const username = target.username.value
        const password = target.password.value
        const user = JSON.stringify({
            username,
            password
        })
        localStorage.setItem('user', user)
        navigate('/home')
    }

    return (
        <Container onSubmit={submitForm}>
            <Title>Форма авторизации</Title>
            <Inputs>
                <label htmlFor="username">Логин</label>
                <Input id="username" placeholder="Login"/>
                <label htmlFor="password">Пароль</label>
                <Input id="password" placeholder="Password"/>
            </Inputs>
            <SendFormButton
                type="submit"
            >
                Войти
            </SendFormButton>
        </Container>
    );
}

export default AuthForm;
