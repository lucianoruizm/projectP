import './CardModal.css';

export const CardModal = (props) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'black'
  }
  return (
    <div className="modal show fade" style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.name}</h5>
            <button type="button" className="btn-close" onClick={props.hideModal}></button>
          </div>
          <div className="modal-body">
            <img className="img-fluid img-modal" src={props.img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}