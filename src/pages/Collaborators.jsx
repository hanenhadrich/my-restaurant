import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { Alert, Badge, Spinner } from 'react-bootstrap';

function Collaborators() {
  const collaboratorsList = useSelector(state => state.collaborators.list)
  const collaboratorsLoading = useSelector(state => state.collaborators.loading)
  const collaboratorsError = useSelector(state => state.collaborators.error)

  if (collaboratorsLoading) {
    return <Spinner animation="border" />
  }

  if (collaboratorsError) {
    return (
      <Alert variant="danger">
        {collaboratorsError}
      </Alert>
    )
  }

  return (
    <div>
      <ListGroup>
        {
          collaboratorsList.map(collaborator => (
            <ListGroup.Item key={collaborator.id}>
              <span className='me-4'>{collaborator.name}</span>
              <Badge bg="primary">{collaborator.email}</Badge>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}

export default Collaborators
