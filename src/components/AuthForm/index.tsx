import {Container, Input, Inputs, SendFormButton, Title} from './styles';

function AuthForm() {
    return (
        <Container>
            <Title>Форма авторизации</Title>
            <Inputs>
                <Input placeholder="Login"/>
                <Input placeholder="Password"/>
            </Inputs>
            <SendFormButton>Войти</SendFormButton>
        </Container>
    );
}

export default AuthForm;
