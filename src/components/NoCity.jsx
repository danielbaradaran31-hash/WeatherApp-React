function NoCity({ onClose }) {
  return (
    <div id="modal-screen">
      <div id="modal-content">
        <div id="danger-icon">
          <i className="fa-solid fa-exclamation"></i>
        </div>
        <p id="modal-title">Nicht gefunden !</p>
        <p id="modal-caption">Leider wurde die gesucht Stadt nicht gefunden ! </p>

        <div id="modal-footer" onClick={onClose}>
          <button id="close-btn">Bestätigung</button>
        </div>
      </div>
    </div>
  );
}

export default NoCity;
