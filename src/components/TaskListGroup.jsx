import { Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import TaskDeleteModal from "./TaskDeleteModal"

function TaskList({ tasks }) {
  return (
    <ListGroup>
      {
        tasks.map(task => (
          <ListGroup.Item key={task.id} className='d-flex justify-content-between'>

            <span>{task.title}</span>

            <span className={task.collaborator ? 'text-success' : 'text-danger'}>
              {task.collaborator ? 'Assigned' : 'Not assigned'}
            </span>

            <div>
              <Button variant='info' as={Link} to={`/tasks/${task.id}`}>
                <i className="bi bi-eye"></i>
              </Button>
              <Button variant='warning' as={Link} to={`/update-task/${task.id}`} className='ms-2'>
                <i className="bi bi-pencil-square"></i>
              </Button>
              <TaskDeleteModal task={task} />
            </div>
            
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

export default TaskList
