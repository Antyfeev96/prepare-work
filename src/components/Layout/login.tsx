import {Navigate, Outlet} from 'react-router-dom';
import {Container} from './styles';
import Header from '../Header';
import {useAppSelector} from '../../hooks/redux.ts';

export const LoginLayout = () => {
    const { username } = useAppSelector(state => state.userReducer)
    if (username) {
        console.log(username)
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
