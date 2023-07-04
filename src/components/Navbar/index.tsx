import {Container, NavItem} from './styles';
import {routes} from './routes';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

export const Navbar = () => {

    const { t } = useTranslation()

    return (
        <>
            <Container>
                {routes.map(({ url, title }) => {
                    return (
                        <NavItem key={url} to={url}>{t(`navbar.${title}`)}</NavItem>
                    )
                })}
            </Container>
            <hr style={{ width: '100%' }}/>
        </>
    );
};

export const MemoNavbar = memo(Navbar)
