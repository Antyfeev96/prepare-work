import {memoNavbar as Navbar} from '../Navbar';
import {Outlet, useLocation} from 'react-router-dom';
import {Container} from './styles';

const Layout = () => {
    const location = useLocation();
    const user = location.pathname !== '/auth'
    return (
        <Container>
            {user && <Navbar/>}
            <Outlet/>
        </Container>
    );
};

export default Layout;
