import React from 'react';
import "./Modal.css";
const Modal = ({ setOpen, children, userWidth }) => {
  return (
    <div className='modal' style={{width: userWidth}}>
      <button onClick={() => setOpen(false)}>Close</button>
      {children}
    </div>
  )
}

export default Modal;