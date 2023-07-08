import {Container, Input} from './styles.ts';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {getPaginationParams} from '../../store/reducers/selectors.ts';
import {setQueryString} from '../../store/reducers/TodosSlice.ts';
import {ChangeEvent} from 'react';

const SearchInput = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const {title_like} = useAppSelector(getPaginationParams)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setQueryString(e.target.value))
    }

    return (
        <Container>
            <label htmlFor="search-query">{t('todoList.searchQuery')}</label>
            <Input id="search-query" value={title_like} onChange={onChange}/>
        </Container>
    );
};

export default SearchInput;
