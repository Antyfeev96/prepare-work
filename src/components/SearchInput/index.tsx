import {Container, Input} from './styles.ts';

const SearchInput = () => {
    return (
        <Container>
            <label htmlFor="search-query">Введите название</label>
            <Input id="search-query"/>
        </Container>
    );
};

export default SearchInput;
