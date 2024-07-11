import React, { useState } from 'react';
import Modal from 'react-modal';
import './AccessibleModal.css';

type AccessibleModalProps = {
  closeModal: () => void;
  isOpen: boolean;
}

const AccessibleModal = ({ isOpen, closeModal }: AccessibleModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('Yes');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Attendance:', attendance);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="RSVP Modal"
      ariaHideApp={false}
      className="modal"
      overlayClassName="modal-overlay"
      role="dialog"
      aria-modal="true"
    >
      <h2 id="rsvp-modal-title">RSVP</h2>
      <form onSubmit={handleSubmit} aria-labelledby="rsvp-modal-title">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="attendance">Attendance:</label>
        <select
          id="attendance"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
          aria-required="true"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Maybe">Maybe</option>
        </select>
        <button type="submit">Submit</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AccessibleModal;
