import React from 'react';
import './Loader.css';

import { Modal, ModalBody } from 'reactstrap';

function Loader({loaderOpen = false}) {
    return (
        <Modal className='modal-loader' isOpen={loaderOpen}>
            <ModalBody className='modal-loader-dialog'>

                <div className='loader-container'>

                    <div className='shenlong'></div>

                    <div className='esferas'>

                        <div className="esfera esfera-1">
                            <span className="estrella estrella-1">★</span>
                        </div>

                        <div className="esfera esfera-2">
                            <span className="estrella estrella-1">★</span>
                            <span className="estrella estrella-2">★</span>
                        </div>

                        <div className="esfera esfera-3">
                            <span className="estrella estrella-1">★</span>
                            <span className="estrella estrella-2">★</span>
                            <span className="estrella estrella-3">★</span>
                        </div>

                        <div className="esfera esfera-4">
                            <span className="estrella estrella-1">★</span>
                            <span className="estrella estrella-2">★</span>
                            <span className="estrella estrella-3">★</span>
                            <span className="estrella estrella-4">★</span>
                        </div>

                        <div className="esfera esfera-5">
                            <span className="estrella estrella-1">★</span>
                            <span className="estrella estrella-2">★</span>
                            <span className="estrella estrella-3">★</span>
                            <span className="estrella estrella-4">★</span>
                            <span className="estrella estrella-5">★</span>
                        </div>

                        <div className="esfera esfera-6">
                            <span className="estrella estrella-1">★</span>
                            <span className="estrella estrella-2">★</span>
                            <span className="estrella estrella-3">★</span>
                            <span className="estrella estrella-4">★</span>
                            <span className="estrella estrella-5">★</span>
                            <span className="estrella estrella-6">★</span>
                        </div>


                        <div className="esfera esfera-7">
                            <span className="estrella estrella-1">★</span>
                            <span className="estrella estrella-2">★</span>
                            <span className="estrella estrella-3">★</span>
                            <span className="estrella estrella-4">★</span>
                            <span className="estrella estrella-5">★</span>
                            <span className="estrella estrella-6">★</span>
                            <span className="estrella estrella-7">★</span>
                        </div>


                    </div>

                </div>


                <div className='loader-text'>Cargando...</div>

            </ModalBody>

        </Modal>
    );
}

export default Loader;