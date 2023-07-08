import {Container, Input} from './styles.ts';
import {useTranslation} from 'react-i18next';

const SearchInput = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <label htmlFor="search-query">{t('todoList.searchQuery')}</label>
            <Input id="search-query"/>
        </Container>
    );
};

export default SearchInput;
