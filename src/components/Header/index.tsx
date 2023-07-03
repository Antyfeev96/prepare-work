import {Container} from './styles.ts';
import ModeSwitcher from './ModeSwitcher';
import LanguageDropdown from './LanguageDropdown';

const Header = () => {

    return (
        <Container>
            <LanguageDropdown/>
            <ModeSwitcher/>
        </Container>
    );
};

export default Header;
