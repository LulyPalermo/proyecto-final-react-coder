export const Modal = ({ message, onClose, onConfirm, showConfirmButtons = false }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>

                {showConfirmButtons ? (
                    <div className="modal-actions">
                        <button onClick={onConfirm} className="primary-button">Confirmar</button>
                        <button onClick={onClose} className="secondary-button"> Cancelar</button>
                    </div>
                ) : (
                    <button onClick={onClose} className="primary-button">
                        Entendido
                    </button>
                )}
            </div>
        </div>
    );
};