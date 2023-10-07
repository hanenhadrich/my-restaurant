import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchTaskById, unselectTask, updateTask } from "../store/tasksSlice"
import Spinner from "react-bootstrap/Spinner"
import { Alert, Button, Form } from "react-bootstrap"

function UpdateTask() {
  const { id } = useParams()
  const taskSelected = useSelector(state => state.tasks.selected)
  const taskLoading = useSelector(state => state.tasks.loading)
  const taskError = useSelector(state => state.tasks.error)
  const collaboratorsList = useSelector(state => state.collaborators.list)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [taskTitle, setTaskTitle] = useState("")
  const [taskCollaboratorId, setTaskColaboratorId] = useState("")

  useEffect(() => {
    dispatch(fetchTaskById(id))
    return () => dispatch(unselectTask()) // Runs just before unmounting the component
  }, [])

  useEffect(() => {
    if (taskSelected) {
      setTaskTitle(taskSelected.title)
      setTaskColaboratorId(taskSelected.collaborator)
    }
  }, [taskSelected])


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateTask({
      taskId: Number(id),
      newData: {
        title: taskTitle,
        collaborator: taskCollaboratorId ? Number(taskCollaboratorId) : null
      }
    }))
    navigate('/tasks')
  }

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

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Task title</Form.Label>
        <Form.Control
          id="title"
          placeholder="Add your task title here ..."
          required
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="collaborator">Collaborator</Form.Label>
        <Form.Select
          id="collaborator"
          value={taskCollaboratorId}
          onChange={e => setTaskColaboratorId(e.target.value)}
        >
          <option value="">Not assigned</option>
          {
            collaboratorsList.map(collaborator => (
              <option key={collaborator.id} value={collaborator.id}>{collaborator.name}</option>
            ))
          }
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="d-block mx-auto">Update</Button>
    </Form>
  )
}

export default UpdateTask
