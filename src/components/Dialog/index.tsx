import './style.scss';


const Dialog = ({ children, open, onClose }) => {

  if (open) {
    return (
      <div className="overlay">
        <div className="modal">
          <div className="modalContent">
            <div className="wrapperModalBtn">
              <button className="buttonIcon" onClick={onClose}>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
export default Dialog;
