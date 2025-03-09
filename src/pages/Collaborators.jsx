import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { Alert, Badge, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Collaborators() {
  // const collaboratorsList = useSelector(state => state.collaborators.list)
  // const collaboratorsLoading = useSelector(state => state.collaborators.loading)
  // const collaboratorsError = useSelector(state => state.collaborators.error)

  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/collaborators")
      .then(res => {
        console.log("res.response.status: ");
        console.log(res);
        // if (res.response.status == 404) {
        //   setError(res.message)
        // }
        setCollaborators(res.data)      
        setLoading(false)
        setError(null)
        // if (res) {
          // }
        })
        .catch(err => {
          console.log(err);        
          setError(err.message)
          setLoading(false)
      })   
  }, []);
// and the we replace :
// collaboratorsList by collaborators
// collaboratorsLoading by loading
// collaboratorsError by error
// ro update jsx based on their values


  if (loading) {
    return <Spinner animation="border" />
  }

  if (error) {
    return (
      <Alert variant="danger">
        {error}
      </Alert>
    )
  }

  return (
    <div>
      <ListGroup>
        {
          collaborators.map(collaborator => (
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
