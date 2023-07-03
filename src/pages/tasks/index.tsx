import {Filters} from './styles.ts';
import TasksList from '../../components/TasksList';
import SearchInput from '../../components/SearchInput';
import FilterByStatus from '../../components/FilterByStatus';

const TasksPage = () => {
    return (
        <>
            <Filters>
                <SearchInput/>
                <FilterByStatus/>
            </Filters>
            <TasksList/>
        </>
    );
};

export default TasksPage;
