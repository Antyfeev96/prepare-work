import {Container} from './styles.ts';
import {MemoTask} from './TaskItem';
import {useFetchAllTasksQuery} from '../../services/TasksService.ts';

const TasksList = () => {
    const {data} = useFetchAllTasksQuery(null)

    return (
        <Container>
            {data?.map((props) => <MemoTask key={props.id} {...props} />)}
        </Container>
    );
};

export default TasksList;
