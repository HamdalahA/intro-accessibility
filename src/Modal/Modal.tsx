import './Modal.css';

type ModalProps = {
  closeModal: () => void;
}

const RSVPModal = ({closeModal}: ModalProps) => {


  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div>
        <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>RSVP Form</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <select className="form-input">
              <option value="">Attending?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <input type="text" placeholder="Number of guests" className="form-input" />
            <input type="text" placeholder="Dietary restrictions" className="form-input" />
            <button onClick={handleSubmit} className="button">Submit RSVP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSVPModal;
