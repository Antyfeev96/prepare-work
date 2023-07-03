import {Container, NavItem} from './styles';
import {routes} from './routes';
import {memo} from 'react';

export const Navbar = () => {
    return (
        <>
            <Container>
                {routes.map(({ url, title }) => {
                    return (
                        <NavItem key={url} to={url}>{title}</NavItem>
                    )
                })}
            </Container>
            <hr style={{ width: '100%' }}/>
        </>
    );
};

export const MemoNavbar = memo(Navbar)
