import {Container} from './styles.ts';
import {MemoTodo} from './TodoItem';
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {useStores} from "../../context";


const TodoList = observer(() => {

    const {todosStore: {todos, getTodos}} = useStores()

    useEffect(() => {
        getTodos()
    }, [])

    return todos?.case({
        pending: () => <div>Loading...</div>,
        rejected: () => <div>ERROR</div>,
        fulfilled: (value) =>
            <>
                <div>Total: {value.length}</div>
                <Container>
                    {value.map((todo) => <MemoTodo key={todo.id} {...todo}/>)}
                </Container>
            </>
    })
})

export default TodoList;
