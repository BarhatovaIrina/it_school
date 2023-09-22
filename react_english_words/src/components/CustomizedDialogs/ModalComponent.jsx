import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalComponent.scss';


function ModalComponent(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Предупреждение!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Все поля должны быть заполнены. */}
                    {props.text}
                </Modal.Body>
                <Modal.Footer >
                    <div className='for_button_warning'>

                        <button className="button_warning" onClick={handleClose}>
                            Закрыть
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;