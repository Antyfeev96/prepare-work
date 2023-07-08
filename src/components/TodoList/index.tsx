import {Container} from './styles.ts';
import {MemoTodo} from './TodoItem';

const TodoList = () => {
    return (
        <Container>
            {[...Array(24)].map((_, index) => <MemoTodo key={`todo-${index}`} />)}
        </Container>
    );
};

export default TodoList;
