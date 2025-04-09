import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes, createNote, updateNote, deleteNote } from '../store/notesSlice';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi'; 
import { Modal, Button } from 'react-bootstrap'; 
import "../css/dashboard.css";
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.notes);

  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editNote, setEditNote] = useState({ id: null, title: '', content: '' });
  const [showModal, setShowModal] = useState(false); 
  const [showEditModal, setShowEditModal] = useState(false); 

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleCreateNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      alert("Veuillez remplir tous les champs avant d'ajouter une note.");
      return;
    }
    dispatch(createNote(newNote));
    setNewNote({ title: '', content: '' });
    setShowModal(false); 
  };

  const handleUpdateNote = () => {
    if (!editNote.title.trim() || !editNote.content.trim()) {
      alert("Veuillez remplir tous les champs avant de mettre à jour la note.");
      return;
    }
    dispatch(updateNote({ noteId: editNote.id, updatedData: editNote }));
    setShowEditModal(false); 
    setEditNote({ id: null, title: '', content: '' });
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const handleSelectNote = (note) => {
    setEditNote(note);
    setShowEditModal(true);
  };

  return (
    <div className="d-flex">
  <Sidebar />
  <div className="dashboard-container">
    <div className="header-title">
      <h1>Dashboard Admin</h1>
      
    </div>

    {loading && <p className="loading">Chargement...</p>}
    {error && <p className="error">Erreur: {error}</p>}

    <div className="notes-header">
  <h2>Liste des Notes</h2>
  <FiPlus
    className="icon add-icon"
    onClick={() => setShowModal(true)}
    aria-label="Ajouter une note"
  />
</div>

    <div className="notes-list-container">
      <ul className="notes-list">
            {list.map((note) => (
              <li key={note.id} className="note-item">
                <div className="note-content">
                  <div className="note-title">
                    <strong>{note.title}</strong>
                  </div>
                  <div className="note-text">
                    {note.content}
                  </div>
                </div>
                <div className="note-actions">
                  <FiEdit 
                    className="icon edit-icon" 
                    onClick={() => handleSelectNote(note)} 
                    aria-label="Modifier la note" 
                  />
                  <FiTrash2 
                    className="icon delete-icon" 
                    onClick={() => handleDeleteNote(note.id)} 
                    aria-label="Supprimer la note" 
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal pour ajouter une note */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une Nouvelle Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            className="input-field"
            placeholder="Titre"
          />
          <textarea
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            className="textarea-field"
            placeholder="Contenu"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleCreateNote}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal pour modifier une note */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier la Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editNote.title}
            onChange={(e) => setEditNote({ ...editNote, title: e.target.value })}
            className="input-field"
            placeholder="Titre"
          />
          <textarea
            value={editNote.content}
            onChange={(e) => setEditNote({ ...editNote, content: e.target.value })}
            className="textarea-field"
            placeholder="Contenu"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleUpdateNote}>
            Mettre à jour
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
