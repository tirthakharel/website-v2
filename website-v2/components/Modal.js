import React from 'react';
import ModalBackdrop from './ModalBackdrop';

export default function Modal(props) {
  return (
    <ModalBackdrop visible={props.visible} clickHandler={props.closeModal}>
      <div
        className="modal"
        style={{
          visibility: props.visible ? 'visible' : 'hidden',
          opacity: props.visible ? 1 : 0,
        }}
      >
        <div
          className="modal-close"
          style={{ width: '20px' }}
          onClick={props.closeModal}
        />
        {props.children}
      </div>
    </ModalBackdrop>
  );
}
