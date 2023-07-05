import {Container} from './styles.ts';
import {MemoTodo} from './TodoItem';
import {useFetchAllTodosQuery} from '../../services/TodosService.ts';

const TodoList = () => {
    const {data} = useFetchAllTodosQuery(null)

    return (
        <Container>
            {data?.map((props) => <MemoTodo key={props.id} {...props} />)}
        </Container>
    );
};

export default TodoList;
