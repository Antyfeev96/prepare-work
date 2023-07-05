import {Filters} from './styles.ts';
import TodoList from '../../components/TodoList';
import SearchInput from '../../components/SearchInput';
import FilterByStatus from '../../components/FilterByStatus';

const TodosPage = () => {
    return (
        <>
            <Filters>
                <SearchInput/>
                <FilterByStatus/>
            </Filters>
            <TodoList/>
        </>
    );
};

export default TodosPage;
