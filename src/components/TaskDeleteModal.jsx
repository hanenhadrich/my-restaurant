import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/tasksSlice';

function TaskDeleteModal({ task }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const handleConfirm = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <>
      <Button variant='danger' className='ms-2' onClick={() => setShow(true)}>
        <i className="bi bi-trash"></i>
    </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to delete the task: <b>{task.title}</b> ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskDeleteModal;