import {Container} from './styles.ts';
import {useTranslation} from 'react-i18next';

const FilterByStatus = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <label htmlFor="status-filter">{t('tasksList.filterByStatus')}</label>
            <input id="status-filter" type="checkbox"/>
        </Container>
    );
};

export default FilterByStatus;
