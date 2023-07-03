import {
    Navigate,
    Outlet,
} from 'react-router-dom';
import {MemoNavbar as Navbar} from '../Navbar';
import {Container, ContentContainer} from './styles.ts';
import Header from '../Header';


interface Props {
    redirectPath?: string
}

const ProtectedLayout = ({redirectPath = '/auth'}: Props) => {
    const user = JSON.parse(localStorage.getItem('user') || "null")
    if (!user) {
        console.log('no user')
        return <Navigate to={redirectPath} replace/>;
    }

    return (
        <Container>
            <Header />
            <Navbar/>
            <ContentContainer>
                <Outlet/>
            </ContentContainer>
        </Container>
    )
};

export default ProtectedLayout
