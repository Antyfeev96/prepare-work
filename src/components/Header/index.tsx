import {Container} from './styles.ts';
import ModeSwitcher from './ModeSwitcher';

const Header = () => {

    return (
        <Container>
            <div>i18n</div>
            <ModeSwitcher/>
        </Container>
    );
};

export default Header;
