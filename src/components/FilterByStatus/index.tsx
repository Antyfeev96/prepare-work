import {Container} from './styles.ts';

const FilterByStatus = () => {
    return (
        <Container>
            <label htmlFor="status-filter">Фильтровать по статусу</label>
            <input id="status-filter" type="checkbox"/>
        </Container>
    );
};

export default FilterByStatus;
