import React from 'react';

export default function ModalBackdrop(props) {
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={props.clickHandler}
        style={{ visibility: props.visible ? 'visible' : 'hidden' }}
      ></div>
      {props.children}
    </>
  );
}
