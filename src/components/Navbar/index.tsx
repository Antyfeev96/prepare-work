import {Container, NavItem} from './styles';
import {routes} from './routes';

const Navbar = () => {
    return (
        <Container>
            {routes.map(({ url, title }) => <NavItem  key={url} to={url}>{title}</NavItem>)}
        </Container>
    );
};

export default Navbar;

