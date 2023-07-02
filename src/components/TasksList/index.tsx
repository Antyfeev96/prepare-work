import {Container} from './styles.ts';
import {MemoTask} from './TaskItem';

const TasksList = () => {
    return (
        <Container>
            {[...Array(24)].map((_, index) => <MemoTask key={`task-${index}`} />)}
        </Container>
    );
};

export default TasksList;
