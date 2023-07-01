import {Navigate, Outlet} from 'react-router-dom';
import {Container} from './styles';

export const LoginLayout = () => {
    const user =  JSON.parse(localStorage.getItem('user') || "null")
    if (user) {
        console.log(user)
        return <Navigate to="/home" replace />
    }

    return (
        <Container>
            <Outlet/>
        </Container>
    );
};
export default LoginLayout;
