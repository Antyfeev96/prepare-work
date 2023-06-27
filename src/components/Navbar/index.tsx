import {Container, NavItem} from './styles';
import {routes} from './routes';
import {memo} from 'react';

export const Navbar = () => {
    return (
        <Container>
            {routes.map(({ url, title }) => {
                console.log(`RENDER ${title}`)
                return (
                    <NavItem key={url} to={url}>{title}</NavItem>
                )
            })}
        </Container>
    );
};

export const memoNavbar = memo(Navbar)
