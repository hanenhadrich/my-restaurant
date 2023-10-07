import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../store/tasksSlice';
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  const collaboratorsList = useSelector(state => state.collaborators.list)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [collaboratorId, setCollaboratorId] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title,
      collaborator: collaboratorId ? Number(collaboratorId) : null
    }
    dispatch(createTask(newTask))
    setTitle('')
    setCollaboratorId(null)
    navigate('/tasks')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Task title</Form.Label>
        <Form.Control
          id="title"
          placeholder="Add your task title here ..."
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="collaborator">Collaborator</Form.Label>
        <Form.Select
          id="collaborator"
          value={collaboratorId}
          onChange={e => setCollaboratorId(e.target.value)}
        >
          <option value="">Choose a collaborator</option>
          {
            collaboratorsList.map(collaborator => (
              <option key={collaborator.id} value={collaborator.id}>{collaborator.name}</option>
            ))
          }
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="d-block mx-auto">Create</Button>
    </Form>
  )
}

export default CreateTask

