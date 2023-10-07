import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchTaskById, unselectTask } from "../store/tasksSlice"
import Spinner from "react-bootstrap/Spinner"
import { Alert } from "react-bootstrap"

function TaskDetails() {
  const { id } = useParams()
  const taskSelected = useSelector(state => state.tasks.selected)
  const taskLoading = useSelector(state => state.tasks.loading)
  const taskError = useSelector(state => state.tasks.error)
  const collaboratorsList = useSelector(state => state.collaborators.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTaskById(id))
    return () => dispatch(unselectTask()) // Runs just before unmounting the component
  }, [])


  if (taskLoading) {
    return <Spinner animation="border" />
  }

  if (taskError) {
    return (
      <Alert variant="danger">
        {taskError}
      </Alert>
    )
  }

  if (!taskSelected) {
    return (
      <Alert variant="danger">
        Task not found
      </Alert>
    )
  }

  const collaborator = taskSelected.collaborator ? collaboratorsList.find(c => c.id === taskSelected.collaborator) : null
  return (
    <Alert variant="info">
      <Alert.Heading>{taskSelected.title}</Alert.Heading>
      <hr />
      <p>Assigned: {taskSelected.collaborator ? "Yes" : "No"}</p>
      {collaborator && <p>Assigned to: {collaborator.name}</p>}
    </Alert>
  )
}

export default TaskDetails
