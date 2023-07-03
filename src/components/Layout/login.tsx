import {Navigate, Outlet} from 'react-router-dom';
import {Container} from './styles';
import Header from '../Header';

export const LoginLayout = () => {
    const user =  JSON.parse(localStorage.getItem('user') || "null")
    if (user) {
        console.log(user)
        return <Navigate to="/home" replace />
    }

    return (
        <Container>
            <Header />
            <Outlet/>
        </Container>
    );
};
export default LoginLayout;
