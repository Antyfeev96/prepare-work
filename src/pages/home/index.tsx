import UserCard from '../../components/UserCard';
import {Container} from './styles.ts';

function Home() {
    return (
        <Container>
            <h1>HOME PAGE</h1>
            <UserCard/>
        </Container>
    );
}

export default Home;
