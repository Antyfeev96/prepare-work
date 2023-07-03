import {Container, Input, Inputs, SendFormButton, Title} from './styles';
import {useNavigate} from 'react-router-dom';
import {FormEvent} from 'react';
import {useTranslation} from 'react-i18next';

function AuthForm() {
    const navigate = useNavigate()
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as EventTarget & {
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

    const { t } = useTranslation()

    return (
        <Container onSubmit={submitForm}>
            <Title>{t('auth.title')}</Title>
            <Inputs>
                <label htmlFor="username">{t('auth.login.label')}</label>
                <Input id="username" placeholder={t('auth.login.placeholder')}/>
                <label htmlFor="password">{t('auth.pwd.label')}</label>
                <Input id="password" placeholder={t('auth.pwd.placeholder')}/>
            </Inputs>
            <SendFormButton type="submit">
                {t('auth.submit')}
            </SendFormButton>
        </Container>
    );
}

export default AuthForm;
