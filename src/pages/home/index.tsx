import UserCard from '../../components/UserCard';
import {Container} from './styles.ts';
import {useTranslation} from 'react-i18next';

function Home() {

    const { t } = useTranslation()

    return (
        <Container>
            <h1>{t('home.title')}</h1>
            <UserCard/>
        </Container>
    );
}

export default Home;
