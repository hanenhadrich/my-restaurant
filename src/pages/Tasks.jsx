import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTasks } from '../store/tasksSlice'
import TaskListGroup from '../components/TaskListGroup'
import { Alert, Spinner } from 'react-bootstrap'

function Tasks() {
    const dispatch = useDispatch()
    const tasksList = useSelector(state => state.tasks.list)
    const tasksLoading = useSelector(state => state.tasks.loading)
    const tasksError = useSelector(state => state.tasks.error)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    if (tasksLoading) {
        return <Spinner animation="border" />
    }

    if (tasksError) {
        return (
            <Alert variant="danger">
                {tasksError}
            </Alert>
        )
    }

    return (
        <TaskListGroup tasks={tasksList} />
    )
}

export default Tasks
